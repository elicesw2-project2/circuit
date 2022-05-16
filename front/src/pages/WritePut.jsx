import React, { useRef, Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Writing.scss';

export default function WritiePut({ nickname }) {
	return <WriteContent nickname={nickname} />;
}

function WriteContent({ nickname }) {
	const WritingParam = useParams().id;
	const navigate = useNavigate();
	const titleRef = useRef(null);
	const contentRef = useRef(null);
	const nickName = nickname;

	function storyPut(e) {
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

		fetch(`https://elice-server.herokuapp.com/board/${WritingParam}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				// nickname: nickName,
				// id: localStorage.getItem('id'),
				title: titleRef.current.value,
				content: contentRef.current.value,
			}),
		})
			.then((res) => res.json())
			.then(() => {
				navigate(`/Read/${WritingParam}`);
			});
	}

	return (
		<section className="write_container">
			<form>
				<input
					type="text"
					placeholder="제목을 입력하세요"
					className="write_title write_style"
					ref={titleRef}
					value=""
				/>
				<div />
				<textarea
					id="writing_textarea"
					className="write_content write_style"
					cols="30"
					rows="10"
					placeholder="내용을 입력하세요"
					ref={contentRef}
					value="sdf"
				/>
				<input type="submit" className="write_post" value="게시" onClick={storyPut} />
			</form>
		</section>
	);
}
