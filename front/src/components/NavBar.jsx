import React from 'react';
import '../styles/NavBar.scss';

// FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered, faSearch, faHomeLgAlt, faEdit, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

function NavBar() {
	return (
		<nav className="navBar">
			<div className="navLogo">
				<FontAwesomeIcon icon={faFlagCheckered} />
			</div>
			<div className="searchBar">
				<input className="searchBar__input" placeholder="검색" />
				<div className="searchBar__icon">
					<FontAwesomeIcon icon={faSearch} />
				</div>
				{/* <span>검색</span> */}
			</div>
			<ul className="navItems">
				<li className="navItem">
					<FontAwesomeIcon icon={faHomeLgAlt} />
				</li>
				<li className="navItem">
					<FontAwesomeIcon icon={faEdit} />
				</li>
				<li className="navItem">
					<FontAwesomeIcon icon={farHeart} />
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
