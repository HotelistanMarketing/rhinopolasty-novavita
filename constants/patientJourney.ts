import { Patient, PatientJourneyConfig } from '../types/patient';



export const PATIENT_JOURNEY_PATIENTS: Patient[] = [
  {
    id: '1',
    name: 'James Mitchell',
    subtitle: 'Saphire FUE | 3500 Graft',
    image: '/images/woman-working-on-scalp-of-man.png',
  },
  {
    id: '2',
    name: 'James Mitchell',
    subtitle: 'Saphire FUE | 3500 Graft',
    image: '/images/hair-transplant-in-progress.png',
  },
  {
    id: '3',
    name: 'James Mitchell',
    subtitle: 'Saphire FUE | 3500 Graft',
    image: '/images/woman-working-on-scalp-of-man.png',
  },
  {
    id: '4',
    name: 'James Mitchell',
    subtitle: 'Saphire FUE | 3500 Graft',
    image: '/images/woman-working-on-scalp-of-man.png',
  },
  {
    id: '5',
    name: 'James Mitchell',
    subtitle: 'Saphire FUE | 3500 Graft',
    image: '/images/woman-working-on-scalp-of-man.png',
  },
];

export const PATIENT_JOURNEY_CONFIG: PatientJourneyConfig = {
  patients: PATIENT_JOURNEY_PATIENTS,
  slidesPerView: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  spaceBetween: 24,
};

export const PATIENT_JOURNEY_BREAKPOINTS = {
  0: { slidesPerView: PATIENT_JOURNEY_CONFIG.slidesPerView.mobile },
  768: { slidesPerView: PATIENT_JOURNEY_CONFIG.slidesPerView.tablet },
  1100: { slidesPerView: PATIENT_JOURNEY_CONFIG.slidesPerView.desktop },
}; 