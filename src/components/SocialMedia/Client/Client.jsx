import React from "react";
import { Container } from "src/components/Container.styles";
import {
  SliderContainer,
  SliderImage,
  SliderWrapper,
  Trust,
} from "./Client.styles";
import Ts from "../../../assets/images/Trusted/Ts.png";
import MA from "../../../assets/images/Trusted/MA.png";
import Delta from "../../../assets/images/Trusted/Delta.png";
import Paragon from "../../../assets/images/Trusted/Paragon.png";
import Meat from "../../../assets/images/Trusted/Meat.png";
import Food from "../../../assets/images/Trusted/Food.png";
import { Flex } from "src/components/Flex.styles";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trusted = ({ bg, margin }) => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Trust bg={bg} margin={margin}>
      <SliderContainer>
        <Flex>
          <Slider {...settings}>
            <SliderWrapper>
              <SliderImage src={Ts} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={MA} alt="" max="121.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Delta} alt="" max="216" min="90" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Paragon} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Meat} alt="" max="137.78" min="50" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Food} alt="" max="139.7" min="50" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Ts} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={MA} alt="" max="121.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Delta} alt="" max="216" min="90" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Paragon} alt="" max="111.95" min="46.35" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Meat} alt="" max="137.78" min="50" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={Food} alt="" max="139.7" min="50" />
            </SliderWrapper>
          </Slider>
        </Flex>
      </SliderContainer>
    </Trust>
  );
};

export default Trusted;
