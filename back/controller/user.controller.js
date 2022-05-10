import sql from '../models/db.js';

// 새 객체 생성
export async function createUser(user) {
	const { id, pw, nickname, profile } = user;
	sql.query('INSERT INTO user(id, pw, nickname, profile) VALUES (?,?,?,?)', [id, pw, nickname, profile], (results) => {
		console.log(results);
		return results;
	});
}

// id로 조회
export function findByUserid(id) {
	return new Promise((resolve, reject) => {
		sql.query(`SELECT * FROM giw3qxk1yvxgfe3k.user WHERE id='${id}'`, (err, result) => {
			return err ? reject(err) : resolve(result[0]);
		});
	});
}
