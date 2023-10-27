import React from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { useSwiper } from "swiper/react";
export const SwiperCustomButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex gap-3">
      <button onClick={() => swiper.slidePrev()}>
        <FaArrowCircleLeft size={30} />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <FaArrowCircleRight size={30} />
      </button>
    </div>
  );
};
