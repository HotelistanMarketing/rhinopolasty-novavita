"use client";
import React from 'react';
import Image from 'next/image';
import PlannerForm from '../PlannerForm/PlannerForm';
import { useI18n } from '@/locales/client';

const CallToActionFormVariant3: React.FC = () => {
    const t = useI18n();
    
    return (
        <section className="w-full lg:h-[600px] px-4 lg:px-0 mb-10">
            {/* Left side - Form */}
            <div className='2xl:container relative flex lg:h-[600px] px-4 lg:px-0 mb-10 mx-auto'>
                <div className="relative w-[732px] h-full bg-[#02163B] flex flex-col items-start lg:px-[119px] lg:py-[61px] px-[24px] py-[30px] rounded-tr-[100px] lg:rounded-tr-none">
                    {/* Flight Ticket Badge */}
                    <div className="absolute -top-[33px] lg:-top-[60px] right-[5px] lg:right-4 w-[95px] h-[95px] md:w-[170px] md:h-[170px]">
                        <Image src="/flight-ticket-included.png" alt={t("FLIGHT TICKET INCLUDED")} fill className="object-contain" />
                    </div>
                    <h2 className="text-white font-rubik font-light lg:font-normal text-2xl lg:text-[40px] leading-[28px] lg:leading-[47px] mb-2 mt-4 md:mt-0">
                        {t("LET'S PLAN YOUR")} <br /> <span className="font-bold text-[30px] lg:text-[40px]">{t("RHINOPLASTY!")}</span>
                    </h2>
                    <p className="text-white text-sm lg:text-[16px] leading-[19px] font-normal mb-3 lg:mb-6 max-w-[468px]">
                        {t("WHEN YOU CONTACT US, A MEDICAL CONSULTANT WILL REACH OUT TO ANSWER ALL YOUR QUESTIONS AND HELP YOU ORGANIZE YOUR JOURNEY STEP-BY-STEP. WE’RE HERE TO ASSIST YOU AT EVERY STAGE — SAFELY AND PROFESSIONALLY.")}
                    </p>
                    <PlannerForm inputWidthClass="w-full" className="w-full max-w-[484px]" />
                </div>

                {/* <div className="relative w-[732px] h-full bg-[#02163B] flex flex-col items-start px-[119px] py-[61px]">
                <div className="absolute -top-4 lg:top-[-10px] right-[5px] lg:right-10 w-[145px] h-[145px] md:w-[170px] md:h-[170px]">
                    <Image src="/flight-ticket-included.png" alt="Flight Ticket Included" fill className="object-contain" />
                </div>
                <h2 className="text-white font-rubik  mb-[23px]">
                    <span className='text-[40px] leading-[47px]'>Let&apos;s Plan Your</span>
                    <br />
                    <span className='text-[50px] font-semibold leading-[47px]'>Hair Transplant!</span>

                </h2>
                <p className="text-[#C2C2C2] font-rubik text-base leading-[19px] mb-[23px] max-w-[517px]">
                    When you contact us, a medical assistant will contact you and answer all of your questions. We&apos;re here to help and support you every step of the way
                </p>
                <PlannerForm
                    className="w-full max-w-[534px] lg:!gap-4"
                    inputWidthClass="w-full bg-[#E2F3FF]"
                />
            </div> */}

                {/* Right side - Image */}
                <div className="hidden lg:inline-block w-[706px] h-full relative">
                    <Image
                        src="/images/man-looking-into-mirror.png"
                        alt={t("MAN LOOKING INTO MIRROR")}
                        fill
                        className="object-cover"
                        quality={100}
                    />
                </div>
            </div>

        </section>
    );
};

export default CallToActionFormVariant3; 