import React from "react"
import { ThemeProvider } from "styled-components"

/*
 * Defines the theme settings.
 */
const theme = {
	backgroundColor: "#000000",
	fonts: ['Chicago'],
	fontColor: "#FFFFFF",
	fontSizes: {
		small: "1rem",
		medium: "2rem",
		large: "3rem",
	}
}

/*
 * Represents the component responsible for defining our application-wide themes.
 */
const Theme: React.FC = ({children}) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
