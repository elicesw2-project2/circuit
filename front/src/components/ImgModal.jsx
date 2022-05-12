import React, { useState } from 'react';
import img1 from 'public/img1.jpg';
import img2 from 'public/img2.jpg';
import img3 from 'public/img3.jpg';
import img4 from 'public/img4.jpg';
import 'styles/Modal.scss';

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

function Modal({ open, close, setImgSrc }) {
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
								onClick={() => {
									setImgSrc(image);
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
