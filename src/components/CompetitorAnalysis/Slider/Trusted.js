import React from "react";
import { Container } from "src/components/Container.styles";
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
import { SliderImage, Trust } from "./Trusted.styles";

const Trusted = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
    <Trust>
      <Container>
        <Flex>
          <Slider {...settings}>
            <SliderImage src={Ts} alt="" max="111.95" min="46.35" />
            <SliderImage src={MA} alt="" max="121.95" min="46.35" />
            <SliderImage src={Paragon} alt="" max="111.95" min="46.35" />
            <SliderImage src={Meat} alt="" max="137.78" min="50" />
            <SliderImage src={Food} alt="" max="139.7" min="50" />
            <SliderImage src={Ts} alt="" max="111.95" min="46.35" />
            <SliderImage src={MA} alt="" max="121.95" min="46.35" />
            <SliderImage src={Paragon} alt="" max="111.95" min="46.35" />
            <SliderImage src={Meat} alt="" max="137.78" min="50" />
            <SliderImage src={Food} alt="" max="139.7" min="50" />
          </Slider>
        </Flex>
      </Container>
    </Trust>
  );
};

export default Trusted;
