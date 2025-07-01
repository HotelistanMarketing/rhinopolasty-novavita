'use client'

import React from 'react';
import { useI18n } from '@/locales/client';

interface NavigationButtonProps {
  direction: 'prev' | 'next';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const NavigationButton = React.forwardRef<HTMLButtonElement, NavigationButtonProps>(
  ({ direction, onClick, disabled = false, className = '', children }, ref) => {
    const t = useI18n();
    const baseClasses = 'w-12 h-12 flex items-center justify-center rounded-full bg-[#E6BF96] hover:bg-[#d1a97d] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed';
    
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${className}`}
        aria-label={`${direction === 'prev' ? t("PREVIOUS") : t("NEXT")} ${t("SLIDE")}`}
        type="button"
      >
        {children}
      </button>
    );
  }
);

NavigationButton.displayName = 'NavigationButton';

export default NavigationButton; 