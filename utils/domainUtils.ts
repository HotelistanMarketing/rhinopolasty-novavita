// Utility functions for domain detection and conditional logic

export const getDomainPrice = (hostname?: string, pathname?: string): string => {
  // Default price
  const defaultPrice = '1990€';
  const folycurePrice = '2499€';
  
  // If no hostname provided (server-side), return default
  if (!hostname) {
    return defaultPrice;
  }
  
  // Check if we're on folycure.com domain (with or without www)
  if (hostname === 'folycure.com' || hostname === 'www.folycure.com') {
    // Check if we're on homepage (root path or locale root paths like /en, /tr, etc.)
    if (pathname) {
      // Normalize pathname by removing trailing slash
      const normalizedPath = pathname.replace(/\/$/, '');
      
      // Check for homepage patterns:
      // - Empty path (root)
      // - Locale paths like /en, /tr, /fr, /de, /it
      const isHomepage = normalizedPath === '' || /^\/[a-z]{2}$/.test(normalizedPath);
      
      if (isHomepage) {
        return folycurePrice;
      }
    }
  }
  
  return defaultPrice;
};

export const isFolycureDomain = (hostname?: string): boolean => {
  if (!hostname) {
    return false;
  }
  return hostname === 'folycure.com' || hostname === 'www.folycure.com';
};

export const isHomepage = (pathname?: string): boolean => {
  if (!pathname) {
    return false;
  }
  // Normalize pathname by removing trailing slash
  const normalizedPath = pathname.replace(/\/$/, '');
  return normalizedPath === '' || /^\/[a-z]{2}$/.test(normalizedPath);
}; 