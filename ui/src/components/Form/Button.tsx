import styled from "styled-components";

const Button = styled.button`
	width: 100%;
	height: 3rem;
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.fontColor};
	border: 0.25rem white solid;
	outline: none;
	font-family: ${props => props.theme.fonts[0]};

	&:hover {
		cursor: pointer;
		background-color: ${props => props.theme.fontColor};
		color: ${props => props.theme.backgroundColor};
	}
`;

export default Button;
