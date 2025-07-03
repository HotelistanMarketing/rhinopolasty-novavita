"use client";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { UiLink } from '@/utils';
import Image from 'next/image';
import { FC } from 'react';
import { useI18n } from '@/locales/client';

interface ComparisonRow {
    feature: string;
    folycure: boolean;
    otherClinic: boolean;
}

const FolycureComparison: FC = () => {
    const t = useI18n();

    const comparisonData: ComparisonRow[] = [
        { feature: t("4 STAR HOTEL"), folycure: true, otherClinic: true },
        { feature: t("VIP TRANSFER"), folycure: true, otherClinic: true },
        { feature: t("PERSONAL TRANSLATOR"), folycure: true, otherClinic: true },
        { feature: t("LATEST TECHNOLOGY USE"), folycure: true, otherClinic: false },
        { feature: t("GUARANTEE PROGRAM"), folycure: true, otherClinic: false },
        { feature: t("LASE THERAPY"), folycure: true, otherClinic: false },
        { feature: t("REGENERATIVE STEM CELL"), folycure: true, otherClinic: false },
        { feature: t("POST-OP FOLLOW UP TEAM"), folycure: true, otherClinic: false },
        { feature: t("PAIN-FREE ANESTHESIA"), folycure: true, otherClinic: false },
        { feature: t("STATE-OF-THE-ART CLINIC"), folycure: true, otherClinic: false },
    ];

    const CheckmarkIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const CrossIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    return (
        <section className="relative w-full py-20 bg-[#EAF5FB]">
            <div className="container mx-auto px-[35px] lg:px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Side - Image and Text */}
                    <div className="lg:w-1/2">
                        <div className="relative w-full h-[242px] lg:h-[434px] mb-[14px] lg:mb-[29px]">
                            <Image
                                src="/images/doctor-drawing-on-patient-head.png"
                                alt={t("DOCTOR DRAWING ON PATIENT HEAD")}
                                fill
                                className="object-cover rounded-tr-[200px] !hidden lg:!inline-block"
                            />
                            <Image
                                src="/images/doctor-on-scalp-of-man-drawing-mobile.png"
                                alt={t("DOCTOR DRAWING ON PATIENT HEAD MOBILE")}
                                fill
                                className="object-cover lg:!hidden !inline-block"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-2xl lg:text-5xl font-semibold text-[#1F2B6C] leading-tight">
                                {t("MAXIMUM GRAFT")} <br/> {t("MAXIMUM SATISFACTION")}
                            </h2>
                            <p className="text-sm lg:text-xl text-black leading-relaxed max-w-[530px]">
                                {t("OUR INTERNATIONALLY RECOGNIZED SURGEONS USE THE LATEST TECHNIQUES IN RHINOPLASTY TO DELIVER BALANCED, NATURAL-LOOKING NASAL AESTHETICS. AT OUR ADVANCED CLINIC, WE OFFER AFFORDABLE ALL-INCLUSIVE PACKAGES COVERING THE PROCEDURE, ACCOMMODATION, TRANSFERS, AND PERSONALIZED AFTERCARE.")}
                            </p>
                        </div>
                        <div className="flex justify-center mt-6 lg:mt-12 w-full">
                            <UiLink
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                                target='_blank'
                                className="bg-[#E6BF96] text-black font-semibold text-sm lg:text-xl px-16 py-4 rounded-full hover:bg-[#d4a97d] transition-colors w-full cursor-pointer text-center"
                            >
                                {t("START MY JOURNEY")}
                            </UiLink>
                        </div>
                    </div>

                    {/* Right Side - Comparison Table */}
                    <div className="lg:w-1/2">
                        {/* Header */}
                        <div className="flex justify-end mb-4 lg:mb-2">
                            <div className="flex gap-2 -rotate-90 lg:rotate-0 flex-col lg:flex-row justify-end lg:justify-start translate-x-[4px] lg:translate-x-0">
                                <div className="h-[49px] w-[115px] lg:w-[163px] lg:h-[72px] bg-[#1F2B6C] flex items-center justify-center ">
                                    <Image
                                        src="/Logo/logo.png"
                                        alt={t("FOLYCURE LOGO")}
                                        width={133}
                                        height={40}
                                        className="!w-[88px] !h-[27px] lg:!w-[133px] lg:!h-[40px]"
                                    />
                                </div>
                                <div className="h-[49px] w-[115px] lg:w-[163px] lg:h-[72px] bg-[#74B5CD] lg:bg-[#1F2B6C] flex items-center justify-center">
                                    <span className="text-white text-sm lg:text-xl">{t("OTHER CLINIC")}</span>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Rows */}
                        <div className="space-y-2">
                            {comparisonData.map((row, index) => (
                                <div key={index} className="flex justify-end">
                                    <div className="flex gap-2">
                                        <div className="w-[192px] lg:w-[317px] h-[57px] lg:h-[71px] bg-white flex items-center lg:px-8 ">
                                            <span className="text-[#1F2B6C] text-sm lg:text-xl whitespace-nowrap lg:whitespace-normal text-center lg:text-left w-full lg:w-auto">{row.feature}</span>
                                        </div>
                                        <div className="w-[49px] lg:w-[163px] h-[57px] lg:h-[71px] bg-white flex items-center justify-center">
                                            {row.folycure ? (
                                                <div className="w-8 h-8 bg-[#1F2B6C] rounded-full flex items-center justify-center">
                                                    <CheckmarkIcon />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 bg-[#CF0000] rounded-full flex items-center justify-center">
                                                    <CrossIcon />
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-[49px] lg:w-[163px] h-[57px] lg:h-[71px] bg-white flex items-center justify-center">
                                            {row.otherClinic ? (
                                                <div className="w-8 h-8 bg-[#1F2B6C] rounded-full flex items-center justify-center">
                                                    <CheckmarkIcon />
                                                </div>
                                            ) : (
                                                <div className="w-8 h-8 bg-[#CF0000] rounded-full flex items-center justify-center">
                                                    <CrossIcon />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}

            </div>
        </section>
    );
};

export default FolycureComparison; 