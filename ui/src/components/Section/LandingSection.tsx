import React from "react";
import Section from "./Section";
import SectionGrid from "./SectionGrid";
import SectionRow from "./SectionRow";
import { Col } from "react-flexbox-grid";
import ScrollIndicator from "./ScrollIndicator"

/*
 * Component representing the traits section.
 */
const LandingSection: React.FC = props => {
	return (
		<Section>
			<SectionGrid fluid>
				<SectionRow middle="xs" around="xs">
					<Col xs={12}></Col>
				</SectionRow>
			</SectionGrid>
			<ScrollIndicator>⌄</ScrollIndicator>
		</Section>
	);
};

export default LandingSection;
