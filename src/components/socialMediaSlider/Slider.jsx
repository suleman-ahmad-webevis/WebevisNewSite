import React from "react";
import { SliderImage, SliderWraper, Wrapper } from "./Slider.styles";
import { Container } from "src/components/Container.styles";

import { Flex } from "../Flex.styles";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Sliders = ({ arr }) => {
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
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <Wrapper>
      {/* <Container> */}
      <SliderWraper>
        <Slider {...settings}>
          {arr.map((item, ind) => (
            <SliderImage
              key={ind}
              src={item.image}
              alt="facebook"
              className="sliderImage"
            />
          ))}
          {/* <SliderImage
            src={printrest}
            alt="printrest"
            className="sliderImage"
          />
          <SliderImage src={youtube} alt="youtube" className="sliderImage" />
          <SliderImage src={tiktok} alt="tiktok" className="sliderImage" />
          <SliderImage
            src={instagram}
            alt="instagram"
            className="sliderImage"
          />
          <SliderImage src={tweet} alt="tweet" className="sliderImage" />
          <SliderImage src={linkdin} alt="linkdin" className="sliderImage" /> */}
        </Slider>
      </SliderWraper>
      {/* </Container> */}
    </Wrapper>
  );
};

export default Sliders;
