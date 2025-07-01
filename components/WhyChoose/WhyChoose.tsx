"use client";
import React from 'react';
import HairTransplantIcon from '@/public/icons/HairTransplantIcon';
import YearsExperienceIcon from '@/public/icons/YearsExperience';
import FaceIcon from '@/public/icons/FaceIcon';
import DoctorIcon from '@/public/icons/DoctorIcon';
import { UiImage, UiLink } from '@/utils';
import { useI18n } from '@/locales/client';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';

export default function WhyChoose() {
  const t = useI18n();

  return (
    <section className="bg-[#eaf5fb] pt-[32px] lg:py-16 w-full mb-8 lg:mb-0">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:px-4 items-start overflow-hidden">
        {/* LEFT COLUMN */}
        <div className="flex-1 min-w-[350px] lg:max-w-[700px] max-w-full">
          <h2 className="w-full text-center lg:text-left text-[#232A5C] text-2xl lg:text-[52px] font-semibold leading-[1.1] mb-4">{t("WHY NOVA FORMA")}</h2>
          <p className="text-sm lg:text-[20px] text-black font-normal mb-6 text-center lg:text-left px-4 lg:px-0">
            {/* {t("OUR INTERNATIONALLY RECOGNIZED SURGEONS USE THE LATEST TECHNIQUES LIKE SAPPHIRE FUE AND DHI AT OUR ADVANCED CLINIC TO DELIVER NATURAL-LOOKING HAIR RESTORATION. WE OFFER AFFORDABLE ALL-INCLUSIVE PACKAGES COVERING THE PROCEDURE, ACCOMMODATION, TRANSFERS, AND AFTERCARE.")} */}
            {t("OUR INTERNATIONALLY RECOGNIZED SURGEONS USE THE LATEST TECHNIQUES IN RHINOPLASTY TO DELIVER BALANCED, NATURAL-LOOKING NASAL AESTHETICS. AT OUR ADVANCED CLINIC, WE OFFER AFFORDABLE ALL-INCLUSIVE PACKAGES COVERING THE PROCEDURE, ACCOMMODATION, TRANSFERS, AND PERSONALIZED AFTERCARE.")}
          </p>
          {/* <div className="flex-1 lg:hidden flex flex-row gap-4 lg:gap-8 w-full lg:max-w-[600px] text-center max-w-full overflow-x-scroll scrollba">
            <div className="bg-[#101C3D] rounded-2xl flex flex-row lg:flex-col items-center justify-center py-2 lg:py-[18px] lg:px-6 px-4 shadow-lg lg:h-[200px] w-[151px] lg:w-auto">
              <HairTransplantIcon className="lg:w-[62px] lg:h-[62px] w-[31px] h-[31px] max-w-[62px] max-h-[62px] mr-4 lg:mr-0" />
              <div className='flex flex-col items-center justify-start text-left lg:text-center'>
                <span className="text-white lg:text-[40px] text-[20px] font-bold leading-none mb-2 mt-[6px] w-full lg:w-auto">+10.000</span>
                <span className="text-white lg:text-[20px] text-sm font-normal">Successful Operations</span>
              </div>
            </div>
            <div className="bg-[#101C3D] rounded-2xl flex flex-row lg:flex-col items-center justify-center py-2 lg:py-[18px] lg:px-6 px-4 shadow-lg lg:h-[200px] w-[151px] lg:w-auto">
              <YearsExperienceIcon className="lg:w-[62px] lg:h-[62px] w-[31px] h-[31px] mr-4 lg:mr-0" />
              <div className='flex flex-col items-center justify-start text-left lg:text-center'>
                <span className="text-white lg:text-[40px] text-[20px] font-bold leading-none mb-2 mt-[6px] w-full lg:w-auto">+13</span>
                <span className="text-white lg:text-[20px] text-sm font-normal">Years Experience</span>
              </div>
            </div>
            <div className="bg-[#101C3D] rounded-2xl flex flex-row lg:flex-col items-center justify-center py-2 lg:py-[18px] lg:px-6 px-4 shadow-lg lg:h-[200px] w-[151px] lg:w-auto">
              <FaceIcon className="lg:w-[62px] lg:h-[62px] w-[31px] h-[31px] mr-4 lg:mr-0" />
              <div className='flex flex-col items-center justify-start text-left lg:text-center'>
                <span className="text-white lg:text-[40px] text-[20px] font-bold leading-none mb-2 mt-[6px] w-full lg:w-auto">Natural</span>
                <span className="text-white lg:text-[20px] text-sm font-normal">Hairline Results</span>
              </div>
            </div>
            <div className="bg-[#101C3D] rounded-2xl flex flex-row lg:flex-col items-center justify-center py-2 lg:py-[18px] lg:px-6 px-4 shadow-lg lg:h-[200px] w-[151px] lg:w-auto">
              <DoctorIcon className="lg:w-[62px] lg:h-[62px] w-[31px] h-[31px] mr-4 lg:mr-0" />
              <div className='flex flex-col items-center justify-start text-left lg:text-center'>
                <span className="text-white lg:text-[40px] text-[20px] font-bold leading-none mb-2 mt-[6px] w-full lg:w-auto">+50</span>
                <span className="text-white lg:text-[20px] text-sm font-normal">Expert Consultants</span>
              </div>
            </div>
          </div> */}
          {/* CERTIFICATIONS */}
          <div className="flex flex-row justify-center items-center gap-2 lg:gap-8 mb-4 lg:mb-8 flex-nowrap mt-4 lg:mt-0">
            {/* Replace src with your actual certification images */}
            <div className='lg:w-[92px] lg:h-[92px] w-[45px] h-[45px] flex items-center justify-center'>
              <UiImage src="/Logo_of_Ministry_of_Health.png" alt="Certification 1" className="object-contain" width={92} height={92} quality={100} />
            </div>
            <div className='lg:w-[151px] lg:h-[92px] w-[100px] h-[57px] flex items-center justify-center'>
              <UiImage src="/isaps-logo.png" alt="Certification 2" className=" object-contain" width={151} height={92} quality={100} />
            </div>
            <div className='lg:w-[151px] lg:h-[92px] w-[84px] h-[24px] flex items-center justify-center'>
              <UiImage src="/joint-commission-international-logo.png" alt="Certification 3" className=" object-contain" width={151} height={92} quality={100} />
            </div>
            <div className='lg:w-[151px] lg:h-[92px] w-[99px] h-[57px] flex items-center justify-center' >
              <UiImage src="/iso-logo.png" alt="Certification 4" className=" object-contain" width={151} height={92} quality={100} />
            </div>
          </div>
          {/* BUTTON */}
          <div className='flex justify-center lg:justify-start items-center px-4 lg:px-0'>
            <UiLink 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target='_blank'
            className="w-[calc(100%-20px)] lg:w-auto lg:mt-2 bg-[#232A5C] text-white text-sm lg:text-[20px] font-semibold rounded-[50px] px-10 py-4 shadow-lg hover:bg-[#1A2550] transition-colors ">
              {t("ASK US ANYTHING")}
            </UiLink>
          </div>

        </div>
        {/* RIGHT COLUMN */}
        <div className="flex-1 grid grid-cols-2 gap-2 lg:gap-8 w-full max-w-[600px] text-center px-4 lg:px-0">
          {/* Card 1 */}
          <div className="bg-[#101C3D] rounded-2xl flex flex-col items-center justify-center py-[18px] px-6 shadow-lg h-[200px]">
            <HairTransplantIcon className="w-[62px] h-[62px] max-w-[62px] max-h-[62px]" />
            <span className="text-white text-xl lg:text-[40px] font-bold leading-none mb-2 mt-[6px]">{t("+3000")}</span>
            <span className="text-white text-xl lg:text-[20px] font-normal">{t("SUCCESSFUL SURGERIES")}</span>
          </div>
          {/* Card 2 */}
          <div className="bg-[#101C3D] rounded-2xl flex flex-col items-center justify-center py-[18px] px-6 shadow-lg h-[200px]">
            <YearsExperienceIcon className="w-[62px] h-[62px] " />
            <span className="text-white text-xl lg:text-[40px] font-bold leading-none mb-2 mt-[6px]">{t("+13")}</span>
            <span className="text-white text-xl lg:text-[20px] font-normal">{t("YEARS EXPERIENCE")}</span>
          </div>
          {/* Card 3 */}
          <div className="bg-[#101C3D] rounded-2xl flex flex-col items-center justify-center py-[18px] px-6 shadow-lg h-[200px]">
            <FaceIcon className="w-[62px] h-[62px] " />
            <span className="text-white text-xl lg:text-[40px] font-bold leading-none mb-2 mt-[6px]">{t("NATURAL")}</span>
            <span className="text-white text-xl lg:text-[20px] font-normal">{t("LOOKING RESULTS")}</span>
          </div>
          {/* Card 4 */}
          <div className="bg-[#101C3D] rounded-2xl flex flex-col items-center justify-center py-[18px] px-6 shadow-lg h-[200px]">
            <DoctorIcon className="w-[62px] h-[62px] " />
            <span className="text-white text-xl lg:text-[40px] font-bold leading-none mb-2 mt-[6px]">{t("+50")}</span>
            <span className="text-white text-xl lg:text-[20px] font-normal">{t("EXPERT CONSULTANTS")}</span>
          </div>
        </div>
      </div>
    </section>
  );
} 