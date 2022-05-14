import sql from './db.js';

// 생성자
const Users = function (user) {
	this.id = user.id;
	this.pw = user.pw;
	this.nickname = user.nickname;
	this.profile = user.profile;
	this.intro = user.intro;
};

// user id로 조회
Users.findById = (userId, result) => {
	sql.query('SELECT * FROM user WHERE id = ?', userId, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log('found user: ', res[0]);
			result(null, res[0]);
			return;
		}

		// 결과가 없을 시
		result({ kind: 'not_found' }, null);
	});
};

// user id로 수정
Users.updateById = (id, user, result) => {
	// user 테이블 수정
	sql.query(
		'UPDATE user SET nickname = ?, profile = ?, intro = ? WHERE id = ?',
		[user.nickname, user.profile, user.intro, id],
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

			console.log('update user: ', { id, ...user });
			result(null, { id, ...user });
		}
	);

	// post 테이블 수정
	sql.query('UPDATE post set nickname = ? WHERE id = ?', [user.nickname, id], (err, res) => {
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

		console.log('update post: ', { id, ...user });
	});

	// commnet 테이블 수정
	sql.query(
		'UPDATE comment set nickname = ?, profile =? WHERE comment_id = ?',
		[user.nickname, user.profile, id],
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

			console.log('update comment: ', { id, ...user });
		}
	);
};

// user id로 삭제
Users.remove = (id, user, result) => {
	sql.query('DELETE FROM user WHERE id = ? and pw = ?', [id, user.pw], (err, res) => {
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

		console.log('deleted user with id: ', id);
		result(null, res);
	});
};

// id로 게시글 조회
Users.getPostsById = (userId, result) => {
	sql.query('SELECT * FROM post WHERE id = ?', userId, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log("found user's posts: ", res);
			result(null, res);
			return;
		}

		// 결과가 없을 시
		result({ kind: 'not_found' }, null);
	});
};

// id로 댓글 조회
Users.getCommentsById = (userId, result) => {
	sql.query('SELECT * FROM comment WHERE comment_id = ?', userId, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log("found user's comments: ", res);
			result(null, res);
			return;
		}

		// 결과가 없을 시
		result({ kind: 'not_found' }, null);
	});
};

export default Users;
