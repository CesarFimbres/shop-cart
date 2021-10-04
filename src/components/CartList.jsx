import { Component } from 'react';

const styles = {
	cartList: {
		background: 'rgb(255, 255, 255)',
		border: ' 1px solid #fc9135',
		borderRadius: '4px',
		// boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
		boxShadow:
			'rgb(0, 0, 0, 0.2) 0px 12px 24px, rgb(0, 0, 0, 0.12) 0px 10px 8px',
		color: '#088f40',
		padding: '7px',
		transition: 'all 0.3s ease-in-out',
		width: '300px',

		position: 'absolute',
		right: '30px',
		top: '75px',
	},
	empty: {
		alignItems: 'center',
		color: '#fc9135',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '25px 0',
	},
	li: {
		alignItems: 'center',
		borderBottom: '1px solid #ddd',
		display: 'flex',
		justifyContent: 'space-around',
		padding: '7px 0',
	},
	total: {
		alignItems: 'center',
		color: '#fc9135',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: '15px 0px 0px 0px',
	},
	ul: {
		padding: '15px',
	},
};

class CartList extends Component {
	render() {
		// console.log('CartList :>> ', this.props);
		const { cart, totalItems } = this.props;
		return (
			<div style={styles.cartList}>
				{cart.length <= 0 ? (
					<div style={styles.empty}>
						<i className="far fa-sad-cry fa-3x"></i>
						<h4 style={styles.total}>
							Your shopping cart is empty.
						</h4>
					</div>
				) : (
					<ul style={styles.ul}>
						{cart.map(
							(item) =>
								item.qty > 0 && (
									<li style={styles.li} key={item._id}>
										<img
											src={item.img}
											alt={item.name}
											height="32"
											width="50"
										/>
										{item.name}
										<span>{item.qty}</span>
									</li>
								),
						)}
						<div style={styles.total}>
							<span>Total amount: </span>
							<h4>{totalItems}</h4>
						</div>
					</ul>
				)}
			</div>
		);
	}
}

export default CartList;
