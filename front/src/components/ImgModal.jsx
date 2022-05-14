import React, { useState } from 'react';
import img1 from 'public/img1.jpg';
import img2 from 'public/img2.jpg';
import img3 from 'public/img3.jpg';
import img4 from 'public/img4.jpg';
import img5 from 'public/img5.jpg';
import img6 from 'public/img6.jpg';
import img7 from 'public/img7.jpg';
import img8 from 'public/img8.jpg';
import 'styles/Modal.scss';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function Modal({ open, close, imgSrc, setImgSrc, nickname, description }) {
	return (
		<div className={open ? 'openModal modal' : 'modal'}>
			{open ? (
				<section>
					<header>
						원하는 이미지를 고르세요!
						<button type="button" className="close" onClick={close}>
							&times;
						</button>
					</header>
					<main>
						{images.map((image) => (
							<img
								src={image}
								alt="profile"
								onClick={async (e) => {
									await setImgSrc(e.target.src);
									await fetch('https://elice-server.herokuapp.com/mypage/id1@gmail.com', {
										method: 'PUT',
										headers: {
											'Content-Type': 'application/json',
										},
										body: JSON.stringify({
											nickname,
											profile: e.target.src,
											intro: description,
										}),
									}).then((res) => res.json());

									close();
								}}
							/>
						))}
					</main>
					<footer>
						<button type="button" className="close" onClick={close}>
							닫기
						</button>
					</footer>
				</section>
			) : null}
		</div>
	);
}

export default Modal;
