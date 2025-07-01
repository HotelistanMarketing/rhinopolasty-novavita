import Image from "next/image";
import LinkedInIcon from "@/public/icons/LinkedInIcon";
import FacebookIcon from "@/public/icons/FacebookIcon";
import InstagramIcon from "@/public/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F2B6C] flex flex-col items-center py-16 px-4 relative">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/Logo/logo.png"
          alt="Folycure Logo"
          width={254}
          height={78}
          priority
        />
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 mb-8">
        <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#BFD2F8] transition">
          <LinkedInIcon  />
        </a>
        <a href="#" aria-label="Facebook" className="text-white hover:text-[#BFD2F8] transition">
          <FacebookIcon  />
        </a>
        <a href="#" aria-label="Instagram" className="text-white hover:text-[#BFD2F8] transition">
          <InstagramIcon />
        </a>
      </div>

      {/* Divider */}
      <div className="w-full max-w-5xl border-t border-[#BFD2F8] mb-6" />

      {/* Copyright */}
      <div className="text-[#FCFEFE] text-base font-work-sans text-center">
        © 2025 Folycure All Rights Reserved
      </div>
    </footer>
  );
} 