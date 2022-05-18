import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles/Story.scss';

function Story({ searchKeyword, searchWritings }) {
	return <Storys searchKeyword={searchKeyword} searchWritings={searchWritings} />;
}

function Storys({ searchKeyword, searchWritings }) {
	// <Link to={`/Read/${el.id}`}> 더미데이터의 id 값을 map을 이용해 주소로 만들어 목록 생성
	const [board, setboard] = useState([]);
	const [page, setpage] = useState();
	const [boardcount, setboardcount] = useState();
	const navigate = useNavigate();
	const { pageNum } = useParams();

	useEffect(() => {
		fetch(`https://elice-server.herokuapp.com/board/?page=${pageNum}`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setboard(data.data);
				setboardcount(data.pageCount[0].count);
				const totalPage = Math.ceil(data.pageCount[0].count / 10); // 마지막 페이지 수
				const pageNum = [];
				for (let i = 1; i <= totalPage; i += 1) {
					pageNum.push(i);
				}
				setpage(pageNum);
			});
	}, []);

	function storyPagination(e) {
		const pageNumber = Number(e.target.innerHTML);
		fetch(`https://elice-server.herokuapp.com/board/?page=${pageNumber}`, {
			method: 'GET',
		})
			.then((res) => res.json())
			.then((data) => {
				setboard(data.data);
			});
		navigate(`/page=${pageNumber}`);
	}

	return searchWritings === undefined ? (
		<section className="story_parent">
			<div className="story_container">
				<div className="story_length">{boardcount}개의 게시글</div>
				<StoryInfo />
				{board.map((el) => (
					<div className="story">
						<span className="story_number story_child">{el.post_idx}</span>
						<span className="story_name story_child">{el.nickname}</span>
						<Link to={`/page=${pageNum}/Read=${el.post_idx}`}>
							<span className="story_title story_child">
								{el.title.length < 25 ? el.title : `${el.title.substr(0, 25)}...`}
							</span>
						</Link>
						<span className="story_time story_child">{el.date.substr(0, 10)}</span>
					</div>
				))}
			</div>
			<Link className="writeBtn" to="/Writing">
				글쓰기
			</Link>
			<div className="pageNav">
				{page !== undefined
					? page.map((el) => (
							<button type="submit" className="pageNav_btn" onClick={storyPagination} value={el}>
								{el}
							</button>
					  ))
					: null}
			</div>
		</section>
	) : (
		<section className="story_parent">
			<div className="story_container">
				<div className="story_length">
					&apos;{searchKeyword}&apos; - {searchWritings.length}개의 게시글
				</div>
				<StoryInfo />
				{searchWritings.map((el) => (
					<div className="story">
						<span className="story_number story_child">{el.post_idx}</span>
						<span className="story_name story_child asdf">{el.nickname}</span>
						<Link to={`Read=${el.post_idx}`}>
							<span className="story_title story_child">{el.title}</span>
						</Link>
						<span className="story_time story_child">{el.date.substr(0, 10)}</span>
					</div>
				))}
			</div>
			<Link className="writeBtn" to="/Writing">
				글쓰기
			</Link>
			{/* <div className="pageNav">
				{page !== undefined
					? page.map((el) => (
							<button type="submit" className="pageNav_btn" onClick={storyPagination} value={el}>
								{el}
							</button>
					  ))
					: null}
			</div> */}
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

export default Story;
