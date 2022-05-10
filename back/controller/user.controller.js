import jwt from 'jsonwebtoken';
// import User from '../models/auth.model.js';
import sql from '../models/db.js';

const AUTH_ERROR = { message: 'Authentication Error' };

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
	// sql.query('SELECT * FROM user WHERE id =?', id, (err, result) => {
	// 	result.redirect(JSON.stringify(result));
	// });
	// sql.query('SELECT * FROM user WHERE id =?', id, (err, result) => {
	// 	if (err) {
	// 		callback(err, null);
	// 	}
	// 	return callback(null, result[0]);
	// });
	return new Promise((resolve, reject) => {
		sql.query(`SELECT * FROM giw3qxk1yvxgfe3k.user WHERE id='${id}'`, (err, result) => {
			return err ? reject(err) : resolve(result[0]);
		});
	});
}
