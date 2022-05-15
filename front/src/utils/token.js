const TOKEN = 'token';

export function saveToken(token) {
	localStorage.setItem(TOKEN, token);
}

export function getToken() {
	return localStorage.getItem(TOKEN);
}

export function clearToken() {
	localStorage.clear(TOKEN);
}
