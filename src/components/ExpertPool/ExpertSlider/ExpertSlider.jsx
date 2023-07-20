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
import Slider from "react-slick";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";
import { Data } from "./ExpertData";
var settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: true,
  autoplay: true,
  speed: 20000,
  autoplaySpeed: 20000,
  cssEase: "linear",
  // pauseOnHover: true, // Add this property
  // pauseOnFocus: true,

  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
      },
    },
    {
      breakpoint: 697,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1.5,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const ExpertSlider = () => {
  return (
    <StyledExpertSlider>
      <h3>Expert in Pool</h3>

      {/* <SliderWrapper>
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
          loop={true}
          pauseOnMouseEnter={true}
          slidesPerView={4}
          speed={1000}
          freeMode={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
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
      </SliderWrapper> */}
      <SliderWrapper>
        <div>
          <Slider {...settings}>
            {Data.map((elem, ind) => (
              <SliderMain key={ind} onClick={() => console.log(elem.heading)}>
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
            ))}
          </Slider>
        </div>
      </SliderWrapper>
    </StyledExpertSlider>
  );
};

export default ExpertSlider;
