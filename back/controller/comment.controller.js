import Comment from '../models/comment.model.js';

// post_idx로 조회
export function findAll(req, res) {
	Comment.getAll(req.params.post_idx, (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					status: 404,
					message: `Not found comments with post_idx ${req.params.post_idx}.`,
				});
			} else {
				res.status(500).send({
					status: 500,
					message: `Error retrieving comments with post_idx ${req.params.post_idx}`,
				});
			}
		} else {
			res.send({
				status: 200,
				message: '성공',
				data,
			});
		}
	});
}

// 댓글 추가
export function createComment(req, res) {
	if (!req.body) {
		res.status(400).send({
			message: 'Content can not be empty!',
		});
	}

	const comment = new Comment({
		id: req.body.id,
		content: req.body.content,
		profile: req.body.profile,
		nickname: req.body.nickname,
	});

	// 데이터베이스에 저장
	Comment.create(req.params.post_idx, comment, (err, data) => {
		if (err) {
			res.status(500).send({
				message: err.message || 'Some error occured while creating th Comment.',
			});
		} else {
			res.send({
				status: 200,
				message: '성공',
				data,
			});
		}
	});
}

// post_idx/comment_idx로 수정
export function updateComment(req, res) {
	// Validate Request
	if (!req.body) {
		res.status(400).send({
			status: 400,
			message: 'Content can not be empty!',
		});
	}

	Comment.update(req.params.post_idx, req.params.comment_idx, new Comment(req.body), (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					message: `Not found Comment with comment_idx ${req.params.comment_idx} in post_idx ${req.params.post_idx}.`,
				});
			} else {
				res.status(500).send({
					message: `Error updating Comment with comment_idx ${req.params.comment_idx} in post_idx ${req.params.post_idx}.`,
				});
			}
		} else {
			res.send({
				status: 200,
				message: '성공',
				data,
			});
		}
	});
}

// comment_idx로 삭제
export function deleteComment(req, res) {
	// Validate Request
	if (!req.body) {
		res.status(400).send({
			status: 400,
			message: 'Content can not be empty!',
		});
	}

	Comment.remove(req.params.post_idx, req.params.comment_idx, (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					status: 404,
					message: `Not found Comment with comment_idx ${req.params.comment_idx} in post_idx ${req.params.post_idx}`,
				});
			} else {
				res.status(500).send({
					status: 500,
					message: `Could not delete Comment with comment_idx ${req.params.comment_idx} in post_idx ${req.params.post_idx}`,
				});
			}
		} else
			res.send({
				status: 200,
				message: `Comment was deleted successfully!`,
			});
	});
}
