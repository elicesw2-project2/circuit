import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from './user.controller.js';

// 기본 설정
const jwtSecretKey = 'PV59zFWNbrvJrfDLkETWe2VHZttSfSq9';
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 12;

// signup 확인 + 토큰
export async function signup(req, res) {
	const { id, pw, nickname, profile } = req.body;
	const found = await userRepository.findByUserid(id);

	console.log(`found:${found}`);
	if (found) {
		return res.status(409).json({ mesage: `${id} already exists` });
	}
	const hashed = await bcrypt.hash(pw, bcryptSaltRounds);
	const userId = await userRepository.createUser({
		id,
		pw: hashed,
		nickname,
		profile,
	});
	const token = createJwtToken(id);
	res.status(201).json({ token, id });
}

// login 확인 + 토큰
export async function login(req, res) {
	const { id, pw } = req.body;
	const user = await userRepository.findByUserid(id);
	if (!user) {
		return res.status(404).json({ message: 'User not found' });
	}
	const isValidPassword = await bcrypt.compare(pw, user.pw);
	console.log('isValidPassword', isValidPassword);
	if (!isValidPassword) {
		return res.status(401).json({ mesage: `Invalid email or password` });
	}
	if (user.id == id && isValidPassword) {
		const token = createJwtToken(id);
		console.log('성공');
		res.status(200).json({ token, id });
	} else {
		console.log('실패');
		return res.status(401).json({ mesage: `Invalid email or password` });
	}
}

function createJwtToken(id) {
	return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}

// me
export async function me(req, res, next) {
	const user = await userRepository.findByUserid(req.headers.id);
	if (!user) {
		return res.status(404).json({ message: 'User not found' });
	}
	return res.status(200).json({ token: req.token, id: req.headers.id });
}
