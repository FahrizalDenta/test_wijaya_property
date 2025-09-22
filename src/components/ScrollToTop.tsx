// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "scroll" ke bagian atas halaman setiap kali pathname berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponen ini tidak me-render apa pun ke DOM
};

export default ScrollToTop;