const TOKEN = 'token';

export default class TokenStorage {
	saveToken(token) {
		localStorage.setItem(TOKEN, token);
	}

	getToken() {
		return localStorage.setItem(TOKEN);
	}

	clearToken() {
		localStorage.clear(TOKEN);
	}
}
