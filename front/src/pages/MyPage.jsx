import React, { useState } from 'react';
import MyPageProfile from 'components/MyPageProfile';
import MyStory from 'components/MyStory';
import { useParams } from 'react-router-dom';

function MyPage({ imgSrc, setImgSrc, nickname, setNickname, description, setDescription }) {
	const { id } = useParams();
	const [userId, setUserId] = useState(id);

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
