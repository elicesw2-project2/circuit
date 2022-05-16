import React from 'react';
import '../styles/SideBar.scss';

function SideBar() {
	return (
		<div className="container">
			<h2>바로가기</h2>
			<div className="link">
				<p id="link1">
					<a href="https://swtrack.lms.elice.io/login">엘리스 학습 센터</a>
				</p>
				<p id="link2">
					<a href="https://www.notion.so/elice/SW-2-2d1dc1808e5a42349e60562d7256d30a">엘리스 SW 트랙 notion</a>
				</p>
				<p id="link3">
					<a href="https://kdt-gitlab.elice.io">엘리스 Gitlab</a>
				</p>
			</div>

			<div className="git">
				<a href="https://github.com">Github</a>
			</div>
			<div className="footer">
				<p>© 2022 Circuit FROM Elice</p>
			</div>
		</div>
	);
}

export default SideBar;
