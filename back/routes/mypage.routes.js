import express from 'express';
import * as users from '../controller/mypage.controller.js';

const router = express.Router();

// id로 사용자 조회
router.get('/:userId', users.findOne);

// id로 사용자 정보 수정
router.put('/:userId', users.update);

// id로 사용자 삭제
router.delete('/:userId', users.deleteId);

// id로 게시글 조회
router.get('/:userId/posts', users.findPosts);

// id로 댓글 조회
router.get('/:userId/comments', users.findComments);

export default router;
