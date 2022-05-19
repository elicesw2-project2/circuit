import React, { useEffect } from 'react';
import MainProfile from 'components/MainProfile';
import Story from 'components/Story';
import SideBar from 'components/SideBar';
import '../styles/MainPage.scss';
import SearchBar from 'components/SearchBar';

function MainPage({
	imgSrc,
	setImgSrc,
	nickname,
	setNickname,
	searchKeyword,
	setSearchKeyword,
	searchWritings,
	setSearchWritings,
	email,
	setEmail,
}) {
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
			<Story searchKeyword={searchKeyword} searchWritings={searchWritings} setSearchWritings={setSearchWritings} />
			<div className="Mainpage__rightContainer">
				<MainProfile imgSrc={imgSrc} nickname={nickname} email={email} />
				<SearchBar setSearchKeyword={setSearchKeyword} setSearchWritings={setSearchWritings} />
				<SideBar />
			</div>
		</div>
	);
}

export default MainPage;
