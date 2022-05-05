import jwt from 'jsonwebtoken';
import * as userRepository from '../data/auth.js';

const AUTH_ERROR = { message: 'Authentication Error' };

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
		const user = await userRepository.findByUserid(decoded.id);
		if (!user) {
			return res.status(401).json(AUTH_ERROR);
		}
		req.userId = user.id;
		next();
	});
};
