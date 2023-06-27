import React from "react";
import {
  ImageWrapper,
  SliderText,
  SliderWrapper,
  StyledPortfolioSlider,
} from "./PortfolioSlider.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import lotus from "../../assets/images/Homemain/Lotus.png";
import lotusportfolio from "../../assets/images/Homemain/SliderImages/lotusSlider.jpg";
import tsccables from "../../assets/images/Homemain/SliderImages/tscSlider.jpg";
import tsccableslogo from "../../assets/images/Homemain/tscableslogo.png";
import delmessa from "../../assets/images/Homemain/SliderImages/delMessaSlide.jpg";
import delmesalogo from "../../assets/images/Homemain/delmesalogo.png";
import medical from "../../assets/images/Homemain/SliderImages/medicalSlider.jpg";
import medicallogo from "../../assets/images/Homemain/medicallogo.png";
import foodlogo from "../../assets/images/Homemain/foodlogo.png";
import food from "../../assets/images/Homemain/SliderImages/foodSlider.jpg";
import Saberslogo from "../../assets/images/Homemain/Saberslogo.png";
import ziaSabar from "../../assets/images/Homemain/SliderImages/ziaSlider.jpg";
import Image from "next/image";

const PortfolioSlider = () => {
  return (
    <StyledPortfolioSlider>
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
          <SliderWrapper bgImage={lotusportfolio}>
            <ImageWrapper className="imageWrap">
              <Image src={lotus} alt="lotus" />
            </ImageWrapper>
            <SliderText>
              <h3>Lotus Matting Inc</h3>
              <p>Web development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={medical}>
            <ImageWrapper>
              <Image src={medicallogo} alt="medicallogo" />
            </ImageWrapper>
            <SliderText>
              <h3>Medical Sheepskins</h3>
              <p>Web development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SliderWrapper bgImage={ziaSabar}>
            <ImageWrapper>
              <Image src={Saberslogo} alt="Saberslogo" />
            </ImageWrapper>
            <SliderText>
              <h3>Zia Sabers</h3>
              <p>Web development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={tsccables}>
            <ImageWrapper>
              <Image src={tsccableslogo} alt="tsccableslogo" />
            </ImageWrapper>
            <SliderText>
              <h3>Turnstone Cables</h3>
              <p>Web development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={delmessa}>
            <ImageWrapper>
              <Image src={delmesalogo} alt="delmesalogo" />
            </ImageWrapper>
            <SliderText>
              <h3>Del Mesa Liquor</h3>
              <p>Web development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={food}>
            <ImageWrapper>
              <Image src={foodlogo} alt="foodlogo" />
            </ImageWrapper>
            <SliderText>
              <h3>Original Foods</h3>
              <p>Social Media Marketing</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
      </Swiper>
    </StyledPortfolioSlider>
  );
};

export default PortfolioSlider;
