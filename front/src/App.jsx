import React from 'react';
import GlobalStyles from 'styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<MainPage />
			<Routes>{/* <Route path="/test" element={<MainPage />} /> */}</Routes>
		</Router>
	);
}

export default App;
