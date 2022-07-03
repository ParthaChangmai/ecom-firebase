import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { AuthContextProvider } from '../context/AuthContext';
import { Provider } from 'react-redux';
import store from '../features/store';

import '../styles/globals.css';
import ProtectedRoute from '../components/ProtectedRote';

const noAuthRequired = ['/Login', '/Signup'];

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	return (
		<Provider store={store}>
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
		</Provider>
	);
}

export default MyApp;
