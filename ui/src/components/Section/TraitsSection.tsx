import React from "react";
import Section, { Props } from "./Section";
import { Grid, Row, Col } from "react-flexbox-grid";
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

export default TraitsSection;
