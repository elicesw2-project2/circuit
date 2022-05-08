import React from 'react';
import NavBar from 'components/NavBar';
import Profile from 'components/Profile';
import Story from 'components/Story';

function MainPage() {
	return (
		<>
			<NavBar />

			<div className="test">
				<Profile />
				<Story />
			</div>

			<div />
		</>
	);
}

export default MainPage;
