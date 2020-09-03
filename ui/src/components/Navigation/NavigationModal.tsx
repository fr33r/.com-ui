import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const NavModal = styled.div`
  display: ${(props: {show: boolean}) => props.show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: ${props => props.theme.backgroundColor};
`;

/*
 * Properties defined for the navigation modal.
 */
interface Props {
	items: string[]
	show: boolean
}

/*
 * Component representing the navigation modal.
 */
const NavigationModal: React.FC<Props> = props => {
	return (
		<NavModal show={props.show}>
			<Navigation items={props.items}/>
		</NavModal>
	);
}

export default NavigationModal;
