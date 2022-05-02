import express from 'express';
import * as comments from '../controller/comment.controller.js';

const router = express.Router();

// id로 사용자 조회
router.get('/:post_idx/comments', comments.findAll);

export default router;
