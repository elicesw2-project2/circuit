import express from 'express';
import * as comments from '../controller/comment.controller.js';

const router = express.Router();

// id로 사용자 조회
router.get('/:post_idx/comments', comments.findAll);

// id로 댓글 등록
router.post('/:post_idx/comments', comments.createComment);

// 댓글 수정
router.patch('/:post_idx/comments/:comment_idx', comments.updateComment);

// 댓글 삭제
router.delete('/:post_idx/comments/:comment_idx', comments.deleteComment);

export default router;
