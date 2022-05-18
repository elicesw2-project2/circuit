import React, { useEffect, useState } from 'react';
import '../styles/MyPageProfile.scss';
import ImgModal from 'components/ImgModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function MyPageProfile({ imgSrc, setImgSrc, nickname, setNickname, description, setDescription, userId }) {
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
		setNickname(e.target.value);
	};

	const HandleDescription = (e) => {
		setDescription(e.target.value);
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
						<img src={imgSrc} alt="profile" onClick={openModal} className="AdminProfile" />
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
				imgSrc={imgSrc}
				setImgSrc={setImgSrc}
				nickname={nickname}
				description={description}
			/>
			<div className="MyPageProfile__container__right">
				<div className="items">
					{isAdmin ? (
						edit === true ? (
							<input placeholder={nickname} onChange={HandleNickname} value={nickname.trim()} maxLength="8" />
						) : (
							<span>{nickname}</span>
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
									if (currentNickname !== nickname) {
										const isDuplicate = await fetch(`https://elice-server.herokuapp.com/check/${nickname}`, {
											method: 'GET',
										}).then((res) => res.json());
										console.log(isDuplicate);
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
											nickname,
											profile: imgSrc,
											intro: description,
										}),
									})
										.then((res) => res.json())
										.then((result) => console.log(result));
									console.log(description);
								} else {
									setCurrentNickname(nickname);
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
							<textarea onChange={HandleDescription} placeholder={description} value={description} />
						) : (
							<p>{description}</p>
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
