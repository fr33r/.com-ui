import React from "react";
import styled from "styled-components";
import NavigationListItem from "./NavigationListItem";

const NavList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0px;
  margin: 0px;
  position: relative;
`;

/*
 * Properties defined for the navigation list.
 */
interface Props {
	items: string[];
}

/*
 * Component representing the core navigation.
 */
const NavigationList: React.FC<Props> = props => {
	return (
		<NavList>
			{props.items.map((item: string, idx: number) => (
				<NavigationListItem key={idx} label={item} />
			))}
		</NavList>
	);
};

export default NavigationList;
