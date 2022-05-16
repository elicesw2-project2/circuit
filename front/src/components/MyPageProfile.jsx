import React, { useEffect, useState } from 'react';
import '../styles/MyPageProfile.scss';
import ImgModal from 'components/ImgModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function MyPageProfile({ imgSrc, setImgSrc, nickname, setNickname, description, setDescription }) {
	const [edit, setEdit] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [currentNickname, setCurrentNickname] = useState('');

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

	return (
		<div className="MyPageProfile__profile">
			<div className="MyPageProfile__container__left">
				<img src={imgSrc} alt="profile" onClick={openModal} />
				<FontAwesomeIcon icon={faPen} className="Profile__icon" />
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
					{edit === true ? (
						<input placeholder={nickname} onChange={HandleNickname} value={nickname} />
					) : (
						<span>{nickname}</span>
					)}
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
									});
								}
							} else {
								setCurrentNickname(nickname);
							}

							toggleEdit();
						}}
					>
						{edit ? '확인' : '프로필 수정'}
					</button>
				</div>
				<div className="description">
					<span>한줄 소개, 취미</span>
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
