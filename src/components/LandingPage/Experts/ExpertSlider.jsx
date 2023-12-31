import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { ExpertSliderMain, ExpertSliderWrapper } from "./ExpertSlider.styles";
import Group from "../../../../public/assets/images/Homemain/slide3.jpg";
import Meeting from "../../../../public/assets/images/Homemain/slide2.jpg";
import Senior from "../../../../public/assets/images/Homemain/slide1.jpg";
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
        loop={true}
        pauseOnMouseEnter={true}
        autoplay={{
          delay: 1000,
        }}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        freeMode={true}
        // effect="slide"
        modules={[Pagination, Autoplay]}
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
