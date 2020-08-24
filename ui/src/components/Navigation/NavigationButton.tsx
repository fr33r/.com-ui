import React from "react";
import styled from "styled-components";

const NavButton = styled.button`
  position: absolute;
  right: 0rem;
  top: 0rem;
  border: none;
  background: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  padding: 1rem;
  outline: none;
  text-decoration: none;
  color: ${(props) => props.theme.fontColor};

  &:focus,
  &:active,
  &:focus:active {
	outline: none;
	box-shadow: none;
	background-image: none;
  }
  &:hover {
	cursor: pointer;
  }
`;

/*
 * Properties defined for the navigation button.
 */
interface Props {
	onClick?: Function;
}

/*
 * Represents the component responsible for showing and hiding the navigation.
 */
const NavigationButton: React.FC<Props> = props => {
	const [toggled, setToggled] = React.useState<boolean>(false);
	const handleClick = () => {
		setToggled(!toggled); // set view state internally for onClick.
		if (props.onClick) {
			props.onClick(); // execute the provided onClick handler.
		}
	};
	return <NavButton onClick={handleClick}>{toggled ? "×" : "="}</NavButton>;
};

export default NavigationButton;