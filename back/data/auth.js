let users = [
	{
		id: '1',
		userid: 'suzy@gmail.com',
		password: 'asdf1234',
		nickname: 'suzy',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Westie_pups.jpg/268px-Westie_pups.jpg',
	},
];
export async function findByUserid(userid) {
	return users.find((user) => user.userid === userid);
}

export async function createUser(user) {
	const created = { ...user, id: Date.now().toString() };
	users.push(created);
	return created.id;
}
