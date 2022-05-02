import sql from './db.js';

// 생성자
const Comment = function (user) {
	this.comment_idx = user.comment_idx;
	this.id = user.id;
	this.content = user.content;
	this.date = user.date;
	this.profile = user.profile;
	this.post_idx = user.post_idx;
	this.nickname = user.nickname;
};

// 특정 게시물 comment 전체 조회
Comment.getAll = (post_idx, result) => {
	sql.query('SELECT * FROM comment WHERE post_idx = ?', post_idx, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log('found comments: ', res);
			result(null, res);
			return;
		}

		// 결과가 없을 시
		result({ kind: 'not_found' }, null);
	});
};

export default Comment;
