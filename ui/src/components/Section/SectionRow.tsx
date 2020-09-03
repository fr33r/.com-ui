import styled, { ThemeConfiguration } from "styled-components";
import { Row } from "react-styled-flexboxgrid";

/*
 * The properties available for the section row component.
 */
interface SectionRowProps {
	readonly theme: ThemeConfiguration;
	readonly gutterBottom?: boolean;
	readonly gutterTop?: boolean;
}

/*
 * Represents the flex-box grid within each section.
 */
const SectionRow = styled(Row)<SectionRowProps>`
	/* if nothing provided or gutter_bottom */
	padding-bottom: ${(props: SectionRowProps) =>
		!props.gutterTop ? props.theme.flexboxgrid.gutterWidth / 2 : 0}rem;
	/* if nothing provided or gutter_top */
	padding-top: ${(props: SectionRowProps) =>
		!props.gutterBottom ? props.theme.flexboxgrid.gutterWidth / 2 : 0}rem;
`;

export default SectionRow;
