import styled from "styled-components";

/*
 * Represents a small image.
 */
const SmallImage = styled.div`
	background-color: white;
	height: ${props => props.theme.imageSizes.small}rem;
`;

export default SmallImage;
