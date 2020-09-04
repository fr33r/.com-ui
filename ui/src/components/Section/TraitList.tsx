import React from "react";
import { Trait } from "../../types";
import styled from "styled-components";

const List = styled.ul`
	list-style: none;
	width: 100%;
	padding: 0px;
	margin: 0px;
	position: relative;
	text-align: justify;
	text-justify: inter-word;
`;

const TraitListItem = styled.li`
	display: inline;

	&:hover {
		color: red;
	}
`;

interface TraitListProps {
	items: Trait[];
}

const TraitList: React.FC<TraitListProps> = props => {
	return (
		<List>
			{props.items.map((trait: Trait, idx: number) => {
				const li = <TraitListItem key={idx}>{trait.description}</TraitListItem>
				const sep = idx !== props.items.length - 1 ? " | " : ""
				return [li, sep]
			})}
		</List>
	);
};

export default TraitList;
