import styled from "styled-components"
import React from "react";

const Description = styled.header`
  font-size: ${(props)=> props.theme.fontSizes.small};
  text-align: justify;
  text-justify: inter-word;
  padding-left: 4rem;
`

const SectionDescription: React.FC = (props) => {
	return <Description>{props.children}</Description>
}

export default SectionDescription;
