'use client';

import { createContext, useContext } from 'react';

// Define the user type
interface User {
  id: string;
  email: string;
  name?: string;
}

// Define the type for your auth context
interface AuthContextType {
  user: User | null;
  login?: (email: string, password: string) => Promise<void>;
  logout?: () => void;
  isAuthenticated?: boolean;
}

// Create context with proper type
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Placeholder auth state - you'll implement this later
  const authValue: AuthContextType = {
    user: null,
    isAuthenticated: false,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
