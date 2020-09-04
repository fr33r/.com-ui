import React from "react";
import Section, { Props } from "./Section";
import SectionHeader from "./SectionHeader";
import SectionGrid from "./SectionGrid";
import SectionRow from "./SectionRow";
import TraitList from "./TraitList";
import { Col } from "react-flexbox-grid";
import { Trait } from "../../types";

/*
 * Properties defined for the traits sections.
 */
interface TraitsProps extends Props {
	traits: Trait[];
}

/*
 * Component representing the traits section.
 */
const TraitsSection: React.FC<TraitsProps> = props => {
	return (
		<Section>
			<SectionGrid fluid>
				<SectionRow middle="xs" around="xs">
					<Col xs={6}>
						<TraitList items={props.traits} />
					</Col>
					<Col xs={6}>
						<SectionHeader>{"about"}</SectionHeader>
					</Col>
				</SectionRow>
			</SectionGrid>
		</Section>
	);
};

export default TraitsSection;
