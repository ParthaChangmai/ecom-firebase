import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCartStatus } from '../features/cartSlice';
import { AiOutlineClose } from 'react-icons/ai';

const Cart = () => {
	const status = useSelector((state) => state.cart.status);

	const dispatch = useDispatch();

	const handleCartStatus = () => {
		dispatch(changeCartStatus(!status));
	};

	return (
		<div className="text-white pt-2 cursor-default">
			<div className="flex justify-between border-b-2 border-[#6133f5] pb-2">
				<div>
					<AiOutlineClose
						onClick={handleCartStatus}
						className="bg-gray-900 p-2 text-3xl rounded-full shadow-lg shadow-indigo-600 cursor-pointer"
					/>
				</div>
				<div>Cart</div>
				<div>quantity</div>
			</div>
			<div>items</div>
		</div>
	);
};

export default Cart;
