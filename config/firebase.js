import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAtd7sGLlVCGLO40x7S8ys7rMFJ-uzPOgA',
	authDomain: 'e-commerce-128bf.firebaseapp.com',
	projectId: 'e-commerce-128bf',
	storageBucket: 'e-commerce-128bf.appspot.com',
	messagingSenderId: '292670234015',
	appId: '1:292670234015:web:d7da588c903f658cfef1aa',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
