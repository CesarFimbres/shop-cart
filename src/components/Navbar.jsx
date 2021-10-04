import { Component } from 'react';

import Cart from './Cart';
import Logo from './Logo';

const styles = {
	navbar: {
		alignItems: 'center',
		background: '#088f40',
		color: 'white',
		display: 'flex',
		flexDirection: 'row',
		height: '100px',
		justifyContent: 'space-between',
		position: 'relative',
		padding: '0 40px',
		boxShadow: '0 2px 3px rgb(0, 0, 0, 0.15)',
	},
};

class Navbar extends Component {
	render() {
		const { cart, visibleCart, showCart } = this.props;
		return (
			<nav style={styles.navbar}>
				<Logo />
				<Cart
					cart={cart}
					showCart={showCart}
					visibleCart={visibleCart}
				/>
			</nav>
		);
	}
}

export default Navbar;
