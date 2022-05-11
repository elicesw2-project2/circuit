import React from 'react';
import NavBar from 'components/NavBar';
import MainProfile from 'components/MainProfile';
import Story from 'components/Story';
import '../styles/MainPage.scss';

function MainPage() {
	return (
		<>
			<NavBar />
			<div className="main_cpn">
				<Story />
				<MainProfile />
			</div>

			<div />
		</>
	);
}

export default MainPage;
