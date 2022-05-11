import React, { useState } from 'react';
import profile from 'public/profile.jpeg';
import EditProfile from 'utils/EditProfile';
import '../styles/MyPageProfile.scss';

function MyPageProfile() {
	const [edit, setEdit] = useState(false);
	const [nickname, setNickname] = useState('별명');

	const toggleEdit = () => {
		setEdit((edit) => !edit);
	};

	return (
		<div className="MyPageProfile__profile">
			<div className="MyPageProfile__container__left">
				<img src={profile} alt="profile" />
			</div>
			<div className="MyPageProfile__container__right">
				<div className="items">
					{edit === true ? <input placeholder="별명" /> : <span>{nickname}</span>}
					<button
						type="button"
						onClick={() => {
							toggleEdit();
							setNickname(nickname);
						}}
					>
						{edit ? '확인' : '수정'}
					</button>
				</div>
				<div className="description">
					<span>한줄 소개</span>
					{edit === true ? (
						<input placeholder="작성해주세요.." />
					) : (
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique delectus id quaerat, voluptatibus quod
							tempora tempore quidem
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default MyPageProfile;
