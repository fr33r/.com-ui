import React from "react";
import Section, { Props } from "./Section";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Project } from "../../types";

/*
 * Properties defined for the projects sections.
 */
interface ProjectProps extends Props {
	projects: Project[];
}

/*
 * Component representing the projects section.
 */
const ProjectSection: React.FC<ProjectProps> = props => {
	return (
		<Section>
			<Grid fluid>
				<Row>
					<Col>X</Col>
					<Col>Y</Col>
					<Col>Z</Col>
				</Row>
			</Grid>
		</Section>
	);
};

export default ProjectSection;
