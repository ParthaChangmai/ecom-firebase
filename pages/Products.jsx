import React from 'react';
import product from '../data/product.json';

const { id, name, url, price } = product[0];

const Products = () => {
	console.log(product);
	return (
		<div>
			<div className="bg-[#F5F5F5] mt-5 ml-4 px-2 pt-4 rounded-xl flex w-80 flex-col ">
				<div>
					<img src={url} className="rounded-xl" alt="" />
				</div>
				<div className="font-extrabold pt-2 text-3xl">{name}</div>
				<div className="flex justify-between pt-6 pb-2">
					<div className="text-lg p-2 font-semibold">${price}</div>
					<div>
						<button className="p-2 bg-blue-900 rounded-xl text-white hover:bg-blue-500 transition-all ease-in-out duration-500 ">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
