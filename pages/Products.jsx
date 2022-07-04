import React from 'react';
import { useDispatch } from 'react-redux';
import ItemCard from '../components/ItemCard';
import product from '../data/product.json';
import { addToCart } from '../features/cartSlice';

const { name, url, price } = product[0];

const Products = () => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart(product[0]));
	};
	return (
		<div>
			<ItemCard product={product[0]} />
		</div>
	);
};

export default Products;
