import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [stateLoading, setStateLoading] = useState('');
  return (
    <AuthContext.Provider value={{ stateLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
