import React from "react";
import Section, { Props } from "./Section";
import SectionHeader from "./SectionHeader";
import SectionGrid from "./SectionGrid";
import SectionRow from "./SectionRow";
import SectionDescription from "./SectionDescription";
import { Col } from "react-flexbox-grid";
import { Project } from "../../types";
import { SmallImage, LargeImage } from "../Image"

/*
 * Properties defined for the projects sections.
 */
interface ProjectProps extends Props {
	project: Project;
}

/*
 * Component representing the projects section.
 */
const ProjectSection: React.FC<ProjectProps> = props => {
	return (
		<Section>
			<SectionGrid fluid>
				<SectionRow middle="xs" around="xs">
					<Col className={"hidden-xs hidden-sm hidden-md hidden-lg"} xl={2}>
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
					<Col xs={2} sm={4} md={6} lg={6} xl={4}>
						<LargeImage />
					</Col>
					<Col className={props.reverse ? "first-xs" : ""} xs={10} sm={8} md={6} lg={6} xl={6}>
						<SectionHeader>{props.project.name}</SectionHeader>
						<SectionDescription>{props.project.description}</SectionDescription>
					</Col>
				</SectionRow>
			</SectionGrid>
		</Section>
	);
};

export default ProjectSection;
