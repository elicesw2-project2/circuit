import sql from './db.js';

const User = function (user) {
	this.email = user.email;
	this.password = user.password;
	this.nickname = user.nickname;
	this.profile = user.profile;
};

User.createUser = (newUser, result) => {
	sql.query('INSERT INTO customers SET ?', newUser, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		console.log('Created customer: ', { id: res.inseertId, ...newUser });
		result(null, { id: res.inseertId, ...newUser });
	});
};

User.findById = (userID, result) => {
	sql.query('SELECT * FROM users WHERE id = ?', userID, (err, res) => {
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

User.findByEmail = (userEmail, result) => {
	sql.query('SELECT * FROM users WHERE email = ?', userEmail, (err, res) => {
		if (err) {
			console.log('error: ', err);
			result(err, null);
			return;
		}

		if (res.length) {
			console.log('found customer: ', res[0]);
			result(null, res[0]);
			return;
		}

		// 결과가 없을 시
		result({ kind: 'not_found' }, null);
	});
};

export default User;
