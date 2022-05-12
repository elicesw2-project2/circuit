import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Story.scss';
import dummy from '../db/story.json';

function Story() {
	// 글 목록 컨테이너 , 이 안에 글 들이 들어감
	return (
		<section className="story_container">
			<StoryInfo />
			<Storys />
		</section>
	);
}

function Storys() {
	// <Link to={`/Read/${el.id}`}> 더미데이터의 id 값을 map을 이용해 주소로 만들어 목록 생성
	const [board, setboard] = useState([]);

	useEffect(() => {
		fetch('https://elice-server.herokuapp.com/board', {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setboard(data.data);
			});
	}, []);

	return board.map((el) => (
		<div className="story">
			<span className="story_name story_child asdf">{el.nickname}</span>
			<Link to={`/Read/${el.post_idx}`}>
				<span className="story_title story_child">{el.title}</span>
			</Link>
			<span className="story_time story_child">{el.date.substr(0, 10)}</span>
		</div>
	));
}

function StoryInfo() {
	// 글 목록의 구성( 작성자, 제목, 작성일 )
	return (
		<div className="story storyInfo">
			<span className="story_name story_child">작성자</span>
			<span className="story_title story_child">제목</span>
			<span className="story_time story_child">작성일</span>
		</div>
	);
}

export default Story;
