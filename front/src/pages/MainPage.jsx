import React from 'react';
import NavBar from 'components/NavBar';
import MainProfile from 'components/MainProfile';
import Story from 'components/Story';

function MainPage() {
	return (
		<>
			<NavBar />
			<MainProfile />

			<div className="test">
				<Story />
			</div>

			<div />
		</>
	);
}

export default MainPage;
