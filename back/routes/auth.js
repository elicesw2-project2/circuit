import express from 'express';
import * as authController from '../controller/auth.controller.js';
import isAuth from '../models/auth.model.js';
import * as validator from '../middleware/auth.middleware';

const router = express.Router();

router.post('/signup', validator.validateSignup, authController.signup);
router.post('/login', validator.validateCredential, authController.login);
router.get('/me', isAuth, authController.me);
export default router;
