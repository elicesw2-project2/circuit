import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Read.scss';
import NavBar from 'components/NavBar';
import Comment from '../components/Comment';

export default function Read() {
	return <ReadContent />;
}

function ReadContent() {
	const readParam = useParams().id;
	const navigate = useNavigate();
	const [board, setboard] = useState([]);
	useEffect(() => {
		fetch('https://elice-server.herokuapp.com/board', {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setboard(data.data.filter((el) => el.post_idx === Number(readParam)));
			});
	}, [readParam]);
	function storyPut() {}

	function storyDel() {
		// 글 삭제 기능
		if (window.confirm('삭제 하시겠습니까?')) {
			fetch(`https://elice-server.herokuapp.com/board/${readParam}`, {
				method: 'DELETE',
			});
		}
		navigate(`/`);
		alert('삭제되었습니다.');
	}
	return (
		<div>
			{board[0] !== undefined ? (
				<section className="read_container">
					<div className="button_box">
						<input type="submit" className="read_button" value="수정" />
						<input type="submit" className="delete_button" value="삭제" onClick={storyDel} />
					</div>
					<div className="read_title">{board[0].title}</div>
					<div className="read_info">
						<div className="read_name">{board[0].nickname}</div>
						<div className="read_day">{board[0].date.substr(0, 10)}</div>
					</div>
					<div className="read_content">{board[0].content}</div>

					<Comment />
				</section>
			) : null}
		</div>
	);
}
