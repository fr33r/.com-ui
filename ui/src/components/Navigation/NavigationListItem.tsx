import React from "react";
import styled from "styled-components";

const NavListItem = styled.li`
  cursor: pointer;
  width: 100%;
  padding: 10px;

  &:hover:before {
	position: absolute;
	left: -10px;
	content: '> ';
  }
`;

/*
 * Properties defined for the navigation list item.
 */
interface Props {
	label: string;
}

/*
 * Component representing a single item in the navigation list.
 */
const NavigationListItem: React.FC<Props> = props => {
	return <NavListItem>{props.label}</NavListItem>
};

export default NavigationListItem;
