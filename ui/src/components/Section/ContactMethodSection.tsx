import React from "react";
import Section, { Props } from "./Section"
import { Grid, Row, Col } from "react-flexbox-grid"
import { ContactMethod } from "../../types"

/*
 * Properties defined for the methods sections.
 */
interface ContactMethodProps extends Props {
	methods: ContactMethod[]
}

/*
 * Component representing the methods section.
 */
const ContactMethodSection : React.FC<ContactMethodProps> = (props) => {
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

export default ContactMethodSection;
