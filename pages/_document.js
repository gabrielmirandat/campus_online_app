import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import fontFace from '../utils/fontface'
import {colors, fonts} from '../utils/variables'

const fontStyleSheet = ([
	['InterUI', 'inter-ui/Inter-UI-Regular', 400, 'normal'],
	['InterUI', 'inter-ui/Inter-UI-RegularItalic', 400, 'italic'],
	['InterUI', 'inter-ui/Inter-UI-Medium', 500, 'normal'],
	['InterUI', 'inter-ui/Inter-UI-MediumItalic', 500, 'italic'],
	// ['InterUI', 'inter-ui/Inter-UI-Bold', 600, 'normal'],
	// ['InterUI', 'inter-ui/Inter-UI-BoldItalic', 600, 'italic'],
	// ['InterUI', 'inter-ui/Inter-UI-Black', 800, 'normal'],
	// ['InterUI', 'inter-ui/Inter-UI-BlackItalic', 800, 'italic'],
	['Arnhem', 'arnhem/arnhem-blond', 400, 'normal'],
	['Arnhem', 'arnhem/arnhem-blonditalic', 400, 'italic'],
	['Arnhem', 'arnhem/arnhem-normal', 500, 'normal'],
	['Arnhem', 'arnhem/arnhem-normalitalic', 500, 'italic'],
	// ['Arnhem', 'arnhem/arnhem-bold', 600, 'normal'],
	// ['Arnhem', 'arnhem/arnhem-bolditalic', 600, 'italic'],
].map(fontFace).join('\n'))

export default class CustomDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags }
	}
	render(){
		return (
			<html style={{backgroundColor: colors.base03, fontFamily: fonts.sans}}>
				<Head>
					<meta charSet="UTF-8"/>
					<title>Campus Online</title>
					<meta name='viewport' content='width=device-width, initial-scale=1'/>
					<meta name='description' content='Laboratório de Jornalismo da FAC – UnB'/>
					<link rel='stylesheet' href='/static/reset.css'/>
					<style dangerouslySetInnerHTML={{__html: fontStyleSheet}}/>
					{this.props.styleTags}
				</Head>
				<body>
					<Main/>
					<NextScript/>
					<script src='/static/admin/redirect.js'/>
				</body>
			</html>
		)
	}
}
