import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ItemCard = ({ product }) => {
	const { name, url, price, discription } = product;

	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};
	console.log(url);

	return (
		<div className="bg-[#F5F5F5] cursor-default mt-5 ml-4 px-2 pt-4 rounded-xl flex w-80 flex-col ">
			<div>
				<Image
					width={300}
					height={300}
					src={url}
					className="rounded-xl"
					alt="samsung"
				/>
			</div>
			<div className="font-extrabold pt-2 text-3xl">{name}</div>
			<div className=" pt-2 font-thin text-gray-700 text-md">{discription}</div>
			<div className="flex justify-between pt-6 pb-2">
				<div className="text-xl  p-2 font-semibold">${price}</div>
				<div>
					<button
						onClick={handleAddToCart}
						className="p-2 px-3 bg-blue-900 rounded-xl text-white hover:bg-blue-500 transition-all ease-in-out duration-500 "
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
