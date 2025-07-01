"use client";
import React from 'react';
import Image from 'next/image';
import { useI18n } from '@/locales/client';

const features = [
  {
    title: 'AUTOMATED FOLLICLE COUNTING',
    desc: 'EMPLOYS ADVANCED IMAGE PROCESSING AND AI ALGORITHMS TO AUTOMATICALLY AND ACCURATELY COUNT EXTRACTED HAIR FOLLICLES, ELIMINATING THE TIME-CONSUMING AND ERROR-PRONE MANUAL PROCESS.'
  },
  {
    title: 'HIGH-SPEED COUNTING',
    desc: 'PROCESSES IMAGES QUICKLY, PROVIDING RAPID FOLLICLE COUNTS AND REDUCING PROCEDURE TIME.'
  },
  {
    title: 'PRECISE AND CONSISTENT RESULTS',
    desc: 'MINIMIZES HUMAN ERROR AND ENSURES CONSISTENT, OBJECTIVE COUNTS ACROSS ALL PROCEDURES, LEADING TO MORE PREDICTABLE OUTCOMES.'
  },
  {
    title: 'MULTI-FOLLICULAR UNIT RECOGNITION',
    desc: 'ACCURATELY IDENTIFIES AND COUNTS SINGLE, DOUBLE, TRIPLE, AND EVEN QUADRUPLE FOLLICULAR UNITS.'
  },
  {
    title: 'LIVE COUNTING DISPLAY',
    desc: 'DISPLAYS THE FOLLICLE COUNT IN REAL-TIME ON AN INTEGRATED SCREEN, PROVIDING IMMEDIATE FEEDBACK DURING THE EXTRACTION PROCESS.'
  },
];

export default function FolicountAISection() {
  const t = useI18n();

  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center bg-white md:py-0 relative overflow-hidden lg:min-h-[652px]">
      {/* Left: Image */}
      <div className="block w-[378px] h-[381px] lg:w-[701px] lg:h-[652px] relative flex-shrink-0">
        <Image
          src="/images/Folicount-ai-technologhy.png"
          alt="Folicount AI Technology"
          fill
          className="object-cover object-center rounded-none"
          priority
        />
      </div>
      {/* Right: Content */}
      <div className="w-full md:w-[735px] bg-[#02163B] flex flex-col justify-center px-8 lg:px-6 md:px-[30px] pt-[21px] pb-[46px] lg:py-10 md:pt-[63px] md:pb-[40px] relative z-10">
        {/* Logo/Icon and Title */}
        <div className="relative flex flex-row-reverse lg:flex-row items-center gap-3 mb-4 lg:mb-8 mt-2">
          <div className='relative w-[63px] h-[105px] flex-shrink-0'>
            <Image
              src="/images/FolyCountIcon.png"
              alt="Folicount Icon"
              fill
              className=""
              quality={100}
            />
          </div>
          <h2 className="font-rubik font-semibold text-[30px] md:text-[52px] leading-[38px] md:leading-[62px] text-primaty">
            {t("FOLICOUNT AI TECHNOLOGY")}
          </h2>
        </div>
        {/* Features List */}
        <ul className="space-y-5 mb-[24px] max-w-[630px]">
          {features.map((f, i) => (
            <li key={i} className="font-rubik text-white text-sm md:text-base font-normal">
              <span className="text-[#E6BF96] font-semibold">{t(f.title as keyof typeof import('@/locales/en').default)}:</span> {t(f.desc as keyof typeof import('@/locales/en').default)}
            </li>
          ))}
        </ul>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/" // TODO: Insert actual WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-[#1F2B6C] hover:bg-[#23337d] transition-colors px-8 py-4 lg:py-5 rounded-full w-fit shadow-lg mt-auto"
        >
          <div className='relative w-[28px] h-[28px] lg:w-[46px] lg:h-[44px]'>
            <Image
              src="/Whatsapp.png" // TODO: Add this icon to public/images
              alt="WhatsApp"
              fill
              className=""
            />
          </div>

          <span
            className="font-rubik font-semibold text-lg lg:text-[20px] leading-[24px] text-white"
          >
            {t("START MAKING CHANGES")}
          </span>
        </a>
      </div>
    </section>
  );
} 