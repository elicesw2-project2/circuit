import React, { useEffect, useState } from 'react';
import '../styles/NavBar.scss';

// FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFlagCheckered,
	faHomeLgAlt,
	faEdit,
	faCircleUser,
	faGear,
	faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
import Logout from 'utils/Logout';

function NavBar({ imgSrc, setNickname, setEmail, setImgSrc }) {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu((showMenu) => !showMenu);
	};

	useEffect(() => {
		(async function fetchUserId() {
			await fetch(`https://elice-server.herokuapp.com/mypage/${localStorage.getItem('id')}`, {
				method: 'GET',
			})
				.then((res) => res.json())
				.then((result) => {
					setNickname(result.data.nickname);
					setEmail(result.data.id);
					// 처음 로그인한 유저는 null값이 들어오므로 profile값이 있을 때만 DB에서 불러와서 지정함
					if (result.data.profile !== null) {
						setImgSrc(result.data.profile);
					}
				});
		})();
	}, []);

	return (
		<>
			<nav className="navBar">
				<div className="navLogo">
					<a href="/circuit" style={{ textDecoration: 'none' }}>
						Circuit
						{/* <FontAwesomeIcon icon={faFlagCheckered} /> */}
					</a>
				</div>
				<ul className="navItems">
					{/* <li className="navItem">
					<Link to="/">
						<FontAwesomeIcon icon={faHomeLgAlt} />
					</Link>
				</li> */}
					{/* <li className="navItem">
					<Link to="/Writing">
						<FontAwesomeIcon icon={faEdit} />
					</Link>
				</li> */}
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
											<Link to="/my-page" className="menu__mypage" style={{ textDecoration: 'none' }}>
												마이 페이지
											</Link>
										</li>
										{/* <Divider>Or</Divider> */}
										{/* <li>
										<FontAwesomeIcon icon={faGear} className="menu__icon" />
										<Link to="/">설정</Link>
									</li> */}
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

export default NavBar;
