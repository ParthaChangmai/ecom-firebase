import Link from 'next/link';
import React from 'react';

const Orderplaced = () => {
	return (
		<div className=" w-full flex flex-col justify-center mb-16 gap-7 text-white">
			<div className="text-center underline pt-5 text-4xl">Order Placed</div>
			<div className="text-center pt-5 text-2xl">
				Your order has been placed successfully.
			</div>
			<div className="text-center pt-5 text-2xl">
				<Link href="Products">
					<p className="p-2 font-semibold px-5 cursor-pointer bg-indigo-900 mx-4 lg:mx-44 rounded-full hover:bg-indigo-600 transition-all ease-in-out duration-500">
						Shop More
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Orderplaced;
