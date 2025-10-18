import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import Slide from "./Slide";
import { heroSliderData } from "../data/hero_slider";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      {heroSliderData.map((slide) => (
        <SwiperSlide key={slide.id+slide.title}>
          <Slide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
