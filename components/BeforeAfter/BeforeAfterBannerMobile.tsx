'use client'

import { UiLink } from "@/utils";
import Image from "next/image";
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/constants/ContactInformation";
import { useI18n } from '@/locales/client';

export default function BeforeAfterBannerMobile() {
    const t = useI18n();

    return (
        <section className="md:hidden w-full flex flex-col items-center pt-6">
            {/* Headline */}
            <h2 className="text-[#1F2B6C] text-center font-rubik font-semibold text-base leading-[19px] uppercase px-4 mb-4">
                {t("THE HAIR YOU'VE BEEN DREAMING OF, AS CLOSE AS A FREE CONSULTATION")}
            </h2>
            <UiLink
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target='_blank'
                className=" h-[47px] flex items-center bg-[#232A5C] text-white tex-sm font-semibold rounded-full px-3 py-4 ml-0 lg:ml-8 shadow-lg hover:bg-[#1A2550] transition-colors justify-center lg:mt-0"
                style={{ gap: 12 }}
            >
                <Image src="/Whatsapp.png" alt="WhatsApp" width={28} height={28} />
                {t("START MAKING CHANGES")}
            </UiLink>
            {/* Image with beige background */}
            <div className="relative w-full flex items-end justify-center mt-[18px]">
                {/* Beige Rectangle */}
                <div className="absolute bottom-0 left-0 w-full h-[69px] bg-[#E6BF96] z-0" />

                {/* Before/After Image */}
                <div className="hidden relative z-10 w-[90%] max-w-xs h-[82px] items-end justify-center">
                    <Image
                        src="/before-after-hair.png"
                        alt="Before and After"
                        width={302}
                        height={82}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
