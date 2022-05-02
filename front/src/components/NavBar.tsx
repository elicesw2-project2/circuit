import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
	/* position: fixed; */
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 16px 16px 0;
	background-color: gray;
`;

const NavItems = styled.ul`
	display: flex;
`;

const NavLogo = styled.img``;

const NavItem = styled.li`
	padding: 8px 12px;
	margin: 0 4px;
	cursor: pointer;
	border: 1px solid red;
	border-radius: 4px;
`;

function NavBar() {
	return (
		<Navbar>
			<NavLogo />
			<NavItems>
				<NavItem>Home</NavItem>
				<NavItem>About</NavItem>
				<NavItem>etc...</NavItem>
			</NavItems>
		</Navbar>
	);
}

export default NavBar;
