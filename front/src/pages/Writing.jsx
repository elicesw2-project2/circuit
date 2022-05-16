import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Writing.scss';

export default function Writing({ nickname }) {
	return <WriteContent nickname={nickname} />;
}

function WriteContent({ nickname }) {
	const navigate = useNavigate();
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const nickName = nickname;
	const today = new Date();
	const Time = {
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDate(),
	};
	if (Time.month < 10) {
		Time.month = 0 + String(Time.month);
	}
	if (Time.day < 10) {
		Time.day = 0 + String(Time.day);
	}
	const time = `${Time.year}-${Time.month}-${Time.day}`;

	function storySubmit(e) {
		// 글 작성 게시 버튼 누르면 동작
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
				nickname: nickName,
				id: localStorage.getItem('id'),
				title: titleRef.current.value,
				content: contentRef.current.value,
				date: time,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				navigate(`/Read/${data.data.post_idx}`);
			});
	}
	return (
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
				<input type="submit" className="write_post" value="글 등록" onClick={storySubmit} />
			</form>
		</section>
	);
}
