import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiMenu } from 'react-icons/fi';
import { BsFillCartFill, BsFillCartCheckFill } from 'react-icons/Bs';
import { AiOutlineClose } from 'react-icons/Ai';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
	const { user, logOut } = useAuth();
	const router = useRouter();

	const [activeNav, setActiveNav] = useState(false);
	const [scrollPos, setScrollPos] = useState(false);

	const toggleNav = () => setActiveNav(!activeNav);

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
						? ' min-w-screen flex justify-between bg-[#182647]/10 h-16 items-center font-bold '
						: ' min-w-screen flex justify-between bg-[#182647]/10 h-16 items-center font-bold  shadow-md shadow-slate-300'
				}
			>
				<div className="flex container mx-auto justify-between">
					<div className={scrollPos ? 'invisible' : 'pl-4'}>username</div>
					<div>
						<ul className="hidden md:flex gap-3 pr-4 ">
							{user && <li onClick={handleLogout}>Logout</li>}

							<li>
								<BsFillCartFill className="mt-1" />
							</li>
						</ul>
						<div className="md:hidden pr-4 right-0">
							{!activeNav && (
								<FiMenu
									onClick={toggleNav}
									className={
										scrollPos
											? 'text-4xl text-white cursor-pointer p-2 bg-gray-900 rounded-full shadow-md shadow-indigo-600'
											: 'text-4xl text-white cursor-pointer p-2 bg-transparent '
									}
								/>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* mobile nav starts here */}

			<div
				className={
					activeNav
						? 'fixed flex flex-col h-screen justify-start left-0 top-0 w-full bg-gray-900  p-10 ease-in duration-500  '
						: 'fixed flex flex-col h-screen justify-start left-[-100%] top-0  p-10 ease-in duration-500  '
				}
			>
				<div className="flex justify-end ">
					<AiOutlineClose
						onClick={toggleNav}
						className="bg-gray-900 p-2 text-3xl rounded-full shadow-lg shadow-indigo-600 cursor-pointer"
					/>
				</div>
				<div className="pt-40">
					<ul className="gap-5 pr-4 flex flex-col items-center">
						<li className="text-2xl font-bold p-4 py-5 ease-in duration-100">
							Home
						</li>
						<li className="text-2xl font-bold p-4 py-5 ease-in duration-100">
							About Me
						</li>
						<li className="text-2xl font-bold p-4 py-5 ease-in duration-100">
							Portfolio
						</li>
						<li className="text-2xl font-bold p-4 py-5 ease-in duration-100">
							Contacts
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
