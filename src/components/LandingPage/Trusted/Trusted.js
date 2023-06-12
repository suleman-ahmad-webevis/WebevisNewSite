import React from "react";
import { Container } from "src/components/Container.styles";
import { Trust } from "./Trusted.styles";
import Ts from "../../../assets/images/Trusted/Ts.png";
import MA from "../../../assets/images/Trusted/Ma.png";
import Delta from "../../../assets/images/Trusted/Delta.png";
import Paragon from "../../../assets/images/Trusted/Paragon.png";
import Meat from "../../../assets/images/Trusted/Meat.png";
import Food from "../../../assets/images/Trusted/Food.png";
import { Flex } from "src/components/Flex.styles";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Trusted = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,  
    speed: 500,
    arrows:false,
    dots:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
       
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
       
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
       
        }
      },
    ]
  };
  return (
    <Trust>
      <Container>
        <h2>Trusted By</h2>
        <Flex>
          <Slider {...settings}>
            <Image src={Ts} alt="" />
            <Image src={MA} alt="" />
            <Image src={Delta} alt="" />
            <Image src={Paragon} alt="" />
            <Image src={Meat} alt="" />
            <Image src={Food} alt="" />
            <Image src={Ts} alt="" />
            <Image src={MA} alt="" />
            <Image src={Delta} alt="" />
            <Image src={Paragon} alt="" />
            <Image src={Meat} alt="" />
            <Image src={Food} alt="" />
          </Slider>
        </Flex>
      </Container>
    </Trust>
  );
};

export default Trusted;
