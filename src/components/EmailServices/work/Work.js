import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { WorkCard, WorkSwiper } from "./Work.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.autoplayInstance.start();
    }
  }, []);
  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const swiperBreakpoints = {
    768: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
  };

  return (
    <>
      <WorkSwiper>
        <Swiper
          breakpoints={swiperBreakpoints}
          slidesPerView={3}
          spaceBetween={2}
          freeMode={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          className="mySwiper"
          ref={swiperRef}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <WorkCard>
              <h1>Discovery</h1>
              <h2>Getting to know You...</h2>
              <p>
                To create the best-performing email campaigns, we need to
                understand your target audience. A strong understanding of their
                pain points and challenges will enable us to distribute emails
                that resonate.
              </p>
              <p>
                To create the best-performing email campaigns, we need to
                understand your target audience.{" "}
              </p>
            </WorkCard>
          </SwiperSlide>
          <SwiperSlide>
            <WorkCard>
              <h1>Email Database Growth</h1>
              <h2>Find Way To Nurture And Grow Your Email Subscriber</h2>
              <p>
                To create the best-performing email campaigns, we need to
                understand your target audience. A strong understanding of their
                pain points and challenges will enable us to distribute emails
                that resonate.
              </p>
            </WorkCard>
          </SwiperSlide>
          <SwiperSlide>
            <WorkCard>
              <h1>Automated Email Webflows</h1>
              <h2>Building intelligent Email User Journeys</h2>
              <p>
                To create the best-performing email campaigns, we need to
                understand your target audience. A strong understanding of their
                pain points and challenges will enable us to distribute emails
                that resonate.
              </p>
            </WorkCard>
          </SwiperSlide>
          <SwiperSlide>
            <WorkCard>
              <h1>Automated Email Webflows</h1>
              <h2>Building intelligent Email User Journeys</h2>
              <p>
                To create the best-performing email campaigns, we need to
                understand your target audience. A strong understanding of their
                pain points and challenges will enable us to distribute emails
                that resonate.
              </p>
            </WorkCard>
          </SwiperSlide>
          <SwiperSlide>
            <WorkCard>
              <h1>Automated Email Webflows</h1>
              <h2>Building intelligent Email User Journeys</h2>
              <p>
                To create the best-performing email campaigns, we need to
                understand your target audience. A strong understanding of their
                pain points and challenges will enable us to distribute emails
                that resonate.
              </p>
            </WorkCard>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev" onClick={goPrev}>
          <FontAwesomeIcon icon={faArrowLeftLong} size="2xl" style={{color:"#2B2C2F"}}  />
        </div>
        <div className="swiper-button-next" onClick={goNext}>
          <FontAwesomeIcon
            icon={faArrowRightLong}
            style={{ color: "#28B781" }}
            size="2xl"
          />
        </div>
      </WorkSwiper>
    </>
  );
};
export default Work;
