import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/customer-pages/LandingPage';
import AdminHomePage from '../pages/admin-pages/AdminHomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/admin',
    element: <AdminHomePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
