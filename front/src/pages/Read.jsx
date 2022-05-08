import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Read.css';
import dummy from '../db/story.json';

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
		</section>
	);
}

export default Read;
