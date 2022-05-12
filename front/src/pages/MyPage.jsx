import React from 'react';
import NavBar from 'components/NavBar';
import MyPageProfile from 'components/MyPageProfile';
import Story from 'components/Story';

function MyPage({ imgSrc, setImgSrc }) {
	return (
		<>
			<NavBar imgSrc={imgSrc} />
			<MyPageProfile imgSrc={imgSrc} setImgSrc={setImgSrc} />
			<Story />
		</>
	);
}

export default MyPage;
