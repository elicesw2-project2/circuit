async function Search(value) {
	try {
		const response = await fetch(`https://elice-server.herokuapp.com/search/${value}`, {
			method: 'GET',
		});
		const results = await response.json();
		if (results.status === 404) {
			return results;
		}
		return results.data;
	} catch (err) {
		console.log(err);
	}
}

export default Search;
