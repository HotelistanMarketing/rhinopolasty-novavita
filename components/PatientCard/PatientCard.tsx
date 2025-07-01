import React from 'react';
import { Patient } from '../../types/patient';
import PlayIcon from '../../public/icons/PlayIcon';
import { UiImage } from '@/utils';

interface PatientCardProps {
  patient: Patient;
  onPlayClick?: (patient: Patient) => void;
  className?: string;
}

const PatientCard: React.FC<PatientCardProps> = ({ 
  patient, 
  onPlayClick,
  className = '' 
}) => {
  const handlePlayClick = () => {
    onPlayClick?.(patient);
  };

  return (
    <div className={`w-full h-full relative flex flex-col justify-end items-center rounded-lg overflow-hidden shadow-lg bg-[#1F2B6C] ${className}`}>
      {/* Background Image */}
      <UiImage 
        src={patient.image}
        fill 
        alt={patient.name} 
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="lazy"
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: 'linear-gradient(180deg, rgba(31,43,108,0) 72%, #1F2B6C 87%)'
        }} 
      />
      
      {/* Play Button */}
      <button
        onClick={handlePlayClick}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[104px] h-[104px] flex items-center justify-center hover:scale-105 transition-transform duration-200"
        aria-label={`Play video for ${patient.name}`}
      >
        <span className="w-full h-full rounded-full flex items-center justify-center">
          <PlayIcon className="mx-auto my-auto opacity-50" />
        </span>
      </button>
      
      {/* Patient Information */}
      <div className="relative z-20 flex flex-col items-center pb-8 pt-40">
        <h3 className="font-rubik font-semibold text-[24px] leading-[28px] text-white text-center mb-1 max-w-[207px]">
          {patient.name}
        </h3>
        <p className="font-rubik font-normal text-[16px] leading-[19px] text-white text-center max-w-[214px]">
          {patient.subtitle}
        </p>
      </div>
    </div>
  );
};

export default PatientCard; 