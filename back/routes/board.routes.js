import express from 'express';
import * as post from '../controller/post.controller.js';

const router = express.Router();

// const post = [{ post_idx: 1, user: 'test_user', title: 'test_title', body: 'body', date: '2022-04-30 23:31:13' }];
// const posts = [];

/* 게시글 생성 */
router.post('/', post.create);

/* 게시글 전체 조회 */
router.get('/', post.findAll);

// 게시글 id로 조회
router.get('/:post_idx', post.findOne);

// 게시글 id로 수정
router.put('/:post_idx', post.update);

// 게시글 id로 삭제
router.delete('/:post_idx', post.deleteId);

export default router;
