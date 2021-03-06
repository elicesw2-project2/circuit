import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from './user.controller.js';

dotenv.config();

// 기본 설정
const jwtSecretKey = process.env.AUTH_jwtSecretKey;
const jwtExpiresInDays = process.env.AUTH_jwtExpiresInDays;
let bcryptSaltRounds = process.env.AUTH_bcryptSaltRounds;
bcryptSaltRounds = parseInt(bcryptSaltRounds);

// signup 확인 + 토큰
export async function signup(req, res) {
	const { id, pw, nickname, profile } = req.body;
	const found = await userRepository.findByUserid(id);

	// console.log(`found:${found}`);
	if (found) {
		return res.status(409).json({ status: 409, message: `${id} already exists` });
	}
	const hashed = await bcrypt.hash(pw, bcryptSaltRounds);
	const userId = await userRepository.createUser({
		id,
		pw: hashed,
		nickname,
		profile,
	});

	const token = createJwtToken(userId);
	res.status(201).json({ status: 201, message: '회원가입 성공', data: { token, id } });
}

// login 확인 + 토큰
export async function login(req, res) {
	const { id, pw } = req.body;
	const user = await userRepository.findByUserid(id);
	if (!user) {
		return res.status(404).json({ status: 404, message: 'User not found' });
	}

	const isValidPassword = await bcrypt.compare(pw, user.pw);
	console.log('isValidPassword', isValidPassword);
	if (!isValidPassword) {
		return res.status(401).json({ status: 401, message: `Invalid email or password` });
	}
	if (user.id == id && isValidPassword) {
		const token = createJwtToken(id);
		console.log('성공');
		res.status(200).json({ status: 200, message: '로그인 성공', data: { token, id } });
	} else {
		console.log('실패');
		return res.status(401).json({ status: 401, mesage: `Invalid email or password` });
	}
}

function createJwtToken(id) {
	return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}

// me
export async function me(req, res, next) {
	const user = await userRepository.findByUserid(req.headers.id);
	if (!user) {
		return res.status(404).json({ status: 404, message: 'User not found' });
	}
	console.log(req.headers);
	return res.status(200).json({ status: 200, message: '토큰 일치', data: { id: req.headers.id } });
}
