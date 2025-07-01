"use client";
import React from 'react';
import Image from 'next/image';
import ConsultationIcon from '@/public/icons/consultation';
import HotelIcon from '@/public/icons/HotelIcon';
import MedicKitIcon from '@/public/icons/MedicKit';
import ReceitIcon from '@/public/icons/ReceitIcon';
import HairLossIcon from '@/public/icons/HairLossIcon';
import RouteIcon from '@/public/icons/RouteIcon';
import ChatSupportIcon from '@/public/icons/ChatSupportIcon';
import EmojInPhonIcon from '@/public/icons/EmojInPhonIcon';
import PlannerForm from '../PlannerForm/PlannerForm';
import { UiLink } from '@/utils';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { useI18n } from '@/locales/client';

const offerItems = [
    {
        id: 1,
        ImageComponent: <ConsultationIcon />,
        label: 'FREE ONLINE CONSULTATION WITH SPECIALISTS',
    },
    {
        id: 2,
        ImageComponent: <HotelIcon />,
        label: '4-STAR HOTEL ACCOMMODATION',
    },
    {
        id: 3,
        ImageComponent: <MedicKitIcon />,
        label: 'POST-OP MEDICATIONS & AFTERCARE INSTRUCTIONS',
    },
    {
        id: 4,
        ImageComponent: <ReceitIcon />,
        label: 'TRANSPARENT AND ALL-INCLUSIVE PRICING',

    },
    {
        id: 5,
        ImageComponent: <HairLossIcon />,
        label: 'NOSE ANALYSIS & PERSONALIZED TREATMENT PLAN',
    },
    {
        id: 6,
        ImageComponent: <RouteIcon />,   
        label: 'ALL TRANSFERS (AIRPORT-HOTEL-CLINIC)',
    },
    {
        id: 7,
        ImageComponent: <ChatSupportIcon />,
        label: 'INTERPRETER SUPPORT AVAILABLE',


    },
    {
        id: 8,
        ImageComponent: <EmojInPhonIcon />,
        label: '24/7 AFTERCARE SUPPORT',
    },
];

export default function WhatWeOfferSection() {
    const t = useI18n();

    return (
        <section className="w-full flex justify-center items-center bg-[#EAF5FB] lg:py-20 relative z-10 px-5 lg:px-0">
            <div className="container flex lg:flex-row flex-col-reverse  justify-between relative">
                {/* LEFT SIDE */}
                <div className="flex flex-col justify-start lg:justify-center px-5 lg:px-0 mt-8 lg:mt-0">
                    <h2 className="text-[#1F2B6C] font-semibold text-2xl lg:text-[52px] lg:leading-[62px] mb-2 lg:mb-4 mt-0 w-full text-center lg:text-left">{t("WHAT DO WE OFFER")}</h2>
                    <p className="text-black text-sm lg:text-[16px] leading-[19px] font-normal mb-8 max-w-[595px] text-center lg:text-left">
                        {t("WE ACCOMPANY YOU THROUGHOUT YOUR RHINOPLASTY JOURNEY IN ISTANBUL — FROM YOUR FIRST ONLINE CONSULTATION TO YOUR POST-OPERATIVE CARE. YOUR SATISFACTION, SAFETY, AND COMFORT ARE OUR TOP PRIORITIES.")}
                    </p>
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-8">
                        <div className="flex flex-col gap-3 lg:gap-8">
                            {offerItems.slice(0, 4).map((item) =>
                            { 
                                const { ImageComponent, label } = item;
                                return (
                                <div key={item.id} className="flex flex-row items-center gap-2 w-[272px] h-[48px]">
                                    <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#eaf5fb]">
                                        { ImageComponent }
                                    </div>
                                    <span className="text-black text-base lg:text-[20px] lg:leading-[24px] font-normal whitespace-normal">{t(label as keyof typeof import('@/locales/en').default)}</span>
                                </div>
                            )}
                            )}
                        </div>
                        <div className="flex flex-col gap-3 lg:gap-8">
                            {offerItems.slice(4).map((item) => {
                                const { ImageComponent } = item;
                                return (
                                    <div key={item.id} className="flex flex-row items-center gap-2 w-[235px] h-[48px]">
                                        <div className="w-[30px] h-[30px] flex items-center justify-center bg-[#eaf5fb]">
                                            {/* <Image src={item.image} alt={item.label} width={30} height={30} /> */}
                                            {ImageComponent}
                                        </div>
                                        <span className="text-black text-base lg:text-[20px] lg:leading-[24px] font-normal whitespace-normal">{t(item.label as keyof typeof import('@/locales/en').default)}</span>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                        <UiLink
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                            target='_blank'
                            className="lg:w-[578px] lg:h-[56px] mb-8 lg:mb-0 mt-4 lg:mt-12 bg-[#1F2B6C] text-white text-sm lg:text-[20px] font-semibold rounded-[50px] px-10 py-4 shadow-lg hover:bg-[#1A2550] transition-colors flex items-center justify-center"
                    >
                        {t("TAKE THE NEXT STEP")}
                    </UiLink>
                </div>
                {/* RIGHT SIDE FORM */}
                <div className="px-[14px] lg:px-0">
                    <div className="max-w-[545px] flex justify-start lg:justify-center flex-col items-start border rounded-[20px] rounded-tr-[100px] border-black px-[24px] lg:pl-[70px] lg:pr-[50px] py-[30px] lg:py-[64px] gap-3 lg:gap-5">
                        <div className="flex flex-row-reverse lg:flex-row items-center justify-center lg:justify-start lg:gap-5 mb-2">
                            <Image src="/flight-ticket-included.png" alt="Flight Ticket Included" width={95} height={95} />
                            <span className="text-[#1F2B6C] font-light text-2xl lg:font-medium lg:text-[40px] lg:leading-[47px]">{t("LET'S PLAN YOUR HAIR TRANSPLANT!")}</span>
                        </div>
                        <p className="text-black text-[16px] leading-[19px] font-normal max-w-[405px] mb-2">
                            {t("WHEN YOU CONTACT US, A MEDICAL ASSISTANT WILL CONTACT YOU AND ANSWER ALL OF YOUR QUESTIONS. WE'RE HERE TO HELP AND SUPPORT YOU EVERY STEP OF THE WAY")}
                        </p>
                        <PlannerForm inputWidthClass="lg:w-[405px]" className="w-full" />
                    </div>

                </div>
            </div>
        </section>
    );
} 