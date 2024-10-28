"use client"

import React,{ useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.getElementById('my_portal')!) : null;
};

export default Portal;