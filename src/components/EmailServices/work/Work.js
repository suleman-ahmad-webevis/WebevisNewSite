import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import { WorkCard, WorkSwiper } from "./Work.style";
import { Container } from "src/components/Container.styles";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa";
import ArrowGreen from "../../../assets/images/Services/EmailServices/ArrowGreen.png";
import ArrowBlack from "../../../assets/images/Services/EmailServices/ArrowBlack.png";
import Image from "next/image";
const Work = () => {
  const swiperRef = useRef(null);
  // useEffect(() => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.autoplay.autoplayInstance.start();
  //   }
  // }, []);
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
  // const swiperBreakpoints = {
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 2,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 2,
  //   },
  //   0: {
  //     slidesPerView: 1,
  //     spaceBetween: 2,
  //   },
  // };

  return (
    <>
      <Container>
        <WorkSwiper>
          <h4>How we work</h4>
          <Swiper
            ref={swiperRef}
            spaceBetween={40}
            loop={true}
            slidesPerView={3}
            // centeredSlides={true}
            // centeredSlidesBounds={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
                centeredSlides: true,
                // centeredSlidesBounds: true,
              },
              768: {
                // slidesPerView: "auto",
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              
            }}
          >
            <SwiperSlide>
              <WorkCard>
                <h1>Discovery</h1>
                <h2>Getting to know You...</h2>
                <p>
                  To create the best-performing email campaigns, we need to
                  understand your target audience. A strong understanding of
                  their pain points and challenges will enable us to distribute
                  emails that resonate.
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
                  understand your target audience. A strong understanding of
                  their pain points and challenges will enable us to distribute
                  emails that resonate.
                </p>
              </WorkCard>
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard>
                <h1>Automated Email Webflows</h1>
                <h2>Building intelligent Email User Journeys</h2>
                <p>
                  To create the best-performing email campaigns, we need to
                  understand your target audience. A strong understanding of
                  their pain points and challenges will enable us to distribute
                  emails that resonate.
                </p>
              </WorkCard>
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard>
                <h1>Automated Email Webflows</h1>
                <h2>Building intelligent Email User Journeys</h2>
                <p>
                  To create the best-performing email campaigns, we need to
                  understand your target audience. A strong understanding of
                  their pain points and challenges will enable us to distribute
                  emails that resonate.
                </p>
              </WorkCard>
            </SwiperSlide>
            <SwiperSlide>
              <WorkCard>
                <h1>Automated Email Webflows</h1>
                <h2>Building intelligent Email User Journeys</h2>
                <p>
                  To create the best-performing email campaigns, we need to
                  understand your target audience. A strong understanding of
                  their pain points and challenges will enable us to distribute
                  emails that resonate.
                </p>
              </WorkCard>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-prev arrow1" onClick={goPrev}>
            <Image src={ArrowBlack} alt="ArrowBlack" />
          </div>
          <div className="swiper-button-next arrow2" onClick={goNext}></div>
          <Image src={ArrowGreen} className="arrow2" alt="ArrowGreen" />
        </WorkSwiper>
      </Container>
    </>
  );
};
export default Work;
