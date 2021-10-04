import { Component } from 'react';
import Products from './components/Products';

import lettuce from './assets/img/lettuce.jpg';
import peach from './assets/img/peach.jpg';
import tomato from './assets/img/tomato.jpg';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
	state = {
		cart: [],
		isCartVisible: false,
		products: [
			{
				_id: 'let01',
				name: 'Lettuce',
				price: 500,
				img: lettuce,
			},
			{
				_id: 'pea01',
				name: 'Peach',
				price: 2500,
				img: peach,
			},
			{
				_id: 'tom01',
				name: 'Tomato',
				price: 1500,
				img: tomato,
			},
		],
		valueExample: 0,
	};

	addCart = (product) => {
		const { cart } = this.state;

		if (cart.find((item) => item._id === product._id)) {
			const newCart = cart.map((item) =>
				item._id === product._id
					? {
							...item,
							qty: item.qty + 1,
					  }
					: item,
			);
			return this.setState({ cart: newCart });
		}

		return this.setState({
			cart: this.state.cart.concat({
				...product,
				qty: 1,
			}),
		});
	};

	subtractCart = (product) => {
		const { cart } = this.state;

		if (cart.find((item) => item._id === product._id)) {
			const newCart = cart.map((item) =>
				item._id === product._id
					? {
							...item,
							qty: item.qty - 1,
					  }
					: item,
			);
			return this.setState({ cart: newCart });
		}

		return this.setState({
			cart: this.state.cart.concat({
				...product,
				qty: 1,
			}),
		});
	};

	showCart = () => {
		this.setState({ isCartVisible: !this.state.isCartVisible });
	};

	updateValues = (value) => {
		this.setState({
			valueExample: value,
		});
	};

	render() {
		const { isCartVisible } = this.state;
		return (
			<div>
				<Navbar
					cart={this.state.cart}
					showCart={this.showCart}
					visibleCart={isCartVisible}
				/>
				<Title />
				<section>
					<Products
						addCart={this.addCart}
						cart={this.state.cart}
						products={this.state.products}
						subtractCart={this.subtractCart}
						updateValues={this.updateValues}
					/>
				</section>
			</div>
		);
	}
}

export default App;
