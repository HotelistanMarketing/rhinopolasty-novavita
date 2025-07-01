'use client'

import React, { useState, useRef } from 'react';
import HumanAvatarIcon from '@/public/icons/HumanAvatarIcon';
import EmailIcon from '@/public/icons/EmailIcon';
import PhoneInputWithCountryCode from '../ui/PhoneInputWithCountryCode';
import { useI18n } from '@/locales/client';

interface PlannerFormProps {
  className?: string;
  inputWidthClass?: string;
  lead?: {
    LEAD_LANGUAGE: string;
    LEAD_DOCTOR: string;
  };
  procedure?: string;
}

// Function to convert locale code to full language name
const getLanguageName = (locale: string): string => {
  const languageMap: { [key: string]: string } = {
    'en': 'English',
    'tr': 'Turkish',
    'fr': 'French',
    'de': 'German',
    'it': 'Italian'
  };
  
  return languageMap[locale] || 'English'; // Default to English if locale not found
};

// Function to get current language from URL pathname
const getCurrentLanguageFromURL = (): string => {
  if (typeof window === 'undefined') return 'English'; // Server-side default
  
  const pathname = window.location.pathname;
  
  // Check for landing pages first
  if (pathname === '/hair-transplant-turkey') return 'English';
  if (pathname === '/sac-ekimi-turkiye') return 'Turkish';
  if (pathname === '/greffe-cheveux-turquie') return 'French';
  if (pathname === '/haartransplantation-turkei') return 'German';
  if (pathname === '/trapianto-capelli-turchia') return 'Italian';
  
  // Check for locale routes (homepage)
  const localeMatch = pathname.match(/^\/(en|tr|fr|de|it)(\/|$)/);
  if (localeMatch) {
    return getLanguageName(localeMatch[1]);
  }
  
  // Default fallback
  return 'English';
};

const PlannerForm: React.FC<PlannerFormProps> = ({ 
  className = '', 
  inputWidthClass = 'w-full',
  lead = { LEAD_LANGUAGE: 'en', LEAD_DOCTOR: 'Folycure' },
  procedure = 'Hair Transplant'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const contactFormRef = useRef<HTMLFormElement>(null);
  const t = useI18n();

  // Validation function
  const validateForm = () => {
    const newErrors: { name?: string; phone?: string; email?: string } = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Phone validation
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!isPhoneValid) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Email validation (optional but if provided, must be valid)
    if (email.trim() && !isValidEmail(email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Email validation helper
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Submit function
  const ContactFormCheckMandatory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    // Validate form before submission
    if (!validateForm()) {
      return false;
    }

    setIsSubmitting(true);

    try {
      const searchParm = new URLSearchParams(window.location.search);

      const utmSource = searchParm.get("utm_source");
      const utmMedium = searchParm.get("utm_medium");
      const utmKeyword = searchParm.get("utm_keyword");
      const utmMatchtype = searchParm.get("utm_matchtype");
      const utmNetwork = searchParm.get("utm_network");
      const gclid = searchParm.get("gclid");

      const currentLanguage = getCurrentLanguageFromURL();

      const data = {
        name: name.trim(),
        phone: phone,
        email: email.trim(),
        lead_source: "Google/Web Form",
        language: currentLanguage,
        source_language: lead.LEAD_LANGUAGE,
        ip: "",
        doctor: lead.LEAD_DOCTOR,
        interest: ["Hair Transplant"],
        procedure: [procedure],
        utm_source: utmSource ? utmSource : "",
        utm_medium: utmMedium ? utmMedium : "",
        utm_keyword: utmKeyword ? utmKeyword : "",
        utm_matchtype: utmMatchtype ? utmMatchtype : "",
        utm_network: utmNetwork ? utmNetwork : "",
        gclid: gclid ? gclid : "",
        lead_source_detail: "",
      };

      const response = await fetch(`https://zoho.hotelistan.net/api/form-patient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Clear form fields and errors only after successful submission
      setEmail("");
      setName("");
      setPhone("");
      setErrors({});

      // Show success modal instead of redirecting
      setShowSuccessModal(true);
    } catch (error) {
      console.error("API request failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Phone change handler
  const phoneChangeHandler = (phoneValue: string) => {
    setPhone(phoneValue);
    // Clear phone error when user starts typing
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  // Name change handler
  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // Clear name error when user starts typing
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: undefined }));
    }
  };

  // Email change handler
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear email error when user starts typing
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  // Button click handler as additional safeguard
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isSubmitting) {
      event.preventDefault();
      return;
    }
  };

  // Close modal handler
  const closeModal = () => {
    setShowSuccessModal(false);
  };

  // Check if form is valid for button state
  const isFormValid = name.trim() && phone.trim() && isPhoneValid && !isSubmitting;

  return (
    <>
      <form 
        ref={contactFormRef}
        className={`flex flex-col gap-2 lg:gap-5 mt-2 ${className}`}
        onSubmit={ContactFormCheckMandatory}
      >
        <div className="flex flex-col gap-1">
          <div className={`flex flex-row items-center bg-white lg:rounded-[10px] rounded-[80px] px-4 py-5 gap-2 h-[44px] lg:h-[64px] border-none ${inputWidthClass} ${errors.name ? 'border-2 border-red-500' : ''}`}>
            <HumanAvatarIcon />
            <input 
              type="text" 
              placeholder={t("FULL NAME")} 
              className="flex-1 text-[16px] leading-[19px] text-[#808080] font-normal bg-transparent outline-none border-none placeholder-[#808080]"
              value={name}
              onChange={nameChangeHandler}
              required
              maxLength={80}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs ml-4">{errors.name}</p>
          )}
        </div>
        
        <div className="flex flex-col gap-1">
          <PhoneInputWithCountryCode
            value={phone}
            onChange={phoneChangeHandler}
            onValidation={setIsPhoneValid}
            inputWidthClass={inputWidthClass}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs ml-4">{errors.phone}</p>
          )}
        </div>
        
        <div className="flex flex-col gap-1">
          <div className={`flex flex-row items-center bg-white lg:rounded-[10px] rounded-[80px] px-4 py-5 gap-2 h-[44px] lg:h-[64px] border-none ${inputWidthClass} ${errors.email ? 'border-2 border-red-500' : ''}`}>
            <EmailIcon />
            <input 
              type="email" 
              placeholder={t("EMAIL")} 
              className="flex-1 text-[16px] leading-[19px] text-[#808080] font-normal bg-transparent outline-none border-none placeholder-[#808080]"
              value={email}
              onChange={emailChangeHandler}
              maxLength={100}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs ml-4">{errors.email}</p>
          )}
        </div>

        {/* Hidden fields for tracking */}
        <input type="hidden" id="LEADCF40" name="LEADCF40" />
        <input type="hidden" id="zc_gad" name="zc_gad" />
        
        <button
          type="submit"
          className="bg-[#E6BF96] rounded-full lg:h-[56px] h-[49px] flex items-center justify-center text-sm lg:text-[20px] font-semibold text-black mt-2 transition-colors hover:bg-[#d1a97d] shadow w-full disabled:bg-gray-400 cursor-pointer"
          disabled={!isFormValid}
          onClick={handleButtonClick}
        >
          {isSubmitting ? "Submitting..." : t("GET A FREE CONSULTATION")}
        </button>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full text-center">
            <div className="mb-4">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Your consultation request has been submitted successfully. We will contact you soon to discuss your hair transplant journey.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-[#E6BF96] text-black font-semibold py-2 px-4 rounded-lg hover:bg-[#d1a97d] transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PlannerForm; 