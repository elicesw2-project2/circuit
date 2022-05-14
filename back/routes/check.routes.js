import express from 'express';
import * as users from '../controller/mypage.controller.js';

const router = express.Router();

// id로 닉네임 체크
router.get('/nickname', users.findNickname);


export default router;
