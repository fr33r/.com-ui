import React from "react";
import Section, { Props } from "./Section";
import SectionHeader from "./SectionHeader";
import SectionGrid from "./SectionGrid";
import SectionRow from "./SectionRow";
import SectionDescription from "./SectionDescription";
import { Col } from "react-flexbox-grid";
import { Experience } from "../../types";
import { SmallImage, LargeImage } from "../Image"

/*
 * Properties defined for the experiences sections.
 */
interface ExperienceProps extends Props {
	experience: Experience;
}

/*
 * Component representing the experiences section.
 */
const ExperienceSection: React.FC<ExperienceProps> = props => {
	return (
		<Section>
			<SectionGrid fluid>
				<SectionRow middle="xs" around="xs">
					<Col xs={4} sm={3} md={2}>
						<SectionRow gutterBottom>
							<Col xs>
								<SmallImage />
							</Col>
						</SectionRow>
						<SectionRow gutterTop>
							<Col xs>
								<SmallImage />
							</Col>
						</SectionRow>
					</Col>
					<Col xs={4} sm={6} md={4}>
						<LargeImage />
					</Col>
					<Col xs={4} sm={3} md={6}>
						<SectionHeader>{props.experience.name}</SectionHeader>
						<SectionDescription>{props.experience.description}</SectionDescription>
					</Col>
				</SectionRow>
			</SectionGrid>
		</Section>
	);
};

export default ExperienceSection;
