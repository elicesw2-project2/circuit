import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Comment.scss';
import SingleComment from './SingleComment';

function Comment() {
	const [commentList, setCommentList] = useState();
	const postIdx = useParams().id;
	// 댓글 가져오기(GET)
	useEffect(() => {
		fetch(`https://elice-server.herokuapp.com/board/${postIdx}/comments`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.status === 200) {
					console.log(result.data);
					// commentList에 result.data를 넣어줌
					setCommentList(result.data);
				} else {
					setCommentList([]);
				}
			});
	}, []);

	// 댓글 추가
	const onCreate = () => {
		// 새댓글이 추가되는 것을 화면에서 보이는 부분
		const { value } = document.querySelector('#comment_textarea');
		const comment = {
			comment_idx: commentList.length + 1,
			nickname: '홍길동',
			date: new Date().toISOString().slice(0, 10),
			content: value,
			profile: 2,
		};
		// concat 함수로 comment객체를 commentList에 추가
		setCommentList(commentList.concat(comment));
		// 새댓글 post
		fetch(`https://elice-server.herokuapp.com/board/${postIdx}/comments`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				comment_idx: commentList.length + 1,
				nickname: '홍길동',
				date: new Date(),
				content: value,
				id: 'id3@gmail.com',
				post_idx: 1,
				profile: 2,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result.data);
			});
	};

	// 댓글 삭제
	const onRemove = (param) => {
		// param은 SingleComment.jsx에서 singleComment.comment_idx를 전달 받음

		// 화면에서 보여지는 삭제
		// comment_idx 가 전달받은 파라미터와 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
		// = comment_idx 가 param 인 것을 제거함
		setCommentList(commentList.filter((commentList) => commentList.comment_idx !== param));

		// fetch delete
		fetch(`https://elice-server.herokuapp.com/board/${postIdx}/comments/${param}`, {
			method: 'DELETE',
			body: JSON.stringify({
				comment_idx: param,
			}),
		})
			.then((res) => res.json())
			.then((result) => {
				console.log(result);
			});
	};

	return (
		<div className="comment_container">
			<div className="comment">
				<span>
					<textarea id="comment_textarea" placeholder="댓글 달기..." />
				</span>
				<span>
					<button type="submit" className="comment_btn" onClick={onCreate}>
						등록
					</button>
				</span>
			</div>
			<ul className="comment_list">
				{commentList &&
					commentList.map((singleComment) => (
						<SingleComment key={singleComment.comment_idx} singleComment={singleComment} onRemove={onRemove} />
					))}
			</ul>
		</div>
	);
}

export default Comment;
