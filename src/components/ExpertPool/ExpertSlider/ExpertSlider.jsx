import React from "react";
import { Container } from "src/components/Container.styles";
import {
  Icon,
  Pricing,
  SliderDiscreption,
  SliderMain,
  SliderWrapper,
  StyledExpertSlider,
} from "./ExpertSlider.styles";
import tickSvg from "../../../assets/images/Expert/tick.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { Data } from "./ExpertData";

const ExpertSlider = () => {
  return (
    <StyledExpertSlider>
      <h3>Expert in Pool</h3>

      <SliderWrapper>
        <Swiper
          breakpoints={{
            1218: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 3.5,
            },
            900: {
              slidesPerView: 2.5,
            },
            661: {
              slidesPerView: 2,
            },
            511: {
              slidesPerView: 1.6,
            },
            390: {
              slidesPerView: 1.2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {Data.map((elem, ind) => (
            <SwiperSlide key={ind}>
              <SliderMain>
                <h5>{elem.heading}</h5>
                <h6>{elem.discreption}</h6>
                <SliderDiscreption>
                  {elem.discreptionDetail.map((item, ind) => (
                    <span key={ind}>
                      <Image src={tickSvg} alt="tickSvg" />
                      <p>{item}</p>
                    </span>
                  ))}
                </SliderDiscreption>
                <h6>{elem.startingFrom}</h6>
                <Pricing>
                  <p>From</p>
                  <strong>{elem.pricing} </strong>
                </Pricing>
              </SliderMain>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </StyledExpertSlider>
  );
};

export default ExpertSlider;
