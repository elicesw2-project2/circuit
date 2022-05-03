/* eslint-disable */ //오류는 아니지만 eslint에서 잡아주는 warning을 안보이게 해줌
import React from 'react';
import Story from './component/Story';
import './App.css';

function App() {
	return (
		<div className="App">
			<article className="story_container">
				<Story />
				<Story />
			</article>
		</div>
	);
}

fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	});

export default App;
