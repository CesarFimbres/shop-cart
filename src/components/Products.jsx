import { Component } from 'react';
import Product from './Product';

class Products extends Component {
	render() {
		// console.log('Products :>> ', this.props);
		const { addCart, cart, products, subtractCart, updateValues } =
			this.props;

		return (
			<>
				<h2>Products list</h2>

				<div className="products">
					{products.map((product) => (
						<Product
							addCart={addCart}
							cart={cart}
							key={product._id}
							product={product}
							subtractCart={subtractCart}
							updateValues={updateValues}
						/>
					))}
				</div>
			</>
		);
	}
}

export default Products;
