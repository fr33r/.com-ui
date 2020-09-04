import React from "react";
import styled from "styled-components";
import NavigationList from "./NavigationList";

const Nav = styled.nav``;

/*
 * Properties defined for the navigation.
 */
interface Props {
	items: string[];
	onNavItemClick: Function
}

/*
 * Component representing the core navigation.
 */
const Navigation: React.FC<Props> = props => {
	return (
		<Nav>
			<NavigationList items={props.items} onNavItemClick={props.onNavItemClick} />
		</Nav>
	);
};

export default Navigation;
