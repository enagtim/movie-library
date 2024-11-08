import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Movie from './pages/Movie/Movie';
import Favorites from './pages/Favorites/Favorites';
import SearchFilmPage from './pages/SearchFilmPage/SearchFilm';
import HeaderMenu from './layouts/HeaderMenu/HeaderMenu';
import { RequireAuth } from './helpers/RequireAuth';
import ErrorPage from './pages/Error/ErrorPage';
import { Provider } from 'react-redux';
import store from './store/store';
const router = createBrowserRouter([
	{
		path: '/',
		element: <HeaderMenu />,
		children: [
			{
				path: '/',
				element: <RequireAuth><SearchFilmPage /></RequireAuth>
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/movie/:id',
				element: <RequireAuth><Movie /></RequireAuth>
			},
			{
				path: '/favorites',
				element: <RequireAuth><Favorites /></RequireAuth>
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage />
	}
]);
const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</StrictMode>
	);
}