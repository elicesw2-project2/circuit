import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Story.css';
import dummy from '../db/story.json';

// fetch('https://elice-server.herokuapp.com/auth/login', {
// 	method: 'POST',
// })
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

function Story() {
	// 글 목록 컨테이너 , 이 안에 글 들이 들어감
	// <Link to={`/Read/${el.id}`}> 더미데이터의 id 값을 map을 이용해 주소로 만들어 목록 생성
	return (
		<section className="story_container">
			<StoryInfo />
			{dummy.info.map((el) => (
				<div className="story">
					<span className="story_name story_child">{el.name}</span>
					<Link to={`/Read/${el.id}`}>
						<span className="story_title story_child">{el.title}</span>
					</Link>
					<span className="story_time story_child">{el.day}</span>
				</div>
			))}
		</section>
	);
}

function Storys() {
	// 글 목록의 리스트 들 (형태를 잡기위해 만들어 둔것으로 이젠 삭제해도됨)
	return (
		<div className="story">
			<span className="story_name story_child">작성자</span>
			<span className="story_title story_child">제목이 엄청 길어</span>
			<span className="story_time story_child">2022.05.03</span>
		</div>
	);
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
