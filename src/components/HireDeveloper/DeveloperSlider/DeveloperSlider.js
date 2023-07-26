import React, { useState, useEffect } from "react";
import {
  DevInfoWrapper,
  Devinfo,
  ImageHolders,
  ImageWrapper,
  InfoWrapper,
} from "./DeveloperSlider.styles";
import Search from "../../../assets/images/HireDeveloper/Search.png";
import Slider from "react-slick";
import Image from "next/image";
import arrow from "../../../assets/images/HireDeveloper/Vector1.png";
import star1 from "../../../assets/images/HireDeveloper/Vector2.png";
import star2 from "../../../assets/images/HireDeveloper/Vector3.png";

const DeveloperSlider = ({ arr }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {arr.map((item, ind) => (
        <DevInfoWrapper key={ind}>
          <InfoWrapper>
            <Devinfo>
              <div className="Designation">
                <h3>{item.title}</h3>
                <ul>
                  <li>
                    Technologies
                    <div className="work">
                      {item.technology.map((item, ind) => (
                        <span key={ind}>{item}</span>
                      ))}
                    </div>
                  </li>
                  <li>{item.fintech}</li>
                  <li>{item.independence}</li>
                </ul>
              </div>
              <div className="img">
                <Image src={Search} alt="Search" />
              </div>
            </Devinfo>
            <ImageHolders>
              <Image className="arrow" src={arrow} alt="arrow" />
              <Image className="star1" src={star1} alt="arrow" />
              <Image className="star2" src={star2} alt="arrow" />
              <ImageWrapper src={item.image} alt="devOne" />
              <div className="bg"></div>
            </ImageHolders>
          </InfoWrapper>
        </DevInfoWrapper>
      ))}
    </Slider>
  );
};

export default DeveloperSlider;
