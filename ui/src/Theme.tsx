import React from "react"
import { ThemeProvider, ThemeConfiguration } from "styled-components"

/*
 * Defines the theme settings.
 */
const theme: ThemeConfiguration = {
	backgroundColor: "#000000",
	fonts: ['Chicago'],
	fontColor: "#FFFFFF",
	fontSizes: {
		small: "1rem",
		medium: "2rem",
		large: "3rem",
	},
	imageSizes: {
		small: 15
	},
	flexboxgrid: {
		// Defaults
		gridSize: 12, // columns
		gutterWidth: 1, // rem
		outerMargin: 2, // rem
		mediaQuery: "only screen",
		container: {
			sm: 46, // rem
			md: 61, // rem
			lg: 76 // rem
		},
		breakpoints: {
			xs: 0, // em
			sm: 48, // em
			md: 64, // em
			lg: 75 // em
		}
	}
}
theme.imageSizes.large = theme.imageSizes.small * 2 + theme.flexboxgrid.gutterWidth;

/*
 * Represents the component responsible for defining our application-wide themes.
 */
const Theme: React.FC = ({children}) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
