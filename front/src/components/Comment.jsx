/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../styles/Comment.scss';
import SingleComment from './SingleComment';

class Comment extends React.Component {
	constructor(props) {
		super(props);

		// fetch(`https://elice-server.herokuapp.com/board/1/comments`, {
		// 	method: 'GET',
		// })
		// 	.then((response) => response.json())
		// 	.then((result) => {
		// 		console.log('결과: ', result);
		// 	});

		this.state = {
			// 댓글 불러오는 부분
			comment_list: [
				{
					uuid: 1,
					writer: '김철수',
					date: '2022-05-09',
					content: '안녕하세요',
				},
				{
					uuid: 2,
					writer: '김영희',
					date: '2022-05-10',
					content: '반가워요',
				},
			],
		};
		this.addTweet = this.addTweet.bind(this);
	}

	addTweet() {
		const { value } = document.querySelector('#comment_textarea');
		this.setState({
			comment_list: [
				...this.state.comment_list,
				{
					uuid: this.state.comment_list.length + 1,
					nickname: '홍길동',
					date: new Date().toISOString().slice(0, 10),
					content: value,
				},
			],
		});
	}

	render() {
		return (
			<div className="comment_container">
				<div className="comment">
					<span>
						<textarea id="comment_textarea" placeholder="댓글 달기..." />
					</span>
					<span>
						<button type="submit" className="comment_btn" onClick={this.addTweet}>
							등록
						</button>
					</span>
				</div>
				<ul className="comment_list">
					{this.state.comment_list.map((tweet) => (
						<SingleComment key={tweet.uuid} tweet={tweet} />
					))}
				</ul>
			</div>
		);
	}
}

export default Comment;
