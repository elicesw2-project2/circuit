import jwt from 'jsonwebtoken';
import User from '../models/auth.model.js';

const AUTH_ERROR = { message: 'Authentication Error' };

// 새 객체 생성
export function create(req, res) {
	if (!req.body) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
	}

	const User = new User({
		email: req.body.email,
		password: req.body.password,
		nickname: req.body.nickname,
		url: req.body.url,
	});

	// 데이터베이스에 저장
	User.createUser(User, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || 'Some error occured while creating th Customer.',
			});
		}
	});
}

// id로 조회
export function findByUserid(req, res) {
	User.findById(req.params.userId, (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					message: `Not found Customer with id ${req.params.userId}.`,
				});
			} else {
				res.status(500).send({
					message: `Error retrieving Customer with id ${req.params.userId}`,
				});
			}
		} else res.send(data);
	});
}

// email로 조회
export function findOneByEmail(req, res) {
	User.findByEmail(req.params.userEmail, (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					message: `Not found Customer with id ${req.params.userEmail}.`,
				});
			} else {
				res.status(500).send({
					message: `Error retrieving Customer with id ${req.params.userEmail}`,
				});
			}
		} else res.send(data);
	});
}

export const isAuth = async (req, res, next) => {
	const authHeader = req.get('Authorization');
	if (!(authHeader && authHeader.startsWith('Bearer '))) {
		return res.status(401).json(AUTH_ERROR);
	}
	const token = authHeader.aplit(' ')[1];

	jwt.verify(token, 'PV59zFWNbrvJrfDLkETWe2VHZttSfSq9', async (error, decoded) => {
		if (error) {
			return res.status(401).json(AUTH_ERROR);
		}
		const user = await findByUserid(decoded.id);
		if (!user) {
			return res.status(401).json(AUTH_ERROR);
		}
		req.userId = user.id;
		next();
	});
};
