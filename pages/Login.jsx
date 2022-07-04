import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Login = () => {
	const router = useRouter();
	const { user, signIn } = useAuth();
	const [data, setData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await signIn(data.email, data.password);
			router.push('/Products');
		} catch (err) {
			setError(true);
			setTimeout(() => {
				setError(false);
			}, 1500);
		}
	};

	return (
		<div name="login" className="w-full flex justify-center items-center p-4">
			<div
				className={
					error
						? 'top-72 p-2 px-3 rounded-lg fixed ease-in-out duration-500 transition-all bg-red-500 text-white'
						: 'top-[-100%] p-2 px-3 rounded-lg fixed ease-in-out duration-1000 transition-all bg-red-500 text-white'
				}
			>
				Wrong email or password
			</div>

			<form
				method="POST"
				onSubmit={handleLogin}
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8 sm:pt-10">
					<p className="text-4xl font-bold inline border-b-4 border-[#6133f5] text-gray-300">
						Login
					</p>
					<p className="text-gray-300 py-4">
						Submit the form below to login to your account. Or click{' '}
						<Link className="cursor-pointer" href="/Signup">
							<a className="text-[#6133f5] font-bold underline">here</a>
						</Link>{' '}
						if a new user.
					</p>
				</div>
				<label className="text-gray-300 text-xl font-semibold pb-2">
					Email:
				</label>
				<input
					className="bg-[#ccd6f6] text-black p-2 outline-none rounded-lg  input input-bordered"
					type="email"
					name="email"
					placeholder="Email"
					required
					onChange={(e) =>
						setData({
							...data,
							email: e.target.value,
						})
					}
					value={data.email}
				/>
				<label className="text-gray-300 text-xl font-semibold pt-9 pb-2">
					Password:
				</label>
				<input
					className="mb-4 p-2 text-black bg-[#ccd6f6] outline-none  rounded-lg input input-bordered"
					type="password"
					name="password"
					placeholder="Password"
					required
					onChange={(e) =>
						setData({
							...data,
							password: e.target.value,
						})
					}
					value={data.password}
				/>

				<button
					type="submit"
					className="text-white border-2 btn btn-outline px-4 py-3 my-8 mx-auto flex items-center hover:bg-slate-50 hover:text-black duration-500 ease-in-out transition-all"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;
