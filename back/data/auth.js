import sql from '../db/database.js';

export async function findByUserid(userid) {
	// return users.find((user) => user.userid === userid);
}
export async function findById(id) {
	// return users.find((user) => user.id === id);
}
export async function createUser(user) {
	sql
	.query('INSERT INTO users SET ?', user, (err, res)=>{
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}
		console.log('Created user: ', { user_idx : res.userid, ...newPost });
		result(null, { post_idx: res.insertId, ...newPost });
	}
}