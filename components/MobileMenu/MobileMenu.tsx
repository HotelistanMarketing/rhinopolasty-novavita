'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BugerIcon from '@/public/icons/Buger';
import CrossIcon from '@/public/icons/Cross';
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/constants/ContactInformation';
import { useI18n } from '@/locales/client';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useI18n();

    const navLinks = [
        { name: t("WHY NOVA FORMA"), href: '#why-folycure' },
        { name: t("BEFORE & AFTER"), href: '#before-after' },
        { name: t("YOUR JOURNEY"), href: '#your-journey' },
        { name: t("HAPPY PATIENTS"), href: '#happy-patients' },
        { name: t("CONTACT US"), href: '#contact-us' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        toggleMenu(); // Close mobile menu after clicking
    };

    return (
        <div className="md:hidden ml-4 flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
                {
                    !isOpen ? (
                        <BugerIcon className="w-6 h-6 text-white" />
                    ) : (
                        <CrossIcon className="w-[21px] h-[21px] text-white" />
                    )
                }


            </button>

            <div
                className={`fixed top-[85px] right-0 h-full bg-[#BFD2F8] w-full transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="focus:outline-none">
                       
                    </button>
                </div> */}
                <nav className="flex flex-col items-center justify-center p-4 space-y-6 mt-[73px]">
                    {navLinks.map(link => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className="text-[#1F2B6C] text-xl font-semibold hover:text-[#F9C06A] text-center" 
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <div className='w-full flex justify-center px-[40px]'>
                    <Link 
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} 
                    target='_blank'
                    className="mt-4 w-full text-center bg-secondary-blue text-white px-[38px] py-3 rounded-[50px] font-medium text-base hover:bg-[#eab75a] transition-colors" 
                    onClick={toggleMenu}
                    >
                        {t("BOOK YOUR FREE CONSULTATION")}
                    </Link>

                </div>
            </div>
            {isOpen && <div className="fixed top-0 left-0 w-full h-full bg-transparent opacity-50 z-40" onClick={toggleMenu}></div>}
        </div>
    );
}
