import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Read.css';
import NavBar from 'components/NavBar';
import dummy from '../db/story.json';
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
	// console.log(a);

	const [board, setboard] = useState([]);

	useEffect(() => {
		fetch('https://elice-server.herokuapp.com/board', {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setboard(data.data);
			});
	}, []);
	// settest(board.filter((el) => el.post_idx === Number(a)));
	board.filter((el) => el.post_idx === Number(a));
	// console.log(board[0].id);
	// console.log(asdf[0].id);

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
// asdf[0]
export default Read;
