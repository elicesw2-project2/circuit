import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Writing.scss';
import NavBar from 'components/NavBar';

export default function Writing() {
	const contentRef = useRef(null);
	const titleRef = useRef(null);
	const navigate = useNavigate();

	function storySubmit(e) {
		e.preventDefault();
		if (titleRef.current.value.length === 0) {
			alert('제목을 입력해주세요.');
			return;
		}
		if (contentRef.current.value.length === 0) {
			alert('내용을 입력해주세요.');
			return;
		}
		fetch('https://elice-server.herokuapp.com/board', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				nickname: '내이름', // 사용자 닉네임 받아와야함
				title: titleRef.current.value,
				content: contentRef.current.value,
				id: 'id3@gmail.com', // 사용자 id 받아와야 함
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				// window.location.href = `Read/${data.data.post_idx}`;
				navigate(`/Read/${data.data.post_idx}`);
			});
	}

	return (
		<>
			<NavBar />
			<section className="write_container">
				<form>
					<input type="text" placeholder="제목을 입력하세요" className="write_title write_style" ref={titleRef} />
					<div />
					<textarea
						id="writing_textarea"
						className="write_content write_style"
						cols="30"
						rows="10"
						placeholder="내용을 입력하세요"
						ref={contentRef}
					/>
					{/* <Link to={`/Read/${el.post_idx}`}> */}
					<input type="submit" className="write_post" value="게시" onClick={storySubmit} />
					{/* </Link> */}
				</form>
			</section>
		</>
	);
}
