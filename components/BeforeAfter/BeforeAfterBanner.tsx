'use client'

import React from 'react';
import Image from 'next/image';
import { UiLink } from '@/utils';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { useI18n } from '@/locales/client';

export default function BeforeAfterBanner() {
  const t = useI18n();

  return (
    <section className="w-full h-[112px] bg-primaty flex justify-center items-center py-0 relative">
      {/* <div className="absolute inset-0  w-full h-full z-0" /> */}
      <div className="container relative flex flex-col lg:grid grid-cols-3 w-full items-center mx-auto px-4 h-full" >
        {/* Before-After Image */}
        <div className="h-full relative">

      
          <Image
            src="/before-after-hair.png"
            alt="Before and After Hair"
           
            fill
            className="absolute !bottom-0 left-0 !right-auto !top-auto !h-[132px] !w-[487px]"
            
          />
        </div>
        {/* Text and Button */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full ml-8">
          <p className="text-[#232A5C] font-semibold text-[20px] mb-4 lg:mb-0">
            {t("THE NOSE YOU'VE BEEN DREAMING OF, AS CLOSE AS A FREE CONSULTATION.")}
          </p>
         
        </div>
        <UiLink
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target='_blank'
            className="h-[76px] flex items-center bg-[#232A5C] text-white text-[20px] font-semibold rounded-full px-8 py-4 ml-0 lg:ml-8 shadow-lg hover:bg-[#1A2550] transition-colors min-w-[320px] justify-center mt-4 lg:mt-0"
            style={{ gap: 12 }}
          >
           <Image src="/Whatsapp.png" alt="WhatsApp" width={46} height={44} />
            {t("START MAKING CHANGES")}
          </UiLink>
      </div>
    </section>
  );
} 