import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import AuthContextProvider from './features/auth/contexts/AuthContext';
import "react-toastify/dist/ReactToastify.css";
import MyOrderPage from './pages/customer/auth/MyOrderPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <AuthContextProvider>
  //   <App />
  // </AuthContextProvider>
  // </React.StrictMode>
  <MyOrderPage />
);
