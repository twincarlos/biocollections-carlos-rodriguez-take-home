'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePopup } from './PopupContext';
import { useModal } from './ModalContext';
import SuccessMessage from '@/app/components/SuccessMessage/SuccessMessage';
import ErrorMessage from '@/app/components/ErrorMessage/ErrorMessage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const { setPopupContent } = usePopup();
  const { setModalContent } = useModal();

  useEffect(() => {
    (async () => {
      const session = await getSession();
      setUser(session);
    })();
  }, []);

  async function getSession() {
    try {
      const res = await fetch('http://localhost:8000/auth/me', {
        method: 'GET',
        credentials: 'include'
      });

      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }

  async function login({email, password}) {
    const res = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();

    if (!res.ok) {
      setPopupContent(<ErrorMessage message={result.message || 'Login failed'} />);
      return;
    }

    setModalContent(null);
    setPopupContent(<SuccessMessage message="Successfully logged in!" />);
    setTimeout(() => setPopupContent(null), 5000);
    setUser(result);
  }

  async function logout() {
    const res = await fetch('http://localhost:8000/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    const result = await res.json();

    if (!res.ok) {
      setPopupContent(<ErrorMessage message={result.message || 'Logout failed'} />);
      return;
    }

    setModalContent(null);
    setPopupContent(<SuccessMessage message="Successfully logged out!" />);
    setTimeout(() => setPopupContent(null), 5000);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
