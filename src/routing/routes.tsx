import ErrorPage from '@/pages/ErrorPage';
import GameDetailPage from '@/pages/GameDetailPage';
import HomePage from '@/pages/HomePage';
import Layout from '@/pages/Layout';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/games/:id', element: <GameDetailPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
