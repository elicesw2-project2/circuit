import React from 'react';
import '../styles/Story.css';

/* <section className='.story_container'></section> */

function Story() {
	// 글 목록 컨테이너 / 이 안에 글 들이 들어감
	return (
		<section className="story_container">
			<StoryInfo />
			<Storys />
			<Storys />
			<Storys />
			<Storys />
		</section>
	);
}

function Storys() {
	// 글 목록의 리스트 들
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
