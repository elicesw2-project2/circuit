import React from 'react';
import '../styles/NavBar.scss';

// FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered, faSearch, faHomeLgAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav className="navBar">
			<div className="navLogo">
				<Link to="/">
					<FontAwesomeIcon icon={faFlagCheckered} />
				</Link>
			</div>
			<div className="searchBar">
				<input className="searchBar__input" placeholder="검색" />
				<div className="searchBar__icon">
					<FontAwesomeIcon icon={faSearch} />
				</div>
			</div>
			<ul className="navItems">
				<li className="navItem">
					<Link to="/">
						<FontAwesomeIcon icon={faHomeLgAlt} />
					</Link>
				</li>
				<li className="navItem">
					<Link to="/board">
						<FontAwesomeIcon icon={faEdit} />
					</Link>
				</li>
				<li className="navItem">
					<Link to="/my-page">
						<FontAwesomeIcon icon={farHeart} />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
