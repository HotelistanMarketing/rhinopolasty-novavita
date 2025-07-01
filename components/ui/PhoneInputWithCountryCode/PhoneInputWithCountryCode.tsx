'use client'

import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import PhoneIcon from '@/public/icons/PhoneIcon';

interface CountryData {
  name: string;
  dialCode: string;
  countryCode: string;
  format: string;
}

interface PhoneInputWithCountryCodeProps {
  value: string;
  onChange: (phone: string) => void;
  onValidation?: (isValid: boolean) => void;
  inputWidthClass?: string;
}

const PhoneInputWithCountryCode: React.FC<PhoneInputWithCountryCodeProps> = ({ value, onChange, onValidation, inputWidthClass = 'w-full' }) => {
  const [country, setCountry] = useState('us');

  useEffect(() => {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=422275249a7e4de6ab10a264a99114f8&fields=geo')
      .then(res => res.json())
      .then(data => {
        setCountry(data.country_code2.toLowerCase());
      })
      .catch(reason => {
        console.error(reason);
        setCountry('us');
      });
  }, []);

  const handleOnChange = (phone: string, countryData: CountryData) => {
    if (onChange) {
      onChange(phone);
    }
    if (onValidation) {
      if (countryData.format) {
        const expectedLength = countryData.format.replace(/[^.]/g, '').length;
        const isValid = phone.length === expectedLength;
        onValidation(isValid);
      } else {
        onValidation(true); 
      }
    }
  };

  return (
    <div className={`flex flex-row items-center bg-white lg:rounded-[10px] rounded-[80px] px-4 gap-2 h-[44px] lg:h-[64px] border-none ${inputWidthClass}`}>
      <PhoneIcon />
      <PhoneInput
        country={country}
        value={value}
        onChange={handleOnChange}
        containerClass="w-full h-full"
        inputClass="flex-1 h-full text-[16px] leading-[19px] text-[#808080] font-normal bg-transparent !outline-none !border-none placeholder-[#808080] !w-full !h-full"
        buttonClass="!bg-transparent !border-none"
        dropdownClass="bg-white rounded-[10px]"
        searchClass="bg-gray-100"
        placeholder="Phone number"
      />
    </div>
  );
};

export default PhoneInputWithCountryCode; 