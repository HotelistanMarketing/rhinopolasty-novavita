'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { UiLink } from '@/utils';
import { useI18n } from '@/locales/client';

const FAQS = [
  {
    question: "IS A HAIR TRANSPLANT A LASTING SOLUTION, AND WHY MIGHT MULTIPLE SESSIONS BE NEEDED?",
    answer: "HAIR TRANSPLANTS ARE PERMANENT, USING FOLLICLES FROM THE 'SAFE DONOR AREA' AT THE BACK OF THE HEAD, RESISTANT TO BALDING. THIS PERMANENCE IS BASED ON DR. NORMAN ORENTRIECH'S 'DONOR DOMINANCE' THEORY, ENSURING TRANSPLANTED HAIR RETAINS ITS BALD-RESISTANT TRAITS. HOWEVER, TRANSPLANTS DON'T PREVENT FUTURE HAIR THINNING OR LOSS IN UNTREATED AREAS. ADDITIONAL SESSIONS MAY BE REQUIRED FOR LARGE BALDING AREAS, TO ENHANCE DENSITY, REFINE THE HAIRLINE, OR ADDRESS NEW HAIR LOSS. PARTICULARLY IN YOUNGER PATIENTS, ONGOING PATTERN BALDNESS MAY NECESSITATE FURTHER HAIR TRANSPLANTS FOR SUSTAINED APPEARANCE.",
  },
  {
    question: "HOW LONG IS THE RECOVERY PERIOD AFTER A HAIR TRANSPLANT?",
    answer: "RECOVERY TYPICALLY TAKES 7-10 DAYS. MOST PATIENTS CAN RETURN TO WORK WITHIN A WEEK, BUT FULL HEALING AND HAIR GROWTH TAKE SEVERAL MONTHS.",
  },
  {
    question: "ARE THE RESULTS OF A HAIR TRANSPLANT NATURAL-LOOKING?",
    answer: "YES, WHEN PERFORMED BY EXPERIENCED SURGEONS, TRANSPLANTED HAIR GROWS NATURALLY AND BLENDS SEAMLESSLY WITH EXISTING HAIR.",
  },
  {
    question: "WILL I NEED TO SHAVE MY HEAD FOR A HAIR TRANSPLANT?",
    answer: "NOT ALWAYS. SOME TECHNIQUES ALLOW FOR MINIMAL SHAVING, ESPECIALLY FOR SMALLER PROCEDURES OR CERTAIN HAIR TYPES.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const t = useI18n();

  return (
    <section className="w-full flex flex-col lg:flex-row justify-center items-center pb-[57px] pt-8 lg:py-24 bg-[#EAF5FB] relative overflow-hidden">
      <div className="container flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 max-w-[1256px]">
        {/* Left: FAQ Accordion */}
        <div className="flex flex-col gap-6 w-full max-w-[687px] px-[21px] lg:px-0">
          <h2 className="font-rubik font-semibold text-2xl lg:text-[48px] leading-[38px] lg:leading-[57px] text-[#1F2B6C] mb-2 w-full text-center lg:text-left">{t("FREQUENTLY ASKED QUESTIONS")}</h2>
          <div className="flex flex-col gap-4 w-full">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="w-full">
                <button
                  className={`w-full flex items-center justify-between px-8 py-4 rounded-[15px] transition-colors font-rubik font-bold text-base lg:text-[20px] leading-6 lg:leading-[24px] text-left ${openIndex === idx ? 'bg-[#1F2B6C] text-white' : 'bg-[#1F2B6C] text-white hover:bg-[#23337a]'} cursor-pointer`}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="pr-4">{t(faq.question as keyof typeof import('@/locales/en').default)}</span>
                  <span className="text-[40px] leading-[47px] font-bold select-none">{openIndex === idx ? '−' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="bg-transparent text-black rounded-b-[15px] px-8 py-6 font-rubik text-base lg:text-[20px] leading-6 lg:leading-[24px] shadow-md border-t border-[#EAF5FB]"
                  >
                    {t(faq.answer as keyof typeof import('@/locales/en').default)} 
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Right: Image and Button */}
        <div className="hidden lg:flex flex-col items-center justify-between h-[801px] min-w-[505px] max-w-[505px] relative ml-12">
          <div className="w-[505px] h-[713px] bg-[#D9D9D9] rounded-tr-[200px] rounded-br-none rounded-tl-none rounded-bl-none overflow-hidden relative flex items-center justify-center">
            <Image
              src="/images/doctor-scalp-dark-room.png"
              alt="Doctor performing hair transplant"
              fill
              className="object-cover object-center rounded-tr-[200px]"
              priority
            />
          </div>
          <UiLink
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target='_blank'
            className="mt-8 w-[505px] h-[56px] bg-[#E6BF96] rounded-[80px] flex items-center justify-center font-rubik font-semibold text-[20px] leading-[24px] text-black shadow-md hover:bg-[#d1a97d] transition-colors"
          >
            {t("MORE QUESTIONS? ASK US!")}
          </UiLink>
        </div>
      </div>
      {/* Mobile: Image and Button below accordion */}
      <div className="lg:hidden flex flex-col items-center w-full mt-4 lg:mt-8 px-[17px] lg:px-0">
        <div className="hidden lg:flexw-full max-w-[505px] h-[320px] bg-[#D9D9D9] rounded-tr-[80px] overflow-hidden relative items-center justify-center">
          <Image
            src="/images/doctor-scalp-dark-room.png"
            alt="Doctor performing hair transplant"
            fill
            className="object-cover object-center rounded-tr-[80px]"
            priority
          />
        </div>
        <button className="lg:mt-6 w-full max-w-[505px] h-[56px] bg-[#E6BF96] rounded-[80px] flex items-center justify-center font-rubik font-semibold text-sm lg:text-[20px] leading-[24px] text-black shadow-md hover:bg-[#d1a97d] transition-colors">
          {t("MORE QUESTIONS? ASK US!")}
        </button>
      </div>
    </section>
  );
} 