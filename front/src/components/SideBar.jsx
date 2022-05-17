import React from 'react';
import '../styles/SideBar.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function SideBar() {
	return (
		<div className="Sidebar__container">
			<h2>바로가기</h2>
			<div className="link">
				<p id="link1">
					<a href="https://swtrack.lms.elice.io/login">엘리스 학습 센터 &rarr;</a>
				</p>
				<p id="link2">
					<a href="https://www.notion.so/elice/SW-2-2d1dc1808e5a42349e60562d7256d30a">엘리스 SW 트랙 Notion &rarr;</a>
				</p>
				<p id="link3">
					<a href="https://kdt-gitlab.elice.io">엘리스 Gitlab &rarr;</a>
				</p>
			</div>

			<div className="git">
				<FontAwesomeIcon icon={faGithub} className="gitIcon" />
				<a href="https://github.com/elicesw2-project2/circuit">Github</a>
			</div>
			<div className="footer">
				<p>© 2022 Circuit From Elice</p>
			</div>
		</div>
	);
}

export default SideBar;
