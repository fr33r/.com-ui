import React from "react";
import Section, { Props } from "./Section";
import SectionHeader from "./SectionHeader";
import SectionGrid from "./SectionGrid";
import SectionRow from "./SectionRow";
import { Col } from "react-flexbox-grid";
import { ContactMethod } from "../../types";
import { SendButton, CancelButton, TextArea } from "../Form";

/*
 * Properties defined for the methods sections.
 */
interface ContactMethodProps extends Props {
	methods: ContactMethod[];
}

/*
 * Component representing the methods section.
 */
const ContactMethodSection: React.FC<ContactMethodProps> = props => {
	const [showForm, setShowForm] = React.useState<boolean>(false);
	return (
		<Section>
			<SectionGrid fluid>
				<SectionRow middle="xs" around="xs">
					<Col xs={6}>
						{!showForm &&
							props.methods.map((method: ContactMethod) => (
								<SectionRow key={method.name}>
									<Col
										xs
										onClick={() => {
											setShowForm(true);
										}}
									>
										{method.reachableAt}
									</Col>
								</SectionRow>
							))}
						{showForm && (
							<>
								<SectionRow>
									<Col xs>
										<TextArea
											placeholder={"say heyyyyyyyyyyy"}
										/>
									</Col>
								</SectionRow>
								<SectionRow>
									<Col xs>
										<SendButton onClick={() => {}}>
											send
										</SendButton>
									</Col>
								</SectionRow>
								<SectionRow>
									<Col xs>
										<CancelButton
											onClick={() => {
												setShowForm(false);
											}}
										>
											cancel
										</CancelButton>
									</Col>
								</SectionRow>
							</>
						)}
					</Col>
					<Col className={props.reverse ? "first-xs" : ""} xs={6}>
						<SectionHeader>{"Contact"}</SectionHeader>
					</Col>
				</SectionRow>
			</SectionGrid>
		</Section>
	);
};

export default ContactMethodSection;
