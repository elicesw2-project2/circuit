import React, { useEffect, useState } from 'react';
import NavBar from 'components/NavBar';
import MainProfile from 'components/MainProfile';
import Story from 'components/Story';
import '../styles/MainPage.scss';

function MainPage({ imgSrc, nickname }) {
	// 검색 결과 저장 state
	const [searchWritings, setSearchWritings] = useState();
	// useEffect(() => {
	// 	console.log('Search Result: ', searchWritings);
	// });

	return (
		<>
			<NavBar setSearchWritings={setSearchWritings} imgSrc={imgSrc} />
			<div className="main_cpn">
				<Story searchWritings={searchWritings} />
				<MainProfile imgSrc={imgSrc} nickname={nickname} />
			</div>
		</>
	);
}

export default MainPage;
