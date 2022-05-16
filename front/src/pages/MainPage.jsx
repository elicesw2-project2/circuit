import React, { useEffect, useState } from 'react';
import MainProfile from 'components/MainProfile';
import Story from 'components/Story';
import SideBar from 'components/SideBar';
import '../styles/MainPage.scss';

function MainPage({ imgSrc, setImgSrc, nickname, setNickname, searchWritings, email, setEmail }) {
	// URL 파라미터 수정해야함
	const id = localStorage.getItem('id');
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
		<div className="main_cpn">
			<Story searchWritings={searchWritings} />
			<MainProfile imgSrc={imgSrc} nickname={nickname} email={email} />
			<SideBar />
		</div>
	);
}

export default MainPage;
