import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Read.css';
import NavBar from 'components/NavBar';
import dummy from '../db/story.json';
import Comment from '../components/Comment';

function Read() {
	const a = useParams().id - 1;
	return (
		<section className="read_container">
			<div className="read_title">{dummy.info[a].title}</div>
			<div className="read_info">
				<span className="read_name">{dummy.info[a].name}</span>
				<span className="read_day">{dummy.info[a].day}</span>
			</div>
			<div className="read_content">{dummy.info[a].content}</div>
			<Comment />
		</section>
	);
}

export function ReadContent() {
	const a = useParams().id;

	const [board, setboard] = useState([]);

	// useEffect(() => {
	// 	fetch('https://elice-server.herokuapp.com/board', {
	// 		method: 'GET',
	// 	})
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setboard(data.data.filter((el) => el.post_idx === Number(a)));
	// 		});
	// }, []);

	useEffect(() => {
		async function fetchData() {
			const data = await fetch('https://elice-server.herokuapp.com/board', {
				method: 'GET',
			});
			const result = await data.json();
			setboard(result);
		}
		fetchData();
	}, []);

	console.log(board);

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
