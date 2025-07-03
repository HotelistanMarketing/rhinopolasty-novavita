'use client'

import React from 'react';
import { useI18n } from '@/locales/client';

export default function Offerings() {
  const t = useI18n();

  const offerings = [
    t("FREE CONSULTATION"),
    t("RHINOPLASTY / NOSE JOB"),
    t("SEPTORHINOPLASTY"),
    t("ETHNIC RHINOPLASTY"),
    t("PRP TREATMENT"),
    t("SAPPHIRE FUE"),
    t("DHI TECHNIQUE"),
    t("MAXIMUM GRAFT GUARANTEE"),
  ];

  return (
    <section className="bg-[#F5F7FB] py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">{t("WHAT DO WE OFFER")}?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {offerings.map((item) => (
            <div key={item} className="bg-white rounded-lg shadow p-5 text-center font-medium text-[#1A2550]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 