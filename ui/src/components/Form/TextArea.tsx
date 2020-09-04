import styled from "styled-components";

const TextArea = styled.textarea`
	width: 100%;
	height: 15rem;
	background-color: ${props => props.theme.backgroundColor};
	color: ${props => props.theme.fontColor};
	border: 0.25rem white solid;
	outline: none;
	font-family: ${props => props.theme.fonts[0]};
	caret-color: red;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
`;

export default TextArea;
