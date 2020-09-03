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
	onClick?: Function
}

/*
 * Component representing a single item in the navigation list.
 */
const NavigationListItem: React.FC<Props> = props => {
	const handleClick = () => props.onClick ? props.onClick() : () => {}
	return <NavListItem onClick={handleClick}>{props.label}</NavListItem>
};

export default NavigationListItem;
