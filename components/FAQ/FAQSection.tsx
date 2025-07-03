'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { UiLink } from '@/utils';
import { useI18n } from '@/locales/client';

const FAQS = [
  {
    question: "WHAT IS RHINOPLASTY?",
    answer: "RHINOPLASTY, ALSO KNOWN AS A NOSE JOB, IS A SURGICAL PROCEDURE THAT RESHAPES THE NOSE FOR COSMETIC OR FUNCTIONAL REASONS. IT CAN CORRECT A VARIETY OF CONCERNS SUCH AS A DORSAL HUMP, WIDE NOSTRILS, OR BREATHING ISSUES CAUSED BY STRUCTURAL PROBLEMS.",
  },
  {
    question: "WHAT IS THE DIFFERENCE BETWEEN OPEN AND CLOSED RHINOPLASTY?",
    answer: "IN CLOSED RHINOPLASTY, ALL INCISIONS ARE MADE INSIDE THE NOSTRILS, LEAVING NO VISIBLE SCARS. OPEN RHINOPLASTY INVOLVES A SMALL INCISION ON THE COLUMELLA (THE TISSUE BETWEEN THE NOSTRILS), PROVIDING THE SURGEON WITH BETTER VISIBILITY AND ACCESS, ESPECIALLY FOR MORE COMPLEX CASES.",
  },
  {
    question: "AM I A GOOD CANDIDATE FOR RHINOPLASTY?",
    answer: "IDEAL CANDIDATES ARE IN GOOD GENERAL HEALTH, HAVE REALISTIC EXPECTATIONS, AND ARE UNHAPPY WITH THE SHAPE, SIZE, OR FUNCTIONALITY OF THEIR NOSE. A DETAILED CONSULTATION AND FACIAL ANALYSIS WILL DETERMINE IF RHINOPLASTY IS SUITABLE FOR YOU.",
  },
  {
    question: "HOW LONG DOES THE RHINOPLASTY SURGERY TAKE?",
    answer: "RHINOPLASTY SURGERY USUALLY TAKES BETWEEN 1.5 TO 3 HOURS, DEPENDING ON THE COMPLEXITY OF THE PROCEDURE AND WHETHER IT'S PRIMARY OR REVISION RHINOPLASTY.",
  },
  {
    question: "HOW LONG IS THE RECOVERY PERIOD?",
    answer: "INITIAL RECOVERY TAKES ABOUT 7–10 DAYS, DURING WHICH SWELLING AND BRUISING ARE COMMON. FULL RESULTS MAY TAKE UP TO A YEAR AS THE NOSE CONTINUES TO REFINE AND HEAL INTERNALLY.",
  },
  {
    question: "WILL I HAVE VISIBLE SCARS AFTER SURGERY?",
    answer: "WITH CLOSED RHINOPLASTY, NO EXTERNAL SCARS ARE VISIBLE. IN OPEN RHINOPLASTY, A SMALL INCISION IS MADE ON THE COLUMELLA, WHICH TYPICALLY HEALS WELL AND BECOMES BARELY NOTICEABLE OVER TIME.",
  },
  {
    question: "HOW MANY RHINOPLASTY SURGERIES HAS DR. CAN KALKAVAN PERFORMED?",
    answer: "OP. DR. CAN KALKAVAN HAS SUCCESSFULLY PERFORMED THOUSANDS OF RHINOPLASTY PROCEDURES OVER THE YEARS, COMBINING SURGICAL EXPERTISE WITH AN ARTISTIC APPROACH TO DELIVER NATURAL AND PERSONALIZED RESULTS.",
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
              src="/images/doctor-working-on-nose.jpg"
              alt="Doctor performing nose job"
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