import React, { useEffect, useState } from 'react';
import MyPageProfile from 'components/MyPageProfile';
import MyStory from 'components/MyStory';
import { useLocation, useParams } from 'react-router-dom';

let prePath = '';

function MyPage({ imgSrc, setImgSrc, nickname, setNickname, description, setDescription }) {
	const { id } = useParams();
	const [userId, setUserId] = useState(id);
	const location = useLocation();

	useEffect(() => {
		if (prePath.indexOf('/user') !== -1 && prePath.indexOf(localStorage.getItem('id')) === -1) {
			prePath = '';
			window.location.reload();
		}
		prePath = location.pathname;
	}, [location]);

	useEffect(() => {}, []);
	return (
		<>
			<MyPageProfile
				imgSrc={imgSrc}
				setImgSrc={setImgSrc}
				nickname={nickname}
				setNickname={setNickname}
				description={description}
				setDescription={setDescription}
				userId={userId}
			/>
			<MyStory userId={userId} />
		</>
	);
}

export default MyPage;
