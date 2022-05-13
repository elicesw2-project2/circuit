import React, { useEffect, useState } from 'react';
import '../styles/NavBar.scss';

// FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFlagCheckered,
	faSearch,
	faHomeLgAlt,
	faEdit,
	faCircleUser,
	faGear,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Search from 'utils/Search';
import { Link, useNavigate } from 'react-router-dom';
import Logout from 'utils/Logout';

function NavBar({ setSearchWritings, imgSrc }) {
	const navigate = useNavigate();

	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu((showMenu) => !showMenu);
	};

	const [searchValue, setSearchValue] = useState('');
	const handleSearchValue = (e) => {
		setSearchValue(e.target.value);
	};

	const {
		location: { pathname },
	} = window;
	if (pathname === '/circuit/auth/login' || pathname === '/circuit/auth/signup') return null;
	return (
		<nav className="navBar">
			<div className="navLogo">
				<Link to="/">
					<FontAwesomeIcon icon={faFlagCheckered} />
				</Link>
			</div>
			<div className="searchBar">
				<input className="searchBar__input" placeholder="검색" value={searchValue} onChange={handleSearchValue} />
				<div className="searchBar__icon">
					<FontAwesomeIcon
						icon={faSearch}
						onClick={async () => {
							const searchResult = await Search(searchValue);
							setSearchWritings(searchResult);
							console.log(navigate);
							console.log('Search Result: ', searchResult);
							navigate('/');
						}}
					/>
				</div>
			</div>
			<ul className="navItems">
				<li className="navItem">
					<Link to="/">
						<FontAwesomeIcon icon={faHomeLgAlt} />
					</Link>
				</li>
				<li className="navItem">
					<Link to="/Writing">
						<FontAwesomeIcon icon={faEdit} />
					</Link>
				</li>
				<li className="navItem">
					<div className="navItem__menu-container">
						<img
							src={imgSrc}
							alt="profile"
							onClick={() => toggleMenu()}
							aria-hidden="true"
							className="navItem__trigger"
						/>
						{showMenu ? (
							<nav className="menu">
								<div className="menu__square" />
								<div className="menu__lists">
									<li>
										<FontAwesomeIcon icon={faCircleUser} className="menu__icon" />
										<Link to="/my-page">마이 페이지</Link>
									</li>
									<li>
										<FontAwesomeIcon icon={faGear} className="menu__icon" />
										<Link to="/">설정</Link>
									</li>
									<li>
										<FontAwesomeIcon icon={faRightFromBracket} className="menu__icon" />
										<Link to="/auth/login" onClick={Logout}>
											로그아웃
										</Link>
									</li>
								</div>
							</nav>
						) : null}
					</div>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
