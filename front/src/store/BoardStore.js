import { observable } from 'mobx';

const BoardStore = observable({
	// state
	searchKeyword: '',
	searchWritings: '',

	// action
	setSearchKeyword(keyword) {
		this.keyword = keyword;
	},
	setSearchWritings(searchWritings) {
		this.searchWritings = searchWritings;
	},
});

export default BoardStore;
