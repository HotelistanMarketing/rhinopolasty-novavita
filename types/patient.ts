export interface Patient {
  id?: string;
  name: string;
  subtitle: string;
  image: string;
  videoUrl?: string;
}

export interface PatientJourneyConfig {
  patients: Patient[];
  slidesPerView: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  spaceBetween: number;
} 