import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminHomePage from '../pages/admin-pages/AdminHomePage';
import CustomerContainer from '../layouts/CustomerContainer';
import LandingPage from '../pages/customer-pages/LandingPage';
import LaunchCalendarPage from '../pages/customer-pages/LaunchCalendarPage';
import NewArrivalsPage from '../pages/customer-pages/NewArrivalsPage';
import AccessoriesPage from '../pages/customer-pages/AccessoriesPage';
import MegaPage from '../pages/customer-pages/MegaPage';
import ProductPage from '../pages/customer-pages/ProductPage';
import SeriesPage from '../pages/customer-pages/SeriesPage';
import TopSellingPage from '../pages/customer-pages/TopSellingPage';
import LoginPage from '../pages/customer-pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomerContainer />,
    children: [
      { path: '', element: <LandingPage /> },
      { path: '/launchCalendar', element: <LaunchCalendarPage /> },
      { path: '/newArrivals', element: <NewArrivalsPage /> },
      { path: '/accessories', element: <AccessoriesPage /> },
      { path: '/mega', element: <MegaPage /> },
      { path: '/product', element: <ProductPage /> },
      { path: '/series', element: <SeriesPage /> },
      { path: '/topSelling', element: <TopSellingPage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },

  {
    path: '/admin',
    element: <AdminHomePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
