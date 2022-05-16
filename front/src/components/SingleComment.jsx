/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import img2 from 'public/img2.jpg';
import ChangeDate from 'utils/ChangeDate';
import '../styles/SingleComment.scss';

export default function SingleComment({ singleComment, onRemove }) {
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState(singleComment.content);
	const postIdx = useParams().id;
	const onChange = (e) => {
		setValue(e.target.value);
	};
	const toggleEdit = () => {
		setEdit((edit) => !edit);
	};
	return (
		<div className="singleComment">
			<li className="comment_item">
				<span className="comment_profile">
					{/* 프로필 나중에 수정 */}
					<img src={img2} alt="profile" />
				</span>
				<span>
					<div className="comment_user_name">{singleComment.nickname}</div>

					{edit === true ? (
						<textarea className="comment_edit" onChange={onChange} value={value} />
					) : (
						<div className="comment_text">{value}</div>
					)}

					<div className="comment_date">{singleComment.date.substr(0, 10)} </div>
				</span>
				<span className="comment_edit_button">
					{/* 수정버튼 */}
					<button
						className="editBtn"
						type="submit"
						onClick={() => {
							toggleEdit();
							if (edit === true) {
								// const editedComment = `${value}`;
								fetch(`https://elice-server.herokuapp.com/board/${postIdx}/comments/${singleComment.comment_idx}`, {
									method: 'PATCH',
									body: JSON.stringify({
										content: `${value}`,
										date: ChangeDate(),
									}),
									headers: {
										'Content-type': 'application/json; charset=UTF-8',
									},
								})
									.then((response) => response.json())
									.then((data) => console.log(data));
							}
						}}
					>
						{edit ? '등록' : '수정'}
					</button>

					{/* 삭제버튼 */}
					<button className="deleteBtn" type="submit" onClick={() => onRemove(singleComment.comment_idx)}>
						삭제
					</button>
				</span>
			</li>
		</div>
	);
}
