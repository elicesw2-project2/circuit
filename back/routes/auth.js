import express from 'express';
import { body } from 'express-validator';
import validate from '../models/validator.js';
import * as authController from '../controller/auth.controller.js';
import { isAuth } from '../controller/user.controller.js';
import * as userController from '../controller/user.controller.js';

const router = express.Router();

// login 유효성 검사
const validateCredential = [
	body('userid') //
		.isEmail()
		.normalizeEmail()
		.notEmpty()
		.withMessage('invalid email'),
	body('password') //
		.trim()
		.isLength({ min: 5 })
		.withMessage('비밀번호는 5글자 이상이어야 합니다.'),
	validate,
];
// signup 유효성 검사
const validateSignup = [
	...validateCredential,
	body('nickname') //
		.notEmpty()
		.withMessage('nickname is missing'),
	body('url') //
		.isURL()
		.withMessage('invalid URL')
		.optional({ nullable: true, checkFalsy: true }), // 필수x
	validate,
];
router.post('/signup', validateSignup, authController.signup, userController.create);
router.post('/login', validateCredential, authController.login);
router.get('/me', isAuth, authController.me);
export default router;
