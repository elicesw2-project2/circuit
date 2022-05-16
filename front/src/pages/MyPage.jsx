import React, { useEffect, useState } from 'react';
import MyPageProfile from 'components/MyPageProfile';
import MyStory from 'components/MyStory';

function MyPage({ imgSrc, setImgSrc, nickname, setNickname, setEmail }) {
	const [description, setDescription] = useState('');
	useEffect(() => {
		(async function fetchUserId() {
			await fetch(`https://elice-server.herokuapp.com/mypage/${localStorage.getItem('id')}`, {
				method: 'GET',
			})
				.then((res) => res.json())
				.then((result) => {
					setNickname(result.data.nickname);
					setEmail(result.data.id);
					if (result.data.intro !== null) {
						setDescription(result.data.intro);
					}
					// 처음 로그인한 유저는 null값이 들어오므로 profile값이 있을 때만 DB에서 불러와서 지정함
					if (result.data.profile !== null) {
						setImgSrc(result.data.profile);
					}
				});
		})();
	}, []);
	return (
		<>
			<MyPageProfile
				imgSrc={imgSrc}
				setImgSrc={setImgSrc}
				nickname={nickname}
				setNickname={setNickname}
				description={description}
				setDescription={setDescription}
			/>
			<MyStory />
		</>
	);
}

export default MyPage;
