import React, { useEffect } from 'react';
import MyPageProfile from 'components/MyPageProfile';
import Story from 'components/Story';

function MyPage({ imgSrc, setImgSrc, nickname, setNickname, setEmail }) {
	useEffect(() => {
		(async function fetchUserId() {
			await fetch('https://elice-server.herokuapp.com/mypage/id1@gmail.com', {
				method: 'GET',
			})
				.then((res) => res.json())
				.then((result) => {
					setNickname(result.data.nickname);
					setEmail(result.data.id);
					setImgSrc(result.data.profile);
				});
		})();
	}, []);
	return (
		<>
			<MyPageProfile imgSrc={imgSrc} setImgSrc={setImgSrc} nickname={nickname} setNickname={setNickname} />
			<Story />
		</>
	);
}

export default MyPage;
