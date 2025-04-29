'use client';

export function getClientCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return undefined;
}

export function setClientCookie(
  name: string,
  value: string,
  options?: {
    maxAge?: number;
    path?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
  }
) {
  if (typeof document === 'undefined') return;
  
  const path = options?.path || '/';
  const secure = options?.secure ?? (window.location.protocol === 'https:');
  const sameSite = options?.sameSite || 'lax';
  
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}`;
  
  if (options?.maxAge !== undefined) {
    cookie += `; max-age=${options.maxAge}`;
  }
  
  if (secure) {
    cookie += '; secure';
  }
  
  cookie += `; samesite=${sameSite}`;
  
  document.cookie = cookie;
}

export function deleteClientCookie(name: string, path: string = '/') {
  if (typeof document === 'undefined') return;
  
  document.cookie = `${encodeURIComponent(name)}=; path=${path}; max-age=-1`;
}