import React from 'react';
import MyPageProfile from 'components/MyPageProfile';
import MyStory from 'components/MyStory';

function MyPage({ imgSrc, setImgSrc, nickname, setNickname }) {
	return (
		<>
			<MyPageProfile imgSrc={imgSrc} setImgSrc={setImgSrc} nickname={nickname} setNickname={setNickname} />
			<MyStory />
		</>
	);
}

export default MyPage;
