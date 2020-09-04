import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
	  transform: translateY(0%) translateX(-50%);
  }
  50% {
	  transform: translateY(-25%) translateX(-50%);
	  opacity: 0%;
  }
  100% {
	  transform: translateY(0%) translateX(-50%);
  }
`;

const ScrollIndicator = styled.div`
	position: absolute;
	bottom: 2rem;
	left: 50%;
	color: white;
	width: 5rem;
	height: 5rem;
	text-align: center;
	font-size: 2rem;

	transform: translateX(-50%);
	animation: 2s ${bounce} ease-out;
	animation-iteration-count: infinite;
`;

export default ScrollIndicator;
