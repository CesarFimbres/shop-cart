import { Component } from 'react';

const styles = {
	bubbleAlert: {
		backgroundColor: '#f5f5f5',
		border: '2px solid #fc9135',
		borderRadius: '10px',
		color: '#088f40',
		fontSize: '0.75rem',
		padding: '1px 10px',

		position: 'absolute',
		bottom: '20px',
		right: '-20px',
	},
};

class BubbleAlert extends Component {
	getNumber(n) {
		if (!n) {
			return '';
		}
		return n > 9 ? '9+' : n;
	}

	render() {
		const { value } = this.props;
		return <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>;
	}
}

export default BubbleAlert;
