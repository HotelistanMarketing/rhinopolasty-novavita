import { useRef, useState, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';

interface UseSwiperReturn {
  prevRef: React.RefObject<HTMLButtonElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
  swiperInstance: SwiperType | null;
  setSwiperInstance: (swiper: SwiperType) => void;
}

export const useSwiper = (): UseSwiperReturn => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // Update navigation elements after component mounts
      // @ts-ignore - Swiper internal API
      swiperInstance.params.navigation.prevEl = prevRef.current;
      // @ts-ignore - Swiper internal API
      swiperInstance.params.navigation.nextEl = nextRef.current;
      // @ts-ignore - Swiper internal API
      swiperInstance.navigation.init();
      // @ts-ignore - Swiper internal API
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return {
    prevRef,
    nextRef,
    swiperInstance,
    setSwiperInstance,
  };
}; 