/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeDate from 'utils/ChangeDate';
import '../styles/SingleComment.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export default function SingleComment({ singleComment, onRemove }) {
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState(singleComment.content);
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu((showMenu) => !showMenu);
	};

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
					<img src={singleComment.profile} alt="profile" />
				</span>
				<span>
					<div className="comment_user_name">{singleComment.nickname}</div>

					{edit === true ? (
						<textarea className="comment_edit" onChange={onChange} value={value} />
					) : (
						<div className="comment_text">{value}</div>
					)}

					{showMenu ? null : <div className="comment_date">{singleComment.date.substr(0, 10)} </div>}
				</span>

				{/* 댓글 작성자에게만 수정/삭제 버튼 보이게 */}
				{localStorage.getItem('id') === singleComment.comment_id ? (
					<>
						<FontAwesomeIcon icon={faEllipsisVertical} className="menu__icon" onClick={toggleMenu} />
						{showMenu ? (
							<span className="comment_edit_button">
								{/* 수정버튼 */}
								<button
									className="editBtn"
									type="submit"
									onClick={() => {
										toggleEdit();
										if (edit === true) {
											fetch(
												`https://elice-server.herokuapp.com/board/${postIdx}/comments/${singleComment.comment_idx}`,
												{
													method: 'PATCH',
													body: JSON.stringify({
														content: `${value}`,
														date: ChangeDate(),
													}),
													headers: {
														'Content-type': 'application/json; charset=UTF-8',
													},
												}
											)
												.then((response) => response.json())
												.then((data) => console.log(data));
										}
									}}
								>
									{edit ? '등록' : '수정'}
								</button>
								{/* 삭제버튼 */}
								{edit ? null : (
									<button className="deleteBtn" type="submit" onClick={() => onRemove(singleComment.comment_idx)}>
										삭제
									</button>
								)}
							</span>
						) : null}
					</>
				) : null}
			</li>
		</div>
	);
}
