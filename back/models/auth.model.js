import jwt from 'jsonwebtoken';
import * as userRepository from '../controller/user.controller.js';

const AUTH_ERROR = { message: 'Authentication Error' };
const isAuth = async (req, res, next) => {
	const authHeader = req.get('authorization');
	if (!(authHeader && authHeader.startsWith('Bearer '))) {
		return res.status(401).json({ message: AUTH_ERROR });
	}
	const token = authHeader.split(' ')[1];

	jwt.verify(
		//
		token,
		'PV59zFWNbrvJrfDLkETWe2VHZttSfSq9',
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
