import React from 'react';
import MainProfile from 'components/MainProfile';
import Story from 'components/Story';
import '../styles/MainPage.scss';

function MainPage({ imgSrc, nickname, searchWritings }) {
	return (
		<div className="main_cpn">
			<Story searchWritings={searchWritings} />
			<MainProfile imgSrc={imgSrc} nickname={nickname} />
		</div>
	);
}

export default MainPage;
