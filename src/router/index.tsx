import { createHashRouter } from 'react-router-dom';
import App from '@/app';
import Layout from '@/components/layout/layout';
import CommentsPage from '@/pages/comments';
import HomePage from '@/pages/home';
import ProductCardsPage from '@/pages/product-cards';
import TestPage from '@/pages/test';
import { PAGES_MAP } from './paths';

export const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: PAGES_MAP.home.path,
          element: <HomePage />,
        },
        {
          element: <Layout />,
          children: [
            {
              index: true,
              path: PAGES_MAP.comments.path,
              element: <CommentsPage />,
            },
            // {
            //   path: PAGES_MAP.test,
            //   element: <TestPage />,
            // },
            {
              path: PAGES_MAP.productCards.path,
              element: <ProductCardsPage />,
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
