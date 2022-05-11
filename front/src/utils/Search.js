function Search(value) {
	fetch(`https://elice-server.herokuapp.com/search/${value}`, {
		method: 'GET',
	})
		.then((res) => res.json())
		.then((result) => console.log(result));
}

export default Search;
