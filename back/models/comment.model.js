import sql from './db.js';

// 생성자
const Comment = function (comment) {
	// this.comment_idx = comment.comment_idx;
	this.id = comment.id;
	this.content = comment.content;
	this.date = new Date();
	this.profile = comment.profile;
	// this.post_idx = comment.post_idx;
	this.nickname = comment.nickname;
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

// 댓글 데이터 추가
Comment.create = (post_idx, newComment, result) => {
	sql.query(
		'insert into comment (id,content,profile,nickname,post_idx) values (?,?,?,?,?);',
		[newComment.id, newComment.content, newComment.profile, newComment.nickname, post_idx],
		(err, res) => {
			if (err) {
				console.log('error: ', err);
				result(err, null);
				return;
			}

			console.log('Created customer: ', { id: res.comment_idx, ...newComment });
			result(null, { id: res.comment_idx, ...newComment });
		}
	);
};

// 댓글 수정
Comment.update = (post_idx, comment_idx, comment, result) => {
	sql.query(
		'UPDATE comment SET content = ?, date = ? WHERE post_idx = ? and comment_idx = ?',
		[comment.content, new Date(), post_idx, comment_idx],
		(err, res) => {
			if (err) {
				console.log('error: ', err);
				result(err, null);
				return;
			}

			if (res.affectedRows == 0) {
				// id 결과가 없을 시
				result({ kind: 'not_found' }, null);
				return;
			}

			console.log('update comment: ', { ...comment });
			result(null, { ...comment });
		}
	);
};

// comment_idx로 삭제
Comment.remove = (post_idx, comment_idx, result) => {
	sql.query('DELETE FROM comment WHERE post_idx = ? and comment_idx = ?', [post_idx, comment_idx], (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.affectedRows == 0) {
			// id 결과가 없을 시
			result({ kind: 'not_found' }, null);
			return;
		}

		console.log('deleted comment with comment_idx: ', comment_idx);
		result(null, res);
	});
};

export default Comment;
