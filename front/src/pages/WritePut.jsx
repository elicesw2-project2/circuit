import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Writing.scss';

export default function WritiePut() {
	return <WriteContent />;
}

function WriteContent() {
	const WritingParam = useParams().id;
	const navigate = useNavigate();
	const titleRef = useRef(null);
	const contentRef = useRef(null);

	const [titleText, settitleText] = useState();
	const [contentText, setcontentText] = useState();

	useEffect(() => {
		fetch(`https://elice-server.herokuapp.com/board/${WritingParam}`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				const el = data.data;
				settitleText(el.title);
				setcontentText(el.content);
			});
	}, []);

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
					onChange={(e) => settitleText(e.target.value)}
					value={titleText}
				/>
				<div />
				<textarea
					id="writing_textarea"
					className="write_content write_style"
					cols="30"
					rows="10"
					placeholder="내용을 입력하세요"
					ref={contentRef}
					onChange={(e) => setcontentText(e.target.value)}
					value={contentText}
				/>
				<input type="submit" className="write_post" value="게시" onClick={storyPut} />
			</form>
		</section>
	);
}
