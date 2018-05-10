import Navbar from './Navbar'
import Footer from './Footer'
import Container from './Container'
import {colors} from '../utils/variables'


// https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
const Layout = props => (
	<div style={{display: 'flex', flexDirection: 'column', height: '100vh', color:colors.base}}>
		<Navbar style={{flex: 'none'}}/>
		<main style={{flex: '1 0 auto', width: '100%', background: 'white', paddingBottom: '8rem'}}>
			<Container {...props}/>
		</main>
		<Footer style={{flex: 'none'}}/>
	</div>
)

export default Layout
