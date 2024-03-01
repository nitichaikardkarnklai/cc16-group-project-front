import React, { createContext, useState, useEffect } from 'react';
import { getToken } from '../../../utils/local-storage';
import * as authApi from "../../../api/auth"
import { toast } from 'react-toastify';
import { storeToken } from '../../../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchMe()
        .then(res => {
          setAuthUser(res.data.user)
        })
        .catch(err => {
          toast.error(err.response?.data.message);
          // setAuthUser(null);
        }).finally(() => setInitialLoading(false))
    } else {
      setInitialLoading(false);
    }
  }, []);

  const register = async user => {
    const res = await authApi.register(user);
    setAuthUser(res.data.user);
    storeToken(res.data.token);
  };

  const login = async credential => {
    const res = await authApi.login(credential);
    // console.log(res);
    setAuthUser(res.data.user);
    storeToken(res.data.token);
  }

  const logout = () => {
    setAuthUser(null);
    clearToken();
  }
  return <AuthContext.Provider value={{
    login,
    register,
    logout,
    authUser,
    initialLoading
  }}>{children}</AuthContext.Provider>;
}
