import express from 'express';
import * as post from '../controller/post.controller.js';

const router = express.Router();

/* 게시글 title 검색 */
router.get('/:title', post.search);

export default router;
