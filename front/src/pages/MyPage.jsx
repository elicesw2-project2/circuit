import React from 'react';
import MyPageProfile from 'components/MyPageProfile';
import Story from 'components/Story';

function MyPage({ imgSrc, setImgSrc, nickname, setNickname }) {
	return (
		<>
			<MyPageProfile imgSrc={imgSrc} setImgSrc={setImgSrc} nickname={nickname} setNickname={setNickname} />
			<Story />
		</>
	);
}

export default MyPage;
