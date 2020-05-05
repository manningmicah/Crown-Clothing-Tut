import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mainTheme from 'assets/color-palettes.js';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	border-bottom: 3px solid black;
`;

export const LogoContainer = styled(NavLink)`
	height: 100%;
	width: 85px;
	padding: 15px;
`;

export const OptionsContainer = styled.nav`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(NavLink)`
	padding: 10px 15px;
	cursor: pointer;
	text-align: center;

	&.active {
		background: lightgrey
	}
	
	&:active, &:hover, &:focus {
		color: ${mainTheme.MainBgColor};
		background: ${mainTheme.MainColor};
	}


`;
