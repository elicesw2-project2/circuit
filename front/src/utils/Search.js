async function Search(value) {
	const response = await fetch(`https://elice-server.herokuapp.com/search/${value}`, {
		method: 'GET',
	});
	const results = await response.json();
	return results.data;
}

export default Search;
