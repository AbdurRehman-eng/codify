// app/providers.tsx
import { AppProviders } from '@/providers/AppProviders';
import { getCookie } from '@/lib/server-cookies';

export async function ServerAppProviders({ children }: { children: React.ReactNode }) {
  const theme = await getCookie('theme') as 'light' | 'dark' | undefined;
  const userCookie = await getCookie('user');
  const user = userCookie ? JSON.parse(userCookie) : null;
  
  return (
    <AppProviders theme={theme} user={user}>
      {children}
    </AppProviders>
  );
}