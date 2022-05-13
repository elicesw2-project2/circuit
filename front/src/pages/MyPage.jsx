import React from 'react';
import NavBar from 'components/NavBar';
import MyPageProfile from 'components/MyPageProfile';
import MyStory from 'components/MyStory';

function MyPage({ imgSrc, setImgSrc, nickname, setNickname }) {
	return (
		<>
			<NavBar imgSrc={imgSrc} />
			<MyPageProfile imgSrc={imgSrc} setImgSrc={setImgSrc} nickname={nickname} setNickname={setNickname} />
			<MyStory />
		</>
	);
}

export default MyPage;
