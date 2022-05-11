/* eslint-disable react/prop-types */

import React from 'react';
import profile from 'public/profile.jpeg';

export default function SingleComment({ tweet }) {
	return (
		<div className="tweet">
			<li className="comment_item">
				<span className="comment_profile">
					<img src={profile} alt="profile" />
				</span>
				<span>
					<div className="comment_user_name">{tweet.nickname}</div>
					<div className="comment_text">{tweet.content}</div>
					<div className="comment_date">{tweet.date} </div>
				</span>
				<span className="comment_edit_button">
					<button type="button">수정</button>
					<button type="button">삭제</button>
				</span>
			</li>
		</div>
	);
}
