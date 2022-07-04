import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
	addToCart,
	changeCartStatus,
	decreaseQuantity,
	removeCartItem,
} from '../features/cartSlice';

const CartItemCard = ({ cartItems }) => {
	const { name, url, price, discription, quantity } = cartItems;
	const dispatch = useDispatch();
	const router = useRouter();

	const increaseCartQuantity = (e) => {
		e.preventDefault();
		dispatch(addToCart(cartItems));
	};
	const decreaseCartQuantity = (e) => {
		e.preventDefault();
		dispatch(decreaseQuantity(cartItems));
	};
	const emptyCart = () => {
		dispatch(removeCartItem());
		dispatch(changeCartStatus(false));
		router.push('/Orderplaced');
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col md:flex-row mt-5 pt-2  border-2 border-[#6133f5] rounded-3xl">
				<div className="md:w-[50%]">
					<img className="rounded-lg opacity-95" src={url} alt="" />
					<div className="w-full flex justify-center gap-7 py-1">
						<button
							onClick={decreaseCartQuantity}
							className="p-2 px-5 bg-indigo-900 rounded-full cursor-pointer hover:bg-indigo-600 transition-all ease-in-out duration-500"
						>
							-
						</button>
						<p className="p-2 font-bold text-lg">{quantity}</p>
						<button
							onClick={increaseCartQuantity}
							className="p-2 px-5 bg-indigo-900 rounded-full cursor-pointer hover:bg-indigo-600 transition-all ease-in-out duration-500"
						>
							+
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-2 md:gap-9 w-full">
					<h2 className="text-center text-xl pt-2 md:pt-0 font-semibold">
						{name}
					</h2>
					<p className="pl-5 text-gray-400">{discription}</p>
					<p className="pl-5 pb-2 md:pb-0">Price: ${price}</p>
				</div>
			</div>
			<div className="text-2xl">
				<p className="border-b-2 mx-8 xl:mx-36 text-center ">
					TOTAL PRICE: ${price * quantity}
				</p>
			</div>
			<div className="bottom-2  text-center w-full absolute ">
				<p
					onClick={emptyCart}
					className="p-3 cursor-pointer  rounded-full mx-8 xl:mx-36 bg-indigo-900 hover:bg-indigo-600 transition-all ease-in-out duration-500"
				>
					CHECKOUT
				</p>
			</div>
		</div>
	);
};

export default CartItemCard;
