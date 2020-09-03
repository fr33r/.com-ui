import styled from "styled-components";

/*
 * Represents a large image.
 */
const LargeImage = styled.div`
	background-color: white;
	height: ${props => props.theme.imageSizes.large}rem;
`;

export default LargeImage;
