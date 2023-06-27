import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { ExpertSliderMain, ExpertSliderWrapper } from "./ExpertSlider.styles";
import Group from "../../../assets/images/Experts/Group-1.png";
import Meeting from "../../../assets/images/Experts/Meeting.png";
import Senior from "../../../assets/images/Experts/Senior.png";
const ExpertSlider = () => {
  return (
    <ExpertSliderWrapper>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
        }}
        slidesPerView={1}
        spaceBetween={1}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ExpertSliderMain bgImage={Group}></ExpertSliderMain>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertSliderMain bgImage={Meeting}></ExpertSliderMain>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertSliderMain bgImage={Senior}></ExpertSliderMain>
        </SwiperSlide>
      </Swiper>
    </ExpertSliderWrapper>
  );
};

export default ExpertSlider;
