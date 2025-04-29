// providers/AppProviders.tsx
'use client';

import { AppProvider } from '@/context/AppContext';

export function AppProviders({ 
  children,
  theme,
  user
}: { 
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  user?: any;
}) {
  return (
    <AppProvider initialTheme={theme} initialUser={user}>
      {children}
    </AppProvider>
  );
}