import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../models/db.js';

// 기본 설정
const jwtSecretKey = 'PV59zFWNbrvJrfDLkETWe2VHZttSfSq9';
const jwtExpiresInDays = '2d';
const bcryptSaltRounds = 12;

// signup 확인 + 토큰
export async function signup(req, res) {
	const { userid, password, nickname, url } = req.body;
	const found = await userRepository.findByUserid(userid);
	if (found) {
		return res.status(409).json({ mesage: `${userid} already exists` });
	}
	const hashed = await bcrypt.hash(password, bcryptSaltRounds);
	const userId = await userRepository.createUser({
		userid,
		password: hashed,
		nickname,
		url,
	});
	const token = createJwtToken(userId);
	res.status(201).json({ token, userid });
}
// login 확인 + 토큰
export async function login(req, res) {
	const { userid, password } = req.body;
	const user = await userRepository.findByUserid(userid);
	if (!user) {
		return res.status(401).json({ mesage: `Invalid email or password` });
	}
	const isValidPassword = await bcrypt.compare(password, user.password);
	if (!isValidPassword) {
		return res.status(401).json({ mesage: `Invalid email or password` });
	}
	const token = createJwtToken(user.id);
	res.status(200).json({ token, userid });
}

function createJwtToken(id) {
	return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpiresInDays });
}

// me
export async function me(req, res, next) {
	const user = await userRepository.findByUserid(req.userId);
	if (!user) {
		return res.status(404).json({ message: 'User not found' });
	}
	res.status(200).json({ token: req.token, username: user.username });
}
