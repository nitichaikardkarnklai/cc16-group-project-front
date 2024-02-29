import React, { createContext, useState, useEffect } from 'react';
import { getToken } from '../../../utils/local-storage';
import * as authApi from "../../../api/auth"
import { toast } from 'react-toastify';

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
        }).finally(() => setInitialLoading(false))
    } else {
      setInitialLoading(false);
    }
  }, []);

  const register = async user => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    storeToken(res.data.token);
  };

  const login = async credential => {
    const res = await authApi.login(credential);
    if (res.data.user.deletedAt) {
      toast.error("user is inactive");
    } else {
      setAuthUser(res.data.user);
      storeToken(res.data.token);
      toast.success("Login Successfully");
    }
  }

  const logout = () => {
    setAuthUser(null);
    clearToken();
  }
  return <AuthContext.Provider value={{
    login,
    register
  }}>{children}</AuthContext.Provider>;
}
