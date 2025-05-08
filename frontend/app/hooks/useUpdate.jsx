'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useModal } from '@/app/context/ModalContext';
import { usePopup } from '@/app/context/PopupContext';
import SuccessMessage from '../components/SuccessMessage/SuccessMessage';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export function useUpdate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { setModalContent } = useModal();
  const { setPopupContent } = usePopup();

  async function handleUpdate({ data, url, method, messageOnSuccess }) {
    setLoading(true);
    setError('');

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to update data');

      setModalContent(null);

      if (messageOnSuccess) {
        setPopupContent(<SuccessMessage message={messageOnSuccess} />);
        setTimeout(() => {
          setPopupContent(null);
        }, 5000);
      }
      
      router.replace(window.location.href);

      return res.json();
    } catch (err) {
      console.error(err);
      setError('Something went wrong.');
      setPopupContent(<ErrorMessage message={'Something went wrong.'} />);
      setTimeout(() => {
        setPopupContent(null);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return { handleUpdate, loading, error };
}
