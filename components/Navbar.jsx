import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillCartFill, BsFillCartCheckFill } from 'react-icons/Bs';

import { useAuth } from '../context/AuthContext';
import { changeCartStatus } from '../features/cartSlice';
import Link from 'next/link';

const Navbar = () => {
	const { user, logOut } = useAuth();
	const router = useRouter();
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const handleCartStatus = () => {
		dispatch(changeCartStatus(!cart.status));
	};
	const handleLogout = () => {
		logOut();
		router.push('/Login');
	};

	return (
		<>
			<div className="text-lg min-w-screen flex justify-between text-white bg-[#182647]/10 h-16 items-center font-bold  shadow-md shadow-slate-300">
				<div className="flex container mx-auto justify-between">
					<div>
						<Link href="Products">
							<h1 className="pl-5 cursor-pointer">ShopCart</h1>
						</Link>
					</div>
					<div>
						<ul className="flex gap-3 pr-4 ">
							{user && (
								<li className="underline cursor-pointer" onClick={handleLogout}>
									Logout
								</li>
							)}

							<li className={user ? 'flex' : 'hidden'}>
								{cart.cartItems?.length > 0 ? (
									<BsFillCartCheckFill
										onClick={handleCartStatus}
										className="mt-1  cursor-pointer"
									/>
								) : (
									<BsFillCartFill
										onClick={handleCartStatus}
										className="mt-1  cursor-pointer"
									/>
								)}

								{cart?.cartItems[0]?.quantity > 0 && (
									<span className="text-xs px-1 mb-2 bg-blue-400 rounded-full">
										{cart.cartItems[0].quantity}
									</span>
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
