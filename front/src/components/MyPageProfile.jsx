import React from 'react';
import profile from 'public/profile.jpeg';
import '../styles/MyPageProfile.scss';

function MyPageProfile() {
	return (
		<div className="MyPageProfile__profile">
			<div className="MyPageProfile__container__left">
				<img src={profile} alt="profile" />
			</div>
			<div className="MyPageProfile__container__right">
				<div className="items">
					<span>별명</span>
					<button type="button">수정</button>
				</div>
				<div className="description">
					<span>한줄 소개</span>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique delectus id quaerat, voluptatibus quod
						tempora tempore quidem
					</p>
				</div>
			</div>
		</div>
	);
}

export default MyPageProfile;
