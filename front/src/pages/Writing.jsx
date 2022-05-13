import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Writing.scss';
import NavBar from 'components/NavBar';

// 글쓰는 페이지 임시로 만들어둠 다 변경해야함

// fetch('https://elice-server.herokuapp.com/board', {
// 	method: 'POST',
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

function Writing() {
	const storyCreate = () => {
		fetch('https://elice-server.herokuapp.com/board', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({}),
		});
	};
	return (
		<section className="write_container">
			<form>
				<input type="textara" placeholder="제목을 입력하세요" className="write_title write_style" />
				<div />
				<textarea
					name=""
					id=""
					className="write_content write_style"
					cols="30"
					rows="10"
					placeholder="내용을 입력하세요"
				/>
				<input type="submit" className="write_post" value="게시" onClick={storyCreate} />
			</form>
		</section>
	);
}

export default Writing;
