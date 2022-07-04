import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="bg-slate-900 min-h-screen flex flex-col justify-between ">
			<div className="top-0 left-0 sticky">
				<Navbar />
			</div>
			<div className="flex-grow flex container mx-auto">{children}</div>
		</div>
	);
};

export default Layout;
