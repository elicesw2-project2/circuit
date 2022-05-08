import sql from './db.js';

// 생성자
const Post = function (post) {
	// this.post_idx = post.post_idx;
	this.id = post.id;
	this.title = post.title;
	this.content = post.content;
	// this.date = post.date;
	this.date = new Date();
	this.nickname = post.nickname;
};

// post 튜플 추가
Post.create = (newPost, result) => {
	sql.query('INSERT INTO post SET ?', newPost, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		console.log('Created post: ', { post_idx: res.insertId, ...newPost });
		result(null, { post_idx: res.insertId, ...newPost });
	});
};

// post 전체 조회
Post.getAll = (result) => {
	sql.query('SELECT * FROM post', (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		console.log('post: ', res, 'Post.model.js');
		result(null, res);
	});
};

// post id로 조회
Post.findById = (id, result) => {
	sql.query('SELECT * FROM post WHERE post_idx = ?', parseInt(id, 10), (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log('found post: ', res[0], 'Post.model.js');
			result(null, res[0]);
			return;
		}

		// 결과가 없을 시
		result({ kind: 'not_found' }, null);
	});
};

// post id로 수정
Post.updateById = (id, post, result) => {
	sql.query(
		'UPDATE post SET title = ?, content = ?, date = ? WHERE post_idx = ?',
		[post.title, post.content, new Date(), id],
		(err, res) => {
			if (err) {
				console.log('error: ', err);
				result(err, null);
				return;
			}

			if (res.affectedRows === 0) {
				// id 결과가 없을 시
				result({ kind: 'not_found' }, null);
				return;
			}

			console.log('update post: ', { id, ...post });
			result(null, { id, ...post });
		}
	);
};

// post id로 삭제
Post.remove = (id, result) => {
	sql.query('DELETE FROM post WHERE post_idx = ?', id, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.affectedRows === 0) {
			// id 결과가 없을 시
			result({ kind: 'not_found' }, null);
			return;
		}

		console.log('deleted post with id: ', id);
		result(null, res);
	});
};

// post 전체 삭제?

export default Post;
