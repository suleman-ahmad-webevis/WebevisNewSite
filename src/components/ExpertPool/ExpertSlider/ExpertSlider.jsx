import React, { useState } from "react";
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
import Slider from "react-slick";
import Image from "next/image";
import { Data } from "./ExpertData";
import { LinkButton } from "src/components/Button.styles";
var settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  autoplay: true,
  // speed: 20000,
  // autoplaySpeed: 20000,
  // cssEase: "linear",
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
      breakpoint: 1102,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 946,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 619,
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

      <SliderWrapper>
        <Slider {...settings}>
          {Data.map((elem, ind) => (
            <div className="Link" key={ind}>
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
                  <div className="pricing">
                    <p>From</p>
                    <strong>{elem.pricing} </strong>
                  </div>
                  <LinkButton
                    width="170"
                    height="35"
                    size="14"
                    radius="8px"
                    weight="400"
                    href={elem.link}
                  >
                    Hire Now
                  </LinkButton>
                </Pricing>
              </SliderMain>
            </div>
          ))}
        </Slider>
      </SliderWrapper>
    </StyledExpertSlider>
  );
};

export default ExpertSlider;
