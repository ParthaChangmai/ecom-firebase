import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart';
import ItemCard from '../components/ItemCard';
import product from '../data/product.json';

const Products = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<div>
			<div>
				<ItemCard product={product[0]} />
			</div>
			<div
				className={
					cart?.status
						? 'right-0 p-2 px-3 rounded-l-lg fixed ease-in-out duration-500 transition-all top-0 min-h-screen bg-gray-900 shadow-cart w-5/6 lg:w-2/5'
						: 'right-[-100%] p-2 px-3 rounded-l-lg fixed ease-in-out duration-1000 transition-all top-0 min-h-screen bg-gray-900 shadow-cart w-5/6 lg:w-2/5'
				}
			>
				<Cart />
			</div>
		</div>
	);
};

export default Products;
