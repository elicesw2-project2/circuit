import sql from './db.js';

// 생성자
const Post = function (post) {
	// this.post_idx = post.post_idx;
	this.id = post.id;
	this.nickname = post.nickname;
	this.title = post.title;
	this.content = post.content;
	// this.date = new Date();
	this.date = post.date;
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

// post 전체 개수 조회
Post.getAllCount = (result) => {
	sql.query('SELECT Count(*) as count FROM post;', (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}
		console.log('post: ', res, 'Post.model.js');
		result(null, res); // 개수전달
	});
};

// post 페이징 조회
Post.getAll = (offset, limit, result) => {
	sql.query('SELECT * FROM post ORDER BY post_idx DESC LIMIT ?,?', [offset, limit], (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		console.log('post: ', res.count, 'Post.model.js');
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
	sql.query('UPDATE post SET title = ?, content = ? WHERE post_idx = ?', [post.title, post.content, id], (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.affectedRows === 0) {
			// 결과가 없을 시
			result({ kind: 'not_found' }, null);
			return;
		}

		console.log('update post: ', { id, ...post });
		result(null, { id, ...post });
	});
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

// post title로 검색(params)
Post.searchByTitle = (title, result) => {
	sql.query('SELECT * FROM post WHERE title LIKE ? ORDER BY post_idx DESC', `%${title}%`, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log('found post: ', res, 'Post.model.js');
			result(null, res);
			return;
		}

		// 결과가 없을 시
		result({ kind: 'not_found' }, null);
	});
};

export default Post;
