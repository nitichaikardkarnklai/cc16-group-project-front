import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import Router from './route';
import Spinner from "./components/Spinner"
import useAuth from './hooks/use-auth';
import { Provider } from 'react-redux';
import store from "./store/slices"

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) return <Spinner />

  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
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
