import { useI18n as useNextInternationalI18n } from '@/locales/client'

// Fallback translations for landing pages
const fallbackTranslations = {
  en: {
    "HAIR TRANSPLANT IN TURKEY": "HAIR TRANSPLANT IN TURKEY",
    "ALL-INCLUSIVE HAIR TRANSPLANT IN TURKEY — EXPERT CARE, NATURAL RESULTS, NO HIDDEN COSTS.": "ALL-INCLUSIVE HAIR TRANSPLANT IN TURKEY — EXPERT CARE, NATURAL RESULTS, NO HIDDEN COSTS.",
    "BOOK YOUR FREE CONSULTATION": "BOOK YOUR FREE CONSULTATION",
    // Add more translations as needed
  },
  tr: {
    "HAIR TRANSPLANT IN TURKEY": "TÜRKIYE'DE SAÇ EKIMI",
    "ALL-INCLUSIVE HAIR TRANSPLANT IN TURKEY — EXPERT CARE, NATURAL RESULTS, NO HIDDEN COSTS.": "TÜRKIYE'DE KAPSAMLI SAÇ EKIMI — UZMAN BAKIM, DOĞAL SONUÇLAR, GIZLI MALIYET YOK.",
    "BOOK YOUR FREE CONSULTATION": "ÜCRETSIZ DANIŞMANLIK RANDEVUSU ALIN",
    // Add more translations as needed
  },
  fr: {
    "HAIR TRANSPLANT IN TURKEY": "GREFFE DE CHEVEUX EN TURQUIE",
    "ALL-INCLUSIVE HAIR TRANSPLANT IN TURKEY — EXPERT CARE, NATURAL RESULTS, NO HIDDEN COSTS.": "GREFFE DE CHEVEUX TOUT COMPRIS EN TURQUIE — SOINS EXPERTS, RÉSULTATS NATURELS, AUCUN COÛT CACHÉ.",
    "BOOK YOUR FREE CONSULTATION": "RÉSERVEZ VOTRE CONSULTATION GRATUITE",
    // Add more translations as needed
  },
  de: {
    "HAIR TRANSPLANT IN TURKEY": "HAARTRANSPLANTATION IN DER TÜRKEI",
    "ALL-INCLUSIVE HAIR TRANSPLANT IN TURKEY — EXPERT CARE, NATURAL RESULTS, NO HIDDEN COSTS.": "ALL-INCLUSIVE HAARTRANSPLANTATION IN DER TÜRKEI — EXPERTENPFLEGE, NATÜRLICHE ERGEBNISSE, KEINE VERSTECKTEN KOSTEN.",
    "BOOK YOUR FREE CONSULTATION": "BUCHE IHREN KOSTENLOSEN BERATUNGSTERMIN",
    // Add more translations as needed
  },
  it: {
    "HAIR TRANSPLANT IN TURKEY": "TRAPIANTO DI CAPELLI IN TURCHIA",
    "ALL-INCLUSIVE HAIR TRANSPLANT IN TURKEY — EXPERT CARE, NATURAL RESULTS, NO HIDDEN COSTS.": "TRAPIANTO DI CAPELLI TUTTO INCLUSO IN TURCHIA — CURA ESPERTA, RISULTATI NATURALI, NESSUN COSTO NASCOSTO.",
    "BOOK YOUR FREE CONSULTATION": "PRENOTA LA TUA CONSULENZA GRATUITA",
    // Add more translations as needed
  }
}

export function useI18n(locale?: string) {
  try {
    // Try to use the normal next-international hook
    return useNextInternationalI18n()
  } catch (error) {
    // If that fails, use fallback translations based on the provided locale
    const fallbackLocale = locale || 'en'
    const translations = fallbackTranslations[fallbackLocale as keyof typeof fallbackTranslations] || fallbackTranslations.en
    
    return (key: string) => {
      return translations[key as keyof typeof translations] || key
    }
  }
} 