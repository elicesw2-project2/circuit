import React, { useState } from 'react';
import profile from 'public/profile.jpeg';
import EditProfile from 'utils/EditProfile';
import '../styles/MyPageProfile.scss';
import { Link } from 'react-router-dom';

function MyPageProfile() {
	const [edit, setEdit] = useState(false);
	const [nickname, setNickname] = useState('별명');
	const [description, setDescription] = useState('나를 소개해주세요!');

	const HandleNickname = (e) => {
		setNickname(e.target.value);
	};

	const HandleDescription = (e) => {
		setDescription(e.target.value);
	};

	const toggleEdit = () => {
		setEdit((edit) => !edit);
	};

	return (
		<div className="MyPageProfile__profile">
			<div className="MyPageProfile__container__left">
				<Link to="/my-page/profileImg">
					<img src={profile} alt="profile" />
				</Link>
			</div>
			<div className="MyPageProfile__container__right">
				<div className="items">
					{edit === true ? (
						<input placeholder={nickname} onChange={HandleNickname} value={nickname} />
					) : (
						<span>{nickname}</span>
					)}
					<button
						type="button"
						onClick={() => {
							toggleEdit();
							// if (edit === true) {
							// 	fetch()
							// }
						}}
					>
						{edit ? '확인' : '수정'}
					</button>
				</div>
				<div className="description">
					<span>한줄 소개</span>
					{edit === true ? (
						<textarea onChange={HandleDescription} placeholder={description} value={description} />
					) : (
						<p>{description}</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default MyPageProfile;
