import React, { createContext, useState, useEffect } from 'react';
import { clearToken, getToken } from '../../../utils/local-storage';
import * as authApi from '../../../api/auth';
import * as userApi from '../../../api/user';
import { toast } from 'react-toastify';
import { storeToken } from '../../../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getToken()) {
      (async () => {
        try {
          const res = await authApi.fetchMe();
          const user = res.data.user;

          const resProfile = await userApi.getUserProfile();
          const userProfile = resProfile.data.userProfile;
          user.userProfile = userProfile;
          console.log('FROM AUTHCONTEXT', user);
          setAuthUser(user);
        } catch (err) {
          toast.error(err.response?.data.message);
        } finally {
          setInitialLoading(false);
        }
      })();
    } else {
      setInitialLoading(false);
    }
  }, []);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.user);
    storeToken(res.data.token);
  };
  const registerAdmin = async (user) => {
    const res = await authApi.registerAdmin(user);
  };

  const login = async (credential) => {
    const res = await authApi.login(credential);
    // console.log(res);
    setAuthUser(res.data.user);
    storeToken(res.data.token);
  };

  const logout = () => {
    setAuthUser(null);
    clearToken();
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        registerAdmin,
        logout,
        authUser,
        initialLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
