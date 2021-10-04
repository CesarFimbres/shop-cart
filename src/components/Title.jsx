import { Component } from 'react';

const styles = {
	title: {
		color: '#01642a',
		margin: '20px 40px',
	},
};

class Title extends Component {
	render() {
		return (
			<h1 style={styles.title}>
				<i className="fab fa-affiliatetheme"></i>
				{'  '}Your trusted store
			</h1>
		);
	}
}

export default Title;
