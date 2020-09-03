// see https://styled-components.com/docs/api#typescript
import 'styled-components'

interface FlexboxGridThemeConfiguration {
	gridSize: number
	gutterWidth: number
	outerMargin: number
	mediaQuery: string
	container: any
	breakpoints: any
}

declare module 'styled-components' {
  export interface ThemeConfiguration {
	  backgroundColor: string
	  fonts: string[]
	  fontColor: string
	  fontSizes: any
	  imageSizes: any
	  flexboxgrid: FlexboxGridThemeConfiguration
  }
}
