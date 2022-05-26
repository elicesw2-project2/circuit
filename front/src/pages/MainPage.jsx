import React, { useEffect } from 'react';
import MainProfile from 'components/Profile/MainProfile';
import Story from 'components/Story/Story';
import SideBar from 'components/SideBar';
import 'styles/Pages/MainPage.scss';
import SearchBar from 'components/SearchBar';

import store from 'store';

function MainPage() {
	const { UserStore } = store();
	// URL 파라미터 수정해야함
	useEffect(() => {
		(async function fetchUserId() {
			await fetch(`https://elice-server.herokuapp.com/mypage/${localStorage.getItem('id')}`, {
				method: 'GET',
			})
				.then((res) => res.json())
				.then((result) => {
					UserStore.setNickname(result.data.nickname);
					UserStore.setEmail(result.data.id);
					// 처음 로그인한 유저는 null값이 들어오므로 profile값이 있을 때만 DB에서 불러와서 지정함
					if (result.data.profile !== null) {
						UserStore.setImgSrc(result.data.profile);
					}
				});
		})();
	}, []);

	return (
		<div className="main_cpn">
			<Story />
			<div className="Mainpage__rightContainer">
				<MainProfile />
				<SearchBar />
				<SideBar />
			</div>
		</div>
	);
}

export default MainPage;
