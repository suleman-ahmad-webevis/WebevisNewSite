import React from "react";
import { SliderImage, SliderWraper, Wrapper } from "./Slider.styles";
import { Container } from "src/components/Container.styles";

import { Flex } from "../Flex.styles";
import facebook from "../../assets/images/SocialMedia/facebook.png";
import printrest from "../../assets/images/SocialMedia/printrest.png";
import youtube from "../../assets/images/SocialMedia/youtube.png";
import tiktok from "../../assets/images/SocialMedia/tiktok.png";
import instagram from "../../assets/images/SocialMedia/instagram.png";
import tweet from "../../assets/images/SocialMedia/tweet.png";
import linkdin from "../../assets/images/SocialMedia/linkdin.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sliders = () => {
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
          <SliderImage src={facebook} alt="facebook" className="sliderImage" />
          <SliderImage
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
          <SliderImage src={linkdin} alt="linkdin" className="sliderImage" />
        </Slider>
      </SliderWraper>
      {/* </Container> */}
    </Wrapper>
  );
};

export default Sliders;
