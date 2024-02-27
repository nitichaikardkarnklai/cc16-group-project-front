import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState('');
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
