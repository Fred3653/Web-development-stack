'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ initialSession, children }) => {
  const [session, setSession] = useState(initialSession);
  const [user, setUser] = useState(initialSession?.user ?? null);

  // Context를 통해 로그인 상태 제공
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