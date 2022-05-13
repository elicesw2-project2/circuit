import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Read.css';
import NavBar from 'components/NavBar';
import Comment from '../components/Comment';

function Read() {
	return (
		<>
			<NavBar />
			<ReadContent />
		</>
	);
}

function ReadContent() {
	const a = useParams().id;

	const [board, setboard] = useState([]);

	useEffect(() => {
		fetch('https://elice-server.herokuapp.com/board', {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setboard(data.data.filter((el) => el.post_idx === Number(a)));
			});
	}, [a]);

	return (
		<div>
			{board[0] !== undefined ? (
				<section className="read_container">
					<div className="read_title">{board[0].title}</div>
					<div className="read_info">
						<span className="read_name">{board[0].nickname}</span>
						<span className="read_day">{board[0].date}</span>
					</div>
					<div className="read_content">{board[0].content}</div>
					<Comment />
				</section>
			) : null}
		</div>
	);
}
export default Read;
