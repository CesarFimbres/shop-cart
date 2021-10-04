import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import CartList from './CartList';

const styles = {
	img: {
		color: '#fc9135',
		cursor: 'pointer',
		filter: 'drop-shadow(2px 2px 2px #a2dd55ac)',
	},
	bubble: {
		position: 'relative',
	},
};

class Cart extends Component {
	render() {
		const { cart, showCart, visibleCart } = this.props;
		const totalItems = cart.reduce((acc, el) => acc + el.qty, 0);

		return (
			<div>
				<i
					style={styles.img}
					className="fas fa-shopping-cart fa-2x"
					onClick={showCart}
				></i>

				<span style={styles.bubble}>
					{totalItems > 0 && <BubbleAlert value={totalItems} />}
				</span>

				{visibleCart && (
					<CartList cart={cart} totalItems={totalItems} />
				)}
			</div>
		);
	}
}

export default Cart;
