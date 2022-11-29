import App from '@/App';
import Layout from '@/components/layout/Layout';
import CommentsPage from '@/pages/Comments';
import HomePage from '@/pages/Home';
import TestPage from '@/pages/Test';
import { createHashRouter } from 'react-router-dom';

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <HomePage />,
        },
        {
          element: <Layout />,
          children: [
            {
              index: true,
              path: 'comments',
              element: <CommentsPage />,
            },
            {
              path: 'test',
              element: <TestPage />,
            },
          ],
        },
      ],
    },
  ],
  {
    // basename: import.meta.env.BASE_URL,
  }
);
