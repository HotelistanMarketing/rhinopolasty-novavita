'use client';

import { useState, useEffect } from 'react';

export const useDomain = () => {
  const [isFolycureDomain, setIsFolycureDomain] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDomain = () => {
      const hostname = window.location.hostname;
      setIsFolycureDomain(hostname === 'folycure.com');
      setIsLoading(false);
    };

    checkDomain();
  }, []);

  return { isFolycureDomain, isLoading };
}; 