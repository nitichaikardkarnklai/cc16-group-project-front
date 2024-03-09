import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AdminHomePage from '../pages/admin/AdminHomePage';
import CustomerContainer from '../layouts/CustomerContainer';
import LandingPage from '../pages/customer/LandingPage';
import LaunchCalendarPage from '../pages/customer/LaunchCalendarPage';
import NewArrivalsPage from '../pages/customer/NewArrivalsPage';
import AccessoriesPage from '../pages/customer/AccessoriesPage';
import MegaPage from '../pages/customer/MegaPage';
import ProductPage from '../pages/customer/ProductPage';
import SeriesPage from '../pages/customer/SeriesPage';
import TopSellingPage from '../pages/customer/TopSellingPage';
import LoginPage from '../pages/customer/LoginPage';
import ProtectedRoute from '../features/auth/components/ProtectedRoute';
import CartPage from '../pages/customer/auth/CartPage';
import ManageAccountPage from '../pages/customer/auth/ManageAccountPage';
import MyAccountPage from '../pages/customer/auth/MyAccountPage';
import MyAddressPage from '../pages/customer/auth/MyAddressPage';
import MyOrderPage from '../pages/customer/auth/MyOrderPage';
import MyRewardPage from '../pages/customer/auth/MyRewardPage';
import TransactionPage from '../pages/customer/auth/TransactionPage';
import WishlistPage from '../pages/customer/auth/WishlistPage';
import ProtectedAdminRoute from '../features/auth/components/ProtectedAdminRoute';
import AdminContainer from '../layouts/AdminContainer';
import AdminCategoryMgtPage from '../pages/admin/AdminCategoryMgtPage';
import AdminLoginPage from '../pages/admin/AdminLoginPage';
import AdminChatPage from '../pages/admin/AdminChatPage';
import AdminProductMgtPage from '../pages/admin/AdminProductMgtPage';
import AdminTransactionMonitoringPage from '../pages/admin/AdminTransactionMonitoringPage';
import AdminTrendMgtPage from '../pages/admin/AdminTrendMgtPage';
import AdminCustomerMgtPage from '../pages/admin/AdminCustomerMgtPage';
import RedirectedIfAdminAuthenticated from '../features/auth/components/RedirectedIfAdminAuthenticated';
import TypesPage from '../pages/customer/TypesPage';
import UserContextProvider from '../features/user/contexts/UserContext';
import SettingAccountPage from '../pages/customer/auth/SettingAccountPage';
import NewAddressPage from '../pages/customer/auth/NewAddressPage';
import AdminAdminMgtPage from '../pages/admin/AdminAdminMgtPage';
import EditAddressPage from '../pages/customer/auth/EditAddressPage';
import ProductManageAdd from '../layouts/components/ProductManageAdd';
import ProductManageEdit from '../layouts/components/ProductManageEdit';
import PaymentResult from '../pages/customer/PaymentResult';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CustomerContainer />,
    children: [
      { path: '/', element: <LandingPage /> },
      { path: '/launch-calendar', element: <LaunchCalendarPage /> },
      { path: '/new-arrivals', element: <NewArrivalsPage /> },
      {
        path: '/accessories',
        element: <AccessoriesPage />,
        children: [
          { path: '', element: <AccessoriesPage /> },
          { path: ':accId', element: <AccessoriesPage /> },
        ]
      },
      {
        path: '/mega',
        element: <MegaPage />,
        children: [
          { path: '', element: <MegaPage /> },
          { path: ':megaId', element: <MegaPage /> },
        ]
      }
      ,
      { path: '/product', element: <ProductPage /> },
      { path: '/series/:seriesId', element: <SeriesPage /> },
      { path: '/top-selling', element: <TopSellingPage /> },
      { path: '/login', element: <LoginPage /> },
      {
        path: '/types',
        element: <TypesPage />,
        children: [
          { path: ':typesId', element: <TypesPage /> },
          { path: '', element: <TypesPage /> },
        ]
      },
      {
        path: '/',
        element: (
          <ProtectedRoute>
            <UserContextProvider>
              <Outlet />
            </UserContextProvider>
          </ProtectedRoute>
        ),
        children: [
          { path: '/my-account-page', element: <MyAccountPage /> },
          { path: '/cart-page', element: <CartPage /> },
          { path: '/manage-account-page', element: <ManageAccountPage /> },
          { path: '/my-account-page', element: <MyAccountPage /> },
          { path: '/my-address-page', element: <MyAddressPage /> },
          { path: '/add-address-page', element: <NewAddressPage /> },
          { path: '/edit-address-page', element: <EditAddressPage /> },
          { path: '/my-order-page', element: <MyOrderPage /> },
          { path: '/my-reward-page', element: <MyRewardPage /> },
          { path: '/transaction-page', element: <TransactionPage /> },
          { path: '/wishlist-page', element: <WishlistPage /> },
          { path: '/my-account-setting', element: <SettingAccountPage /> },
          { path: '/payment-result', element: <PaymentResult /> },
        ],
      },
    ],
  },
  {
    path: '/admin/login',
    element: (
      <RedirectedIfAdminAuthenticated>
        <AdminLoginPage />
      </RedirectedIfAdminAuthenticated>
    ),
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdminRoute>
        <UserContextProvider>
          <AdminContainer />
        </UserContextProvider>
      </ProtectedAdminRoute>
    ),
    children: [
      { path: '/admin', element: <AdminHomePage /> },
      {
        path: '/admin/admin-category-mgt-page',
        element: <AdminCategoryMgtPage />,
      },
      { path: '/admin/admin-chat-page', element: <AdminChatPage /> },
      {
        path: '/admin/admin-product-mgt-page',
        element: <AdminProductMgtPage />,
      },
      {
        path: '/admin/admin-transaction-monitoring-page',
        element: <AdminTransactionMonitoringPage />,
      },
      { path: '/admin/admin-trend-mgt-page', element: <AdminTrendMgtPage /> },
      {
        path: '/admin/admin-customer-mgt-page',
        element: <AdminCustomerMgtPage />,
      },
      { path: '/admin/admin-admin-mgt-page', element: <AdminAdminMgtPage /> },
      { path: '/admin/admin-product-add-form', element: <ProductManageAdd /> },
      { path: '/admin/admin-product-edit-form', element: <ProductManageEdit /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
