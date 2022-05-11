import React from 'react';
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

export default Read;
