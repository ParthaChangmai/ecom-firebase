import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCartStatus } from '../features/cartSlice';
import { AiOutlineClose } from 'react-icons/ai';
import CartItemCard from './CartItemCard';

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems, status } = cart;

	const dispatch = useDispatch();

	const handleCartStatus = () => {
		dispatch(changeCartStatus(!status));
	};

	return (
		<div className="text-white pt-2 cursor-default">
			<div className="flex justify-between border-b-2 border-[#6133f5] pb-4">
				<div>
					<AiOutlineClose
						onClick={handleCartStatus}
						className="bg-[#230a75] hover:bg-[#6133f5] p-2 text-3xl rounded-full shadow-md shadow-indigo-600 cursor-pointer"
					/>
				</div>
				<div className="text-2xl font-bold">Cart Items</div>
				<div className="text-xl">
					Quantity: {cartItems[0]?.quantity ? cartItems[0]?.quantity : 0}{' '}
				</div>
			</div>
			<div>
				{cartItems.length > 0 ? (
					<CartItemCard cartItems={cartItems[0]} />
				) : (
					<div className="text-center pt-5 text-2xl">No items in cart</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
