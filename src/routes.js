import React, {lazy} from 'react';

  const layouts=lazy(() => import('./layouts/Layout'))
  export const routes = [
    {
      exact: true,
      path: '/',
      element: layouts
    },
    {
      exact: true,
      path: '/all_books',
      element: layouts
    },
    {
      exact: true,
      path: '/my_favorite_books',
      element: layouts
    },
    {
      exact: true,
      path: '/book_details',
      element: layouts
    },

  
    
  
    
    
  ];
  
  export default routes;