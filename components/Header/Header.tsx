'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LangPicker from '../LangPicker';
import MobileMenu from '../MobileMenu/MobileMenu';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { useI18n } from '@/locales/client';

interface HeaderProps {
  hideLangPicker?: boolean;
}

export default function Header({ hideLangPicker = false }: HeaderProps) {
  const t = useI18n();

  const navLinks = [
    { name: t("WHY NOVA FORMA"), href: '#why-folycure' },
    { name: t("BEFORE & AFTER"), href: '#before-after' },
    { name: t("YOUR JOURNEY"), href: '#your-journey' },
    { name: t("HAPPY PATIENTS"), href: '#happy-patients' },
    { name: t("CONTACT US"), href: '#contact-us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-[#1A2550] text-white w-full shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-[22px] md:py-3 px-[24px] md:px-4">
        <Link href="/" className='relative md:w-[188px] md:h-[58px] w-[133px] h-[33px]'>
          <Image src="/Logo/logo.svg" alt="Nova Forma Logo" fill priority />
        </Link>
        <div className='flex items-center'>
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#F9C06A] transition-colors font-semibold text-base"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Link
           href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          className="w-[242px] h-[45px] bg-primaty text-[#1A2550] px-4 py-2 rounded-[50px] font-semibold mx-[22px] hover:bg-[#eab75a] transition-colors hidden md:flex items-center justify-center"
          target='_blank'
          >
           <span className='text-[16px]'>{t("MAKE AN APPOINTMENT")}</span>
          </Link>
          {!hideLangPicker && <LangPicker />}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
} 