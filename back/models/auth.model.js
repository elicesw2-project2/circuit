import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import * as userRepository from '../controller/user.controller.js';

dotenv.config(); // evn

const jwtSecretKey = process.env.AUTH_jwtSecretKey;
const AUTH_ERROR = { message: 'Authentication Error' };

const isAuth = async (req, res, next) => {
	const authHeader = req.get('authorization');

	// authorization : Bearer token
	if (!(authHeader && authHeader.startsWith('Bearer '))) {
		return res.status(401).json({ message: AUTH_ERROR });
	}
	const token = authHeader.split(' ')[1];

	jwt.verify(
		//
		token,
		jwtSecretKey,
		async (error, decoded) => {
			if (error) {
				return res.status(401).json({ message: AUTH_ERROR });
			}

			const user = await userRepository.findByUserid(decoded.id);

			if (error) console.log(AUTH_ERROR);
			req.headers.id = user.id;
			next();
		}
	);
};
export default isAuth;
