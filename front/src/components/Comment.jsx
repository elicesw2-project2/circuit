import React from 'react';
import '../styles/Comment.scss';

function Comment() {
	return (
		<div className="comment_container">
			<form className="comment">
				<span>
					<input className="comment_input" type="text" placeholder="댓글 달기..." />
				</span>
				<span>
					<button className="comment_btn" type="submit">
						등록
					</button>
				</span>
			</form>
			<ul className="comment_list">
				<li className="comment_item">
					<p className="comment_user_name">사용자이름</p>
					<p className="comment_text">댓글 내용</p>
					<p className="comment_date">2022-05-05</p>
				</li>
				<li className="comment_item">
					<p className="comment_user_name">사용자이름</p>
					<p className="comment_text">댓글 내용</p>
					<p className="comment_date">2022-05-05</p>
				</li>
			</ul>
		</div>
	);
}

export default Comment;
