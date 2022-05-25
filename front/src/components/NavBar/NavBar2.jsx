import React, { useEffect, useState } from 'react';
import 'styles/NavBar/NavBar.scss';

// FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Logout from 'utils/Logout';

function NavBar2({ imgSrc, setNickname, setEmail, setImgSrc, setDescription }) {
	const location = useLocation();
	const [showMenu, setShowMenu] = useState(false);
	const [refresh, setRefresh] = useState(false);
	const toggleMenu = () => {
		setShowMenu((showMenu) => !showMenu);
	};

	useEffect(() => {
		(async () => {
			await fetch(`https://elice-server.herokuapp.com/mypage/${localStorage.getItem('id')}`, {
				method: 'GET',
			})
				.then((res) => res.json())
				.then((result) => {
					setNickname(result.data.nickname);
					setEmail(result.data.id);
					setDescription(result.data.intro);
					// 처음 로그인한 유저는 null값이 들어오므로 profile값이 있을 때만 DB에서 불러와서 지정함
					if (result.data.profile !== null) {
						setImgSrc(result.data.profile);
					}
				});
		})();
	}, []);

	useEffect(() => {
		if (location.pathname.includes('user')) {
			setRefresh(true);
		} else {
			setRefresh(false);
		}
	}, [location]);

	return (
		<>
			<nav className="navBar navBar2">
				<div className="navLogo">
					<Link to="/page=1" style={{ textDecoration: 'none' }}>
						Circuit
					</Link>
				</div>
				<ul className="navItems">
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
										<li className="menu__mypage">
											<FontAwesomeIcon icon={faCircleUser} className="menu__icon" />
											{refresh ? (
												<a href={`/circuit/user/${localStorage.getItem('id')}`} style={{ textDecoration: 'none' }}>
													마이 페이지
												</a>
											) : (
												<Link to={`/user/${localStorage.getItem('id')}`} style={{ textDecoration: 'none' }}>
													마이 페이지
												</Link>
											)}
										</li>
										<li>
											<FontAwesomeIcon icon={faRightFromBracket} className="menu__icon" />
											<Link to="/auth/login" onClick={Logout} style={{ textDecoration: 'none' }}>
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
			<Outlet />
		</>
	);
}

export default NavBar2;
