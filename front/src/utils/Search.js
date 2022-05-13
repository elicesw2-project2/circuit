async function Search(value) {
	try {
		const response = await fetch(`https://elice-server.herokuapp.com/search/${value}`, {
			method: 'GET',
		});
		if (response.status === 200) {
			const results = await response.json();
			return results.data;
		}
		return 'Not Found';
	} catch (err) {
		console.log(err);
	}
}

export default Search;
