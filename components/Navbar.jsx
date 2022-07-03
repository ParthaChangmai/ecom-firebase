import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';
import { BsFillCartFill, BsFillCartCheckFill } from 'react-icons/Bs';
import { AiOutlineClose } from 'react-icons/Ai';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
	const { user, logOut } = useAuth();
	const router = useRouter();

	const [scrollPos, setScrollPos] = useState(false);

	const handleLogout = () => {
		logOut();
		router.push('/Login');
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setScrollPos(true);
			} else {
				setScrollPos(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		<>
			<div
				className={
					scrollPos
						? ' min-w-screen flex justify-between text-white bg-[#182647]/10 h-16 items-center font-bold '
						: ' min-w-screen flex justify-between text-white bg-[#182647]/10 h-16 items-center font-bold  shadow-md shadow-slate-300'
				}
			>
				<div className="flex container mx-auto justify-end">
					<div>
						<ul className="flex gap-3 pr-4 ">
							{user && (
								<li className="underline cursor-pointer" onClick={handleLogout}>
									Logout
								</li>
							)}

							<li>
								<BsFillCartFill className="mt-1  cursor-pointer" />
								<span className="top-4 right-12 text-xs absolute px-1 bg-blue-400 rounded-3xl">
									2
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
