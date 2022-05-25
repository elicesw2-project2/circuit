import { observable } from 'mobx';

const UserStore = observable({
	// state
	name: 'mobX',

	// action
	// increaseAction(num) {
	//     this.num = this.num + num;
	// },

	// decreaseAction(num) {
	//     this.num = this.num - num;
	// }
});

export default UserStore;
