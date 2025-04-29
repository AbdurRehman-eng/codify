'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { getClientCookie, setClientCookie, deleteClientCookie } from '@/lib/client-cookies';

interface AppState {
  theme: 'light' | 'dark';
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
}

interface AppContextType extends AppState {
  setTheme: (theme: 'light' | 'dark') => void;
  login: (userData: AppState['user']) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({
  children,
  initialTheme,
  initialUser
}: {
  children: React.ReactNode;
  initialTheme?: 'light' | 'dark';
  initialUser?: AppState['user'];
}) {
  const [state, setState] = useState<AppState>({
    theme: initialTheme || 'light',
    user: initialUser || null
  });

  // Sync with client-side cookies on mount
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    const cookieTheme = getClientCookie('theme') as AppState['theme'] | undefined;
    const cookieUser = getClientCookie('user');
    
    try {
      setState(prev => ({
        theme: cookieTheme || prev.theme,
        user: cookieUser ? JSON.parse(cookieUser) : prev.user
      }));
    } catch (error) {
      console.error('Error parsing user cookie:', error);
    }
  }, []);

  const setTheme = (theme: 'light' | 'dark') => {
    setClientCookie('theme', theme, { maxAge: 60 * 60 * 24 * 365 });
    setState(prev => ({ ...prev, theme }));
  };

  const login = (userData: AppState['user']) => {
    if (!userData) return;
    setClientCookie('user', JSON.stringify(userData), { maxAge: 60 * 60 * 24 });
    setState(prev => ({ ...prev, user: userData }));
  };

  const logout = () => {
    // If deleteClientCookie is available
    if (typeof deleteClientCookie === 'function') {
      deleteClientCookie('user');
    } else {
      setClientCookie('user', '', { maxAge: -1 }); // Expire immediately
    }
    setState(prev => ({ ...prev, user: null }));
  };

  return (
    <AppContext.Provider value={{ ...state, setTheme, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}