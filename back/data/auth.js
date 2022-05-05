// import sql from '../db/database.js';
const users = [
	{
		userid: 'dd@gmail.com',
		password: 'asdf1234',
		nickname: 'siwon',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Westie_pups.jpg/268px-Westie_pups.jpg',
	},
];
export async function findByUserid(userid) {
	return users.find((user) => user.userid === userid);
}
export async function findById(id) {
	return users.find((user) => user.id === id);
}
export async function createUser(user) {
	// 	sql
	// 	.query('INSERT INTO users SET ?', user, (err, res)=>{
	// 		if (err) {
	// 			console.log('error: ', err);
	// 			result(err, null);
	// 			return;
	// 		}
	// 		console.log('Created user: ', { user_idx : res.userid, ...newPost });
	// 		result(null, { post_idx: res.insertId, ...newPost });
	// 	}
	// }
	return user;
}
