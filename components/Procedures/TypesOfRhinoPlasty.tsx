"use client";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import Image from 'next/image';
import { useI18n } from '@/locales/client';

export default function TypesOfTransplant() {
  const t = useI18n();

  const procedures = [
    {
      title: t("RHINOPLASTY / NOSE JOB"),
      description: t("RHINOPLASTY, COMMONLY KNOWN AS A NOSE JOB, IS A PROCEDURE THAT RESHAPES THE NOSE TO ENHANCE FACIAL HARMONY OR ADDRESS BREATHING ISSUES. WHETHER FOR COSMETIC OR MEDICAL PURPOSES, RHINOPLASTY CAN SIGNIFICANTLY IMPROVE BOTH APPEARANCE AND FUNCTION."),
      image: '/images/rhinoplasty-nosejob.png',
      alt: t("RHINOPLASTY / NOSE JOB"),
    },
    {
      title: t("CLOSED RHINOPLASTY"),
      description: t("CLOSED RHINOPLASTY IS A SURGICAL TECHNIQUE WHERE INCISIONS ARE MADE INSIDE THE NOSTRILS, LEAVING NO VISIBLE SCARS. THIS APPROACH IS GENERALLY RECOMMENDED FOR PATIENTS REQUIRING MINOR RESHAPING OR CORRECTION, SUCH AS BRIDGE REFINEMENT OR NOSTRIL ADJUSTMENT. IT TYPICALLY INVOLVES SHORTER RECOVERY TIMES AND LESS SWELLING."),
      image: '/images/Closed-Rhinoplasty.png',
      alt: t("CLOSED RHINOPLASTY"),
    },
    {
      title: t("SEPTORHINOPLASTY"),
      description: t("SEPTORHINOPLASTY COMBINES BOTH FUNCTIONAL AND AESTHETIC NASAL SURGERY. IT ADDRESSES NOT ONLY COSMETIC CONCERNS LIKE NASAL SHAPE BUT ALSO CORRECTS A DEVIATED SEPTUM TO IMPROVE BREATHING. THIS PROCEDURE IS IDEAL FOR PATIENTS EXPERIENCING BOTH STRUCTURAL AND AESTHETIC NASAL ISSUES."),
      image: '/images/Septorhinoplasty.png',
      alt: t("SEPTORHINOPLASTY"),
    },
    {
      title: t("ETHNIC RHINOPLASTY"),
      description: t("ETHNIC RHINOPLASTY FOCUSES ON ENHANCING THE NOSE WHILE PRESERVING THE PATIENT’S UNIQUE ETHNIC FEATURES. THIS PROCEDURE REQUIRES A TAILORED APPROACH THAT RESPECTS CULTURAL AESTHETICS AND INDIVIDUAL ANATOMY, OFFERING HARMONIOUS RESULTS WITHOUT COMPROMISING IDENTITY."),
      image: '/images/Ethnic-Rhinoplasty.png',
      alt: t("ETHNIC RHINOPLASTY"),
    },
    {
      title: t("BARBIE NOSE"),
      description: t("BARBIE NOSE RHINOPLASTY AIMS TO ACHIEVE A HIGHLY REFINED, LIFTED, AND SMALL NOSE TIP, OFTEN WITH A VERY DELICATE AND FEMININE CONTOUR. IT'S POPULAR AMONG THOSE SEEKING A DRAMATIC TRANSFORMATION THAT EMPHASIZES ELEGANCE AND FACIAL BALANCE."),
      image: '/images/barbie-nose.png',
      alt: t("BARBIE NOSE"),
    },
  ];

  return (
    <section className="bg-[#EAF5FB] lg:py-12 px-4 lg:px-0">
      <h2 className="text-center text-[#02163B] font-rubik font-bold text-2xl lg:text-5xl mb-[27px] lg:mb-12">
        {t("TYPES OF")} <br className="block lg:hidden" /> {t("RHINOPLASTY PROCEDURES")}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:max-w-[1320px] mx-auto">
        {procedures.map((proc, idx) => (
          <div
            key={proc.title}
            className="relative grid grid-cols-2 lg:flex flex-row rounded-none overflow-hidden h-[327px]"
          >
            {/* Image Side */}
            <div className="relative lg:w-[315px] flex-shrink-0 ">
              <Image
                src={proc.image}
                alt={proc.alt}
                fill
                className="object-cover"
                quality={100}
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-[#02163B]/30" />
            </div>
            {/* Text Side */}
            <div className="flex flex-col justify-between bg-[#E6BF96] rounded-tr-[60px] lg:rounded-tr-[100px] px-[12px] lg:px-5 py-[14px] lg:py-9 w-full">
              <div>
                <h3 className="font-rubik font-bold text-[#02163B] text-base lg:text-[20px] lg:text-2xl mb-2">
                  {proc.title}
                </h3>
                <p className="font-rubik text-[#02163B] text-base mb-4 leading-[17px]">
                  {proc.description}
                </p>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute lg:relative bottom-0 lg:bottom-auto left-0 lg:left-auto w-full flex items-center gap-3 bg-[#1F2B6C] hover:bg-[#23337d] transition-colors px-8 py-4  rounded-none lg:rounded-full lg:w-fit shadow-lg mt-auto"
              >
                <span className="relative w-[34px] h-[31px]">
                  <Image
                    src="/Whatsapp.png"
                    alt={t("WHATSAPP")}
                    fill
                    className="object-contain"
                  />
                </span>
                <span className="font-rubik font-semibold text-white text-base">
                  {t("ASK US VIA WHATSAPP")}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 