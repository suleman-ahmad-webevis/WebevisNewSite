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
import equest from "../../assets/images/Homemain/equest.png";
import equestLogo from "../../assets/images/Homemain/equestLogo.png";
import meatLogo from "../../assets/images/Homemain/meat.svg";
import meatBg from "../../assets/images/Homemain/MeatBg.png";
import nvmcBg from "../../assets/images/Homemain/NMCV.png";
import nvmclogo from "../../assets/images/Homemain/nmcvLogo.png";
import toddlerLogo from "../../assets/images/Homemain/toddler.png";
import toddlerbg from "../../assets/images/Homemain/toddlerbg.png";
import potatobg from "../../assets/images/Homemain/potatobg.png";
import potatoLogo from "../../assets/images/Homemain/potatoLogo.png";
import aproplateLogo from "../../assets/images/Homemain/aproplatLogo.png";
import approplatebg from "../../assets/images/Homemain/approplatebg.png";
import deltaTechbg from "../../assets/images/Homemain/deltaTech.png";
import deltaTechLogo from "../../assets/images/Homemain/deltaTechLogo.png";
import BncablesLogo from "../../assets/images/Homemain/BnCablesLogo.png";
import Bncablesbg from "../../assets/images/Homemain/BnCables.png";
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
          <SliderWrapper bgImage={equest}>
            <ImageWrapper className="imageWrap">
              <Image src={equestLogo} alt="equest" />
            </ImageWrapper>
            <SliderText>
              <h3>Equest Builders</h3>
              <p>Web Development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={meatBg}>
            <ImageWrapper>
              <Image src={meatLogo} alt="medicallogo" />
            </ImageWrapper>
            <SliderText>
              <h3>L Chaim Meats</h3>
              <p>Web Development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>

        <SwiperSlide>
          <SliderWrapper bgImage={nvmcBg}>
            <ImageWrapper>
              <Image src={nvmclogo} alt="Saberslogo" />
            </ImageWrapper>
            <SliderText>
              <h3>NMCV Business</h3>
              <p>Web Development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={toddlerbg}>
            <ImageWrapper>
              <Image src={toddlerLogo} alt="tsccableslogo" />
            </ImageWrapper>
            <SliderText>
              <h3>LisaforSythe</h3>
              <p>Search Engine Optimization</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={potatobg}>
            <ImageWrapper>
              <Image src={potatoLogo} alt="delmesalogo" />
            </ImageWrapper>
            <SliderText>
              <h3>MrPotatoToken</h3>
              <p>Web development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={approplatebg}>
            <ImageWrapper>
              <Image src={aproplateLogo} alt="foodlogo" />
            </ImageWrapper>
            <SliderText>
              <h3>APROPLAT</h3>
              <p>Web Development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={deltaTechbg}>
            <ImageWrapper>
              <Image src={deltaTechLogo} alt="foodlogo" />
            </ImageWrapper>
            <SliderText>
              <h3>DeltaTechStore</h3>
              <p>Ecommerce Development</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <SliderWrapper bgImage={Bncablesbg}>
            <ImageWrapper>
              <Image src={BncablesLogo} alt="foodlogo" />
            </ImageWrapper>
            <SliderText>
              <h3>BNCables</h3>
              <p>Search Engine Optimization</p>
            </SliderText>
          </SliderWrapper>
        </SwiperSlide>
      </Swiper>
    </StyledPortfolioSlider>
  );
};

export default PortfolioSlider;
