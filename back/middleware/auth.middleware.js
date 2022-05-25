import { body } from 'express-validator';
import validate from '../models/validator.js';

// login 유효성 검사
export const validateCredential = [
	body('id') //
		.isEmail()
		.normalizeEmail()
		.notEmpty()
		.withMessage('invalid email'),
	body('pw') //
		.trim()
		.isLength({ min: 5 })
		.withMessage('비밀번호는 5글자 이상이어야 합니다.'),
	validate,
];
// signup 유효성 검사
export const validateSignup = [
	...validateCredential,
	body('nickname')
		.trim()
		.isLength({ max: 8 }) //
		.withMessage('닉네임을 8글자 이하로 설정해주세요.'),
	body('profile') //
		.optional({ nullable: true, checkFalsy: true }), // 필수x
	validate,
];
