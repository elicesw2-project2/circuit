import React from 'react';
import 'styles/Profile/MainProfile.scss';
import { Link } from 'react-router-dom';
import store from 'store';

function MainProfile({ imgSrc, nickname, email }) {
	const { UserStore } = store();
	return (
		<div className="MainProfile">
			<Link to={`/user/${localStorage.getItem('id')}`}>
				<img src={imgSrc} alt="profile" />
			</Link>
			<h2>
				{nickname}
				{UserStore.name}
			</h2>
			<span>{email}</span>
		</div>
	);
}

export default MainProfile;
