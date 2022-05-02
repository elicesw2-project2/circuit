import Comment from '../models/commnet.model.js';

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
