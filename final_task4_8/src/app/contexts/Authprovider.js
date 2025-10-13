'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ initialSession, children }) => {
  const [session, setSession] = useState(initialSession);
  const [user, setUser] = useState(initialSession?.user ?? null);

  useEffect(() => {
    setSession(initialSession);
    setUser(initialSession?.user ?? null);
  }, [initialSession]);
  
  const value = { 
    session,
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a SupabaseAuthProvider');
  }
  return context;
};