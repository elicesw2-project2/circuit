/* eslint-disable react/prop-types */

import React from 'react';
import profile from 'public/profile.jpeg';

export default function SingleComment({ singleComment, onRemove }) {
	return (
		<div className="singleComment">
			<li className="comment_item">
				<span className="comment_profile">
					{/* 프로필 나중에 수정 */}
					<img src={profile} alt="profile" />
				</span>
				<span>
					<div className="comment_user_name">{singleComment.nickname}</div>
					<div className="comment_text">{singleComment.content}</div>
					<div className="comment_date">{singleComment.date.substr(0, 10)} </div>
				</span>
				<span className="comment_edit_button">
					<button type="button">수정</button>
					<button type="submit" onClick={() => onRemove(singleComment.comment_idx)}>
						삭제
					</button>
				</span>
			</li>
		</div>
	);
}
