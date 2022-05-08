import React from 'react';
import '../styles/Story.scss';

export default function Story() {
	// 글 목록 컴포넌트
	return (
		<div className="story">
			<span className="story_name story_child">이름</span>
			<span className="story_title story_child">제목</span>
			<span className="story_time story_child">작성일</span>
		</div>
	);
}
