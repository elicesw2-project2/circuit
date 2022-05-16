import React, { useEffect, useState } from 'react';
import MainProfile from 'components/MainProfile';
import Story from 'components/Story';
import SideBar from 'components/SideBar';
import '../styles/MainPage.scss';
import SearchBar from 'components/SearchBar';

function MainPage({ imgSrc, setImgSrc, nickname, setNickname, searchWritings, setSearchWritings, email, setEmail }) {
	// URL 파라미터 수정해야함
	useEffect(() => {
		(async function fetchUserId() {
			await fetch(`https://elice-server.herokuapp.com/mypage/${localStorage.getItem('id')}`, {
				method: 'GET',
			})
				.then((res) => res.json())
				.then((result) => {
					setNickname(result.data.nickname);
					setEmail(result.data.id);
					// 처음 로그인한 유저는 null값이 들어오므로 profile값이 있을 때만 DB에서 불러와서 지정함
					if (result.data.profile !== null) {
						setImgSrc(result.data.profile);
					}
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
