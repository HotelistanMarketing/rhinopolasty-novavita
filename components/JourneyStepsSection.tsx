"use client";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { UiImage, UiLink } from '@/utils';
import React from 'react';
import { useI18n } from '@/locales/client';

const steps = [
    {
        label: 'ONLINE CONSULTATION',
    },
    {
        label: 'ARRIVAL IN ISTANBUL',
    },
    {
        label: 'MEETING WITH YOUR MEDICAL TEAM',
    },
    {
        label: '3D NOSE DESIGN & PRE-OP TESTS',
    },
    {
        label: 'RHINOPLASTY PROCEDURE (OPEN OR CLOSED)',
    },
    {
        label: 'POST-OP CARE & INSTRUCTIONS',
    },
    {
        label: 'RECOVERY & SWELLING REDUCTION PROCESS',
    },
    {
        label: 'ENJOY YOUR NEW LOOK!',
    },
];

const JourneyStepsSection = () => {
    const t = useI18n();

    return (
        <section className="w-full flex flex-col items-center mt-[24px] lg:mt-0 lg:pt-24 relative overflow-x-hidden bg-[#EAF5FB] px-5 lg:px-0 pb-[24px] lg:pb-0">
            {/* Title */}
            <div className='container relative text-center flex justify-center items-center'>
                <h2 className="font-rubik font-semibold text-2xl lg:text-[52px] lg:leading-[62px] text-[#1F2B6C] text-center max-w-[779px] mb-2">
                    {t("YOUR RHINOPLASTY JOURNEY")} <br className='block lg:hidden' />
                </h2>
                <div className='hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[145px] h-[145px]'>
                    <UiImage src="/flight-ticket-included.png" alt="flight-ticket-included" width={145} height={145} />
                </div>
            </div>

            {/* Subtitle */}
            <p className="font-rubik text-base font-normal text-black text-center max-w-[295px] mb-[20px] lg:mb-16">
                {t("YOUR JOURNEY TO CONFIDENCE STARTS HERE")}
            </p>
            {/* Timeline */}
            <div className="w-full flex flex-col items-center">
                {/* Desktop Timeline - Hidden on Mobile */}
                <div className="hidden lg:block w-full lg:w-auto">
                    {/* Lines and Dots */}
                    <div className="relative w-full max-w-[1300px] flex flex-col items-center">
                        {/* Back Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black z-0" style={{ transform: 'translateY(-50%)' }} />
                        {/* Full Line (progress) */}
                        <div className="absolute top-1/2 left-0 h-0.5 bg-[#0028FF] z-10" style={{ width: '397px', transform: 'translateY(-50%)' }} />
                        {/* Dots */}
                        <div className="relative flex flex-row justify-between items-center w-full max-w-[1212px] mx-auto z-20">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center flex-1 min-w-0">
                                    <div className="w-[29px] h-[29px] rounded-full bg-[#E6BF96] shadow-md z-20" />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Labels */}
                    <div className="flex flex-row justify-between items-start w-full max-w-[1212px] mt-4">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-1 min-w-0">
                                <span className={`font-rubik font-semibold text-[16px] leading-[19px] text-center ${idx === 7 ? 'text-black' : 'text-[#02163B]'} max-w-[170px]`}>{t(step.label as keyof typeof import('@/locales/en').default)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline - Hidden on Desktop */}
                <div className="lg:hidden w-full">
                    <div className="relative flex flex-col py-6">
                        {/* Single vertical line for the whole timeline */}
                        <div className="absolute top-0 bottom-0 left-[15px] w-0.5 bg-black z-0" />
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-row items-start mb-8 last:mb-0 relative z-10">
                                {/* Timeline column */}
                                <div className="flex flex-col items-center w-8 min-w-[2rem]">
                                    {/* Dot */}
                                    <div className="w-[15px] h-[15px] rounded-full bg-[#E6BF96] shadow-md z-10" />
                                </div>
                                {/* Text column */}
                                <div className="pl-4 flex-1">
                                    <span className="font-rubik font-semibold text-[16px] leading-[19px] text-[#02163B] text-left">
                                        {t(step.label as keyof typeof import('@/locales/en').default)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Button */}
            <UiLink
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target='_blank'
                className="mt-4 lg:mt-16 px-16 py-4 bg-[#E6BF96] rounded-full font-rubik font-semibold text-[20px] leading-6 text-black shadow-md hover:bg-[#d1a97d] transition-all cursor-pointer"
            >
                {t("START MY JOURNEY")}
            </UiLink>
        </section>
    );
};

export default JourneyStepsSection; 