import { Component } from 'react';

import logo from '../assets/img/logo.svg';

const styles = {
	img: {
		height: '20px',
		with: '20px',
	},
	logo: {
		fontSize: '1.5rem',
		fontWeight: '600',
	},
};

class Logo extends Component {
	render() {
		return (
			<div style={styles.logo}>
				<img style={styles.img} src={logo} alt="Online store" />
				{'  '}
				Grocery
			</div>
		);
	}
}

export default Logo;
