import React, { useEffect, useState } from 'react';
import 'styles/Profile/MyPageProfile.scss';
import ImgModal from 'components/ImgModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import store from 'store';

function MyPageProfile({ userId }) {
	const { UserStore } = store();

	const [edit, setEdit] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [currentNickname, setCurrentNickname] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);
	const [mouseEnter, setMouseEnter] = useState(false);

	const [otherUserProfile, setotherUserProfile] = useState('');
	const [otherUserNickname, setotherUserNickname] = useState('');
	const [otherUserIntro, setotherUserIntro] = useState('');

	useEffect(() => {
		if (userId === localStorage.getItem('id')) {
			setIsAdmin(true);
		} else {
			(async function fetchUserData() {
				await fetch(`https://elice-server.herokuapp.com/mypage/${userId}`, {
					method: 'GET',
				})
					.then((res) => res.json())
					.then((result) => {
						setotherUserProfile(result.data.profile);
						setotherUserNickname(result.data.nickname);
						setotherUserIntro(result.data.intro);
					});
			})();
		}
	}, []);

	const openModal = () => {
		setModalOpen(true);
	};
	const closeModal = () => {
		setModalOpen(false);
	};

	const HandleNickname = (e) => {
		UserStore.setNickname(e.target.value);
	};

	const HandleDescription = (e) => {
		UserStore.setDescription(e.target.value);
	};

	const toggleEdit = () => {
		setEdit((edit) => !edit);
	};

	const onMouseEnter = () => {
		setMouseEnter(true);
	};

	const onMouseLeave = () => {
		setMouseEnter(false);
	};

	return (
		<div className="MyPageProfile__profile">
			<div className="MyPageProfile__container__left" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{isAdmin ? (
					<>
						<img src={UserStore.imgSrc} alt="profile" onClick={openModal} className="AdminProfile" />
						{mouseEnter ? (
							<FontAwesomeIcon icon={faPen} className="Profile__icon " style={{ display: 'block' }} />
						) : null}
					</>
				) : (
					<img src={otherUserProfile} alt="profile" />
				)}
			</div>
			<ImgModal
				open={modalOpen}
				close={closeModal}
				imgSrc={UserStore.imgSrc}
				setImgSrc={UserStore.setImgSrc}
				nickname={UserStore.nickname}
				description={UserStore.description}
			/>
			<div className="MyPageProfile__container__right">
				<div className="items">
					{isAdmin ? (
						edit === true ? (
							<input
								placeholder={UserStore.nickname}
								onChange={HandleNickname}
								value={UserStore.nickname.trim()}
								maxLength="8"
							/>
						) : (
							<span>{UserStore.nickname}</span>
						)
					) : (
						<span>{otherUserNickname}</span>
					)}
					{userId === localStorage.getItem('id') ? (
						<button
							type="button"
							onClick={async () => {
								// 확인 버튼 눌렀을 때 닉네임 중복 검사 및 유저 정보 수정 API

								if (edit) {
									// 닉네임이 바뀌었을 때만 중복 검사
									if (currentNickname !== UserStore.nickname) {
										const isDuplicate = await fetch(`https://elice-server.herokuapp.com/check/${UserStore.nickname}`, {
											method: 'GET',
										}).then((res) => res.json());
										if (isDuplicate.data === 'true') {
											alert('닉네임 중복!');
											return;
										}
									}
									await fetch(`https://elice-server.herokuapp.com/mypage/${localStorage.getItem('id')}`, {
										method: 'PUT',
										headers: {
											'Content-Type': 'application/json',
										},
										body: JSON.stringify({
											nickname: UserStore.nickname,
											profile: UserStore.imgSrc,
											intro: UserStore.description,
										}),
									}).then((res) => res.json());
								} else {
									setCurrentNickname(UserStore.nickname);
								}

								toggleEdit();
							}}
						>
							{edit ? '확인' : '프로필 수정'}
						</button>
					) : null}
				</div>
				<div className="description">
					<span>한줄 소개, 취미</span>
					{isAdmin ? (
						edit === true ? (
							<textarea
								onChange={HandleDescription}
								placeholder={UserStore.description}
								value={UserStore.description}
							/>
						) : (
							<p>{UserStore.description}</p>
						)
					) : (
						<p>{otherUserIntro}</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default MyPageProfile;
