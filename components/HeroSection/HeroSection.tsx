"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BadgeIcon from '@/public/icons/BadgeIcon';
import { useI18n } from '@/locales/client';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { useDomain } from '@/hooks/useDomain';
import { getDomainPrice, isFolycureDomain } from '@/utils/domainUtils';

export default function HeroSection() {
  const t = useI18n();
  const { isLoading } = useDomain();

  /**
   * Determines the price to display based on domain and page location
   * - Shows 2499€ for folycure.com homepage only
   * - Shows 1990€ for all other domains and pages
   */
  const getPrice = () => {
    // Show default price while loading or during server-side rendering
    if (isLoading || typeof window === 'undefined') {
      return '1990€';
    }
    
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Debug logging
    console.log('HeroSection Debug:', {
      hostname,
      pathname,
      isFolycure: isFolycureDomain(hostname),
      normalizedPath: pathname.replace(/\/$/, ''),
      isHomepage: pathname.replace(/\/$/, '') === '' || /^\/[a-z]{2}$/.test(pathname.replace(/\/$/, ''))
    });
    
    return getDomainPrice(hostname, pathname);
  };

  return (
    <section className="h-[456px] lg:h-[472px] bg-[#1A2550] text-white pt-[27px] lg:pt-[58px] pb-[128px] relative overflow-hidden flex items-start lg:items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-[32px] lg:pl-[30px]">
        <div className="flex lg:flex-row flex-col max-w-xl relative z-20 ]">
          <div className='flex flex-col md:items-start items-center max-w-[410px] gap-2 text-center md:text-left'>
            <h1 className="text-2xl md:text-5xl font-semibold leading-tight text-primaty">{t("HAIR TRANSPLANT IN TURKEY")}</h1>
            <p className="text-sm md:text-base mb-4">{t("ALL-INCLUSIVE HAIR TRANSPLANT IN TURKEY — EXPERT CARE, NATURAL RESULTS, NO HIDDEN COSTS.")}</p>
            <div className="flex items-center gap-4">
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target='_blank'
                className="bg-secondary-blue text-white px-8 py-3 rounded-[50px] text-sm lg:text-[20px] font-semibold hover:bg-[#eab75a] transition-colors">{t("BOOK YOUR FREE CONSULTATION")}</Link>
            </div>

          </div>
          <div className='relative -translate-x-3 lg:translate-x-[-37px] translate-y-4 lg:translate-y-[-37px] flex md:linline-block justify-end w-min h-min'>
            <BadgeIcon className='lg:w-[155px] lg:h-[145px] w-[120px] h-[110px]' />
            <p className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-[10px] font-semibold flex flex-col items-center justify-center text-black'>
              <span className='text-[10px] font-semibold text-center whitespace-nowrap'>STARTING FROM</span>
              <span className='text-2xl lg:text-3xl font-semibold text-center'>{getPrice()}</span>
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 z-10">
          <Image
            src="/images/hero-pic.png"
            fill
            alt="Hair Transplant Surgery"
            className="rounded-lg shadow-lg z-10 object-cover object-[60%_0%] hidden lg:block"
            quality={100}
          />
          <Image
            src="/images/hero-image-mobile.png"
            fill
            alt="Hair Transplant Surgery"
            className="rounded-lg shadow-lg z-10 object-cover object-[60%_0%] block lg:hidden"
            quality={100}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2550]/90 to-transparent pointer-events-none" />
    </section>
  );
} 