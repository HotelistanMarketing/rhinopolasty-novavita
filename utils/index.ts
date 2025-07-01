export { default as UiImage } from 'next/image';
export { default as UiLink } from 'next/link';

export const isFolycureDomain = (): boolean => {
  if (typeof window === 'undefined') {
    // Server-side rendering - check headers
    return false;
  }
  return window.location.hostname === 'folycure.com';
};

export { useDomain } from '@/hooks/useDomain';
export { getDomainPrice, isFolycureDomain as isFolycureDomainUtil, isHomepage } from '@/utils/domainUtils';