import styled from "styled-components"
import React from "react";

const Header = styled.header`
  font-size: ${(props)=> props.theme.fontSizes.medium};
  padding-top: 2rem;
  padding-left: 4rem;
  padding-bottom: 2rem;
  width: 100%;
  text-align: left;
`

const SectionHeader: React.FC = (props) => {
	return <Header>> {props.children}</Header>
}

export default SectionHeader;
