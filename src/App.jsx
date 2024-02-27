import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import Router from './route';
import RegisterForm from './features/Auth/components/RegisterForm';

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        theme='colored'
        transition={Slide}
      />
    </>
  );
}

export default App;
