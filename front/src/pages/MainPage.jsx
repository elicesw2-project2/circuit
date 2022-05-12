import React, { useEffect, useState } from 'react';
import NavBar from 'components/NavBar';
import MainProfile from 'components/MainProfile';
import Story from 'components/Story';
import '../styles/MainPage.scss';

function MainPage() {
	// 검색 결과 저장 state
	const [searchWritings, setSearchWritings] = useState([]);
	useEffect(() => {
		console.log('Search Result: ', searchWritings);
	});

	return (
		<>
			<NavBar setSearchWritings={setSearchWritings} />
			<div className="main_cpn">
				<Story searchWritings={searchWritings} />
				<MainProfile />
			</div>
		</>
	);
}

export default MainPage;
