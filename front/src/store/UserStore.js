import { observable } from 'mobx';
import profile from 'public/profile.jpg';

const UserStore = observable({
	// state
	nickname: '',
	email: '',
	description: '',
	imgSrc: profile,

	// action
	setNickname(nickname) {
		this.nickname = nickname;
	},
	setEmail(email) {
		this.email = email;
	},
	setDescription(description) {
		this.description = description;
	},
	setImgSrc(imgSrc) {
		this.imgSrc = imgSrc;
	},
});

export default UserStore;
