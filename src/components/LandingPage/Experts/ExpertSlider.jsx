import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { ExpertSliderMain, ExpertSliderWrapper } from "./ExpertSlider.styles";
import Group from "../../../assets/images/Experts/Group-1.jpg";
import Meeting from "../../../assets/images/Experts/Meeting.jpg";
import Senior from "../../../assets/images/Experts/Senior.jpg";
import Image from "next/image";
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
          <ExpertSliderMain bgImage={Group}>
            <Image src={Group} alt="group" />
          </ExpertSliderMain>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertSliderMain bgImage={Meeting}>
            <Image src={Meeting} alt="group" />
          </ExpertSliderMain>
        </SwiperSlide>
        <SwiperSlide>
          <ExpertSliderMain bgImage={Senior}>
            <Image src={Senior} alt="group" />
          </ExpertSliderMain>
        </SwiperSlide>
      </Swiper>
    </ExpertSliderWrapper>
  );
};

export default ExpertSlider;
