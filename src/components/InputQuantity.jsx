import { Component } from 'react';

const styles = {
	buttonWrapper: {
		alignItems: 'center',
		background: '#fcfcfc',
		border: '1px solid #fc9135',
		borderRadius: '20px',
		display: 'flex',
		justifyContent: 'center',
		padding: '1px',
		width: '100px',
	},
	button: {
		background: '#fcfcfc',
		border: ' none',
		borderRadius: '50%',
		color: '#fc9135',
		cursor: ' pointer',
		// margin: ' 10px',
		padding: '1px',
	},
	input: {
		background: '#eee',
		border: 'none',
		borderRadius: '4px',
		color: '#5c5c5c',
		fontSize: '1rem',
		fontWeight: '700',
		height: '25px',
		padding: '3px 7px',
		textAlign: 'center',
		width: '35px',
	},
};

class InputQuantity extends Component {
	handleInputChange = (e) => {
		this.props.updateValues(e.target.value);
	};

	render() {
		console.log('InputQuantity :>> ', this.props);

		const { addCart, cart, product, subtractCart, updateValues } =
			this.props;
		const itemQuantity = !!cart ? cart.qty : '0';

		return (
			<div style={styles.buttonWrapper}>
				<button
					style={styles.button}
					onClick={() => {
						subtractCart(product);
					}}
					// {...this.props}
				>
					<i className="fas fa-minus-circle fa-2x"></i>
				</button>
				<input
					id="qty"
					onChange={(e) => {
						this.handleInputChange(e);
					}}
					readOnly
					style={styles.input}
					type="text"
					value={itemQuantity}
				/>
				<button
					style={styles.button}
					onClick={() => {
						addCart(product);
					}}
					// {...this.props}
				>
					<i className="fas fa-plus-circle fa-2x"></i>
				</button>

				{/* <button
					onClick={() => {
						updateValues(itemQuantity);
					}}
				>
					Anna
				</button> */}
			</div>
		);
	}
}

export default InputQuantity;

/*
class Button extends Component {
	render() {
		// console.log('button :>> ', this.props);
		return <button {...this.props} />;
	}
}
 */
