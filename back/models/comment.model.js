import sql from './db.js';

// 생성자
const Comment = function (comment) {
	// this.comment_idx = comment.comment_idx;
	this.comment_id = comment.comment_id;
	this.content = comment.content;
	this.date = comment.date;
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

// 댓글 등록
Comment.create = (post_idx, newComment, result) => {
	sql.query(
		'insert into comment (comment_id,content,profile,nickname,date,post_idx) values (?,?,?,?,?,?);',
		[newComment.comment_id, newComment.content,newComment.profile, newComment.nickname,newComment.date, post_idx],
		(err, res) => {
			if (err) {
				console.log('error: ', err);
				result(err, null);
				return;
			}

			console.log('Created customer: ', { id: res.comment_id, ...newComment });
			result(null, { id: res.comment_id, ...newComment });
		}
	);
};

// 댓글 수정
Comment.update = (post_idx, comment_idx, comment, result) => {
	sql.query(
		'UPDATE comment SET content = ?, date = ? WHERE post_idx = ? and comment_idx = ?',
		[comment.content, comment.date, post_idx, comment_idx],
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
