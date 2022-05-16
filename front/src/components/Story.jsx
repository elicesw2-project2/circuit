import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Story.scss';

function Story({ searchWritings }) {
	return <Storys searchWritings={searchWritings} />;
}

function Storys({ searchWritings }) {
	// <Link to={`/Read/${el.id}`}> 더미데이터의 id 값을 map을 이용해 주소로 만들어 목록 생성
	const [board, setboard] = useState([]);
	const [maxpage, setMaxpage] = useState();
	const [page, setpage] = useState();

	useEffect(() => {
		fetch(`https://elice-server.herokuapp.com/board/?page=${1}`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setboard(data.data);
				setMaxpage(Math.ceil(data.pageCount[0].count / 15));
				const asdf = [];
				for (let i = 1; i <= maxpage; i += 1) {
					console.log('asdf');
					asdf.push(i);
					console.log(asdf);
				}
				console.log(asdf);
				setpage(asdf);
			});
		console.log(page);
	}, []);

	function storyPagination(e) {
		const pageNumber = Number(e.target.innerHTML);
		fetch(`https://elice-server.herokuapp.com/board/?page=${pageNumber}`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setboard(data.data);
				setMaxpage(Math.ceil(data.pageCount[0].count / 15));
			});
	}

	return searchWritings === undefined ? (
		<div className="story_parent">
			<div className="story_container">
				<StoryInfo />
				{board.map((el) => (
					<div className="story">
						<span className="story_number story_child">{el.post_idx}</span>
						<span className="story_name story_child">{el.nickname}</span>
						<Link to={`/Read/${el.post_idx}`}>
							<span className="story_title story_child">{el.title}</span>
						</Link>
						<span className="story_time story_child">{el.date.substr(0, 10)}</span>
					</div>
				))}
			</div>
			<div className="pages_nav">
				<button type="submit" onClick={storyPagination}>
					1
				</button>
				<button type="submit" onClick={storyPagination}>
					2
				</button>
				<button type="submit" onClick={storyPagination}>
					3
				</button>
			</div>
		</div>
	) : (
		<section className="story_container">
			<StoryInfo />
			{searchWritings.map((el) => (
				<div className="story">
					<span className="story_number story_child">{el.post_idx}</span>
					<span className="story_name story_child asdf">{el.nickname}</span>
					<Link to={`/Read/${el.post_idx}`}>
						<span className="story_title story_child">{el.title}</span>
					</Link>
					<span className="story_time story_child">{el.date.substr(0, 10)}</span>
				</div>
			))}
		</section>
	);
}

function StoryInfo() {
	// 글 목록의 구성( 작성자, 제목, 작성일 )
	return (
		<div className="story storyInfo">
			<span className="story_number story_child">번호</span>
			<span className="story_title story_child">제목</span>
			<span className="story_name story_child">작성자</span>
			<span className="story_time story_child">작성일</span>
		</div>
	);
}

function Pages() {
	const [board, setboard] = useState([]);
	// const [page, setpage] = useState(1);

	useEffect(() => {
		fetch(`https://elice-server.herokuapp.com/board`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.pageCount[0].count);
				setboard(data.data);
			});
	}, []);
	return <div>ds</div>;
}

export default Story;
