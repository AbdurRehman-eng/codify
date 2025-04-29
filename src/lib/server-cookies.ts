import 'server-only'
import { cookies } from 'next/headers';

export async function getCookie(name: string): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}

export async function setCookie(
  name: string,
  value: string,
  options?: {
    maxAge?: number;
    path?: string;
  }
): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set({
    name,
    value,
    ...options,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  });
}

export async function deleteCookie(name: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}