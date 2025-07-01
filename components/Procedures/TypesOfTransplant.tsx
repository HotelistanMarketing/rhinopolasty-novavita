"use client";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import Image from 'next/image';
import { useI18n } from '@/locales/client';

export default function TypesOfTransplant() {
  const t = useI18n();

  const procedures = [
    {
      title: t("FUE HAIR TRANSPLANT"),
      description: t("FUE (FOLLICULAR UNIT EXTRACTION) IS A MODERN HAIR TRANSPLANT METHOD THAT INVOLVES HARVESTING INDIVIDUAL FOLLICLES AND IMPLANTING THEM INTO THE BALDING AREAS, ENSURING A NATURAL AND SCAR-FREE RESULT."),
      image: '/images/fue-hair-transplant.png',
      alt: t("FUE HAIR TRANSPLANT"),
    },
    {
      title: t("DHI HAIR TRANSPLANT"),
      description: t("DHI (DIRECT HAIR IMPLANTATION) USES A SPECIAL IMPLANTER PEN TO PLACE THE HAIR FOLLICLES DIRECTLY WITHOUT THE NEED TO OPEN CHANNELS. IT ALLOWS FOR HIGHER DENSITY AND PRECISION."),
      image: '/images/dhi-hair-transplant.png',
      alt: t("DHI HAIR TRANSPLANT"),
    },
    {
      title: t("BEARD TRANSPLANT"),
      description: t("BEARD TRANSPLANT RESTORES PATCHY OR THIN FACIAL HAIR BY TRANSFERRING HEALTHY HAIR FOLLICLES TO THE BEARD AREA. IDEAL FOR A FULLER, MORE DEFINED LOOK."),
      image: '/images/beard-transplant.png',
      alt: t("BEARD TRANSPLANT"),
    },
    {
      title: t("EYEBROW TRANSPLANT"),
      description: t("EYEBROW TRANSPLANT ENHANCES OR RECONSTRUCTS SPARSE EYEBROWS WITH NATURAL HAIR FOLLICLES FOR A SYMMETRICAL AND LONG-LASTING RESULT."),
      image: '/images/eyebrow-transplant.png',
      alt: t("EYEBROW TRANSPLANT"),
    },
  ];

  return (
    <section className="bg-[#EAF5FB] lg:py-12 px-4 lg:px-0">
      <h2 className="text-center text-[#02163B] font-rubik font-bold text-2xl lg:text-5xl mb-[27px] lg:mb-12">
        {t("TYPES OF")} <br className="block lg:hidden" /> {t("HAIR TRANSPLANT PROCEDURES")}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] lg:max-w-[1320px] mx-auto">
        {procedures.map((proc, idx) => (
          <div
            key={proc.title}
            className="relative grid grid-cols-2 lg:flex flex-row rounded-none overflow-hidden h-[327px] lg:h-[275px]"
          >
            {/* Image Side */}
            <div className="relative lg:w-[315px] lg:h-[275px] flex-shrink-0 ">
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