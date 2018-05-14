export default ([name, src, fontWeight = '400', fontStyle = 'normal']) => `
	@font-face{
		font-family: "${name}";
		src: url("/static/assets/fonts/${src}.woff2") format("woff2"),
				 url("/static/assets/fonts/${src}.woff") format("woff"),
				 url("/static/assets/fonts/${src}.otf") format("opentype");
		font-style: ${fontStyle};
		font-weight: ${fontWeight};
	}
`
