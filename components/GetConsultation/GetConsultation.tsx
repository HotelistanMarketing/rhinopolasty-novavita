"use client";
import React from 'react';
import Image from 'next/image';
import PlannerForm from '../PlannerForm/PlannerForm';
import Reviews from '../Testimonials/Reviews';
import { useI18n } from '@/locales/client';

const GetConsultation: React.FC = () => {
    const t = useI18n();
    
    return (
        <section className="relative w-full flex justify-center items-center bg-[#EAF5FB] px-[16px] lg:px-0 py-[50px] lg:py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between relative">
                {/* Left: Form Card */}
                <div className="relative z-10 flex flex-col items-start max-w-[583px] w-full bg-[#02163B] lg:border-[4px] lg:border-[#0028FF] rounded-tl-none rounded-tr-[100px] lg:rounded-tr-[200px] rounded-bl-none rounded-br-none px-6 lg:px-8 md:px-[50px] pt-[30px] pb-[40px] shadow-lg">
                    {/* Flight Ticket Badge */}
                    <div className="absolute -top-[33px] lg:-top-[60px] right-[5px] lg:right-4 w-[95px] h-[95px] md:w-[170px] md:h-[170px]">
                        <Image src="/flight-ticket-included.png" alt={t("FLIGHT TICKET INCLUDED")} fill className="object-contain" />
                    </div>
                    <h2 className="text-white font-rubik font-light lg:font-normal text-2xl lg:text-[40px] leading-[28px] lg:leading-[47px] mb-2 mt-4 md:mt-0">
                        {t("LET'S PLAN YOUR")} <br /> <span className="font-bold text-[30px] lg:text-[40px]">{t("HAIR TRANSPLANT!")}</span>
                    </h2>
                    <p className="text-white text-sm lg:text-[16px] leading-[19px] font-normal mb-3 lg:mb-6 max-w-[468px]">
                        {t("WHEN YOU CONTACT US, A MEDICAL ASSISTANT WILL CONTACT YOU AND ANSWER ALL OF YOUR QUESTIONS. WE'RE HERE TO HELP AND SUPPORT YOU EVERY STEP OF THE WAY")}
                    </p>
                    <PlannerForm inputWidthClass="w-full" className="w-full max-w-[484px]" />
                </div>
                {/* Right: Man Combing Hair Image */}
                <div className="hidden relative right-[-37px] lg:inline-block z-0 ">
                    <Image src="/images/man-combing.png" width={745} height={672} alt={t("MAN COMBING HAIR")} className="" quality={100} />
                    <div className="absolute left-0 bottom-0 z-20 w-full max-w-[630px] h-[167px] bg-white rounded-tr-[100px] flex items-center pl-10 pr-[64px] py-8 shadow-lg">
                        <Reviews wrapperClassNames="w-full flex-row justify-between" googleClassNames="!w-[244px] !h-[94px]" trustPilotClassNames="!w-[254px] !h-[106px]" />
                    </div>
                </div>
                {/* Reviews Card (bottom right) */}
            </div>
        </section>
    );
};

export default GetConsultation; 