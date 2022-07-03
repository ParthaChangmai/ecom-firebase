import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { AuthContextProvider } from '../context/AuthContext';
import '../styles/globals.css';
import ProtectedRoute from '../components/ProtectedRote';

const noAuthRequired = ['/Login', '/Signup'];

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<AuthContextProvider>
			<Layout>
				{noAuthRequired.includes(router.pathname) ? (
					<Component {...pageProps} />
				) : (
					<ProtectedRoute>
						<Component {...pageProps} />
					</ProtectedRoute>
				)}
			</Layout>
		</AuthContextProvider>
	);
}

export default MyApp;
