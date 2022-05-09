import React from 'react';
import NavBar from 'components/NavBar';
import MyPageProfile from 'components/MyPageProfile';
import Story from 'components/Story';

function MyPage() {
	return (
		<>
			<NavBar />
			<MyPageProfile />
			<Story />
		</>
	);
}

export default MyPage;
