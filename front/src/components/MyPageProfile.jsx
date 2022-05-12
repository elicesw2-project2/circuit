import React, { useEffect, useState } from 'react';
import '../styles/MyPageProfile.scss';
import ImgModal from 'components/ImgModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function MyPageProfile({ imgSrc, setImgSrc, nickname, setNickname }) {
	const [edit, setEdit] = useState(false);
	const [description, setDescription] = useState('나를 소개해주세요!');
	const [modalOpen, setModalOpen] = useState(false);

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
			<ImgModal open={modalOpen} close={closeModal} setImgSrc={setImgSrc} />
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
							// 	fetch();
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
