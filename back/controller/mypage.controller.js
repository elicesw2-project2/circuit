import User from '../models/mypage.model.js';

// id로 조회
export function findOne(req, res) {
	User.findById(req.params.userId, (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					status: 404,
					message: `Not found User with id ${req.params.userId}.`,
				});
			} else {
				res.status(500).send({
					status: 500,
					message: `Error retrieving User with id ${req.params.userId}`,
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

// id로 갱신
export function update(req, res) {
	// Validate Request
	if (!req.body) {
		res.status(400).send({
			status: 400,
			message: 'Content can not be empty!',
		});
	}

	User.updateById(req.params.userId, new User(req.body), (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					message: `Not found User with id ${req.params.userId}.`,
				});
			} else {
				res.status(500).send({
					message: `Error updating User with id ${req.params.userId}`,
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

// id로 삭제
export function deleteId(req, res) {
	// Validate Request
	if (!req.body) {
		res.status(400).send({
			status: 400,
			message: 'Content can not be empty!',
		});
	}

	User.remove(req.params.userId, new User(req.body), (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					status: 404,
					message: `Not found User with id ${req.params.userId} and pw ${req.body.pw}.`,
				});
			} else {
				res.status(500).send({
					status: 500,
					message: `Could not delete User with id ${req.params.userId}and pw ${req.body.pw}`,
				});
			}
		} else
			res.send({
				status: 200,
				message: `User was deleted successfully!`,
			});
	});
}

// nickname check
export function findNickname(req,res){
	if (!req.body) {
		res.status(400).send({
			status: 400,
			message: 'Content can not be empty!',
		});
	}

	User.getCheckNickname(new User(req.body),(err, data)=>{
		if (err) {
			if (err.kind === 'not_found') {
				// 중복 닉네임이 없을 때
				res.status(404).send({
					
					message: '중복 닉네임 없음',
					data : 'false',
				});
			} else {
				res.status(500).send({
					status: 500,
					message: `Error retrieving User with nickname ${req.params.nickname}`,
				});
			}
		} else {
			res.send({
				status: 200,
				message: '닉네임 중복',
				data : 'true',
			});
		}
	})
}

// id로 게시글 조회
export function findPosts(req, res) {
	User.getPostsById(req.params.userId, (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					status: 404,
					message: `Not found User with id ${req.params.userId}.`,
				});
			} else {
				res.status(500).send({
					status: 500,
					message: `Error retrieving User with id ${req.params.userId}`,
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

// id로 댓글 조회
export function findComments(req, res) {
	User.getCommentsById(req.params.userId, (err, data) => {
		if (err) {
			if (err.kind === 'not_found') {
				res.status(404).send({
					status: 404,
					message: `Not found User with id ${req.params.userId}.`,
				});
			} else {
				res.status(500).send({
					status: 500,
					message: `Error retrieving User with id ${req.params.userId}`,
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
