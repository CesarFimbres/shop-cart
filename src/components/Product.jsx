import { Component } from 'react';

import InputQuantity from './InputQuantity';

class Product extends Component {
	render() {
		// console.log('Product :>>', this.props);
		const { addCart, cart, product, subtractCart, updateValues } =
			this.props;

		const itemCart = cart.find((item) => item._id === product._id);

		return (
			<div className="product-card">
				<img src={product.img} alt={product.name} />
				<h3>{product.name}</h3>
				<span className="price">{product.price}</span>

				<InputQuantity
					addCart={addCart}
					cart={itemCart}
					product={product}
					subtractCart={subtractCart}
					updateValues={updateValues}
				/>
			</div>
		);
	}
}

export default Product;
