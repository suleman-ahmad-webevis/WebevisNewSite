import React, { useState, useEffect } from "react";
import {
  DevInfoWrapper,
  Devinfo,
  HomeText,
  HomeWrapper,
  ImageContainer,
  ImageWrapper,
  Pill,
  StyledHome,
} from "./Home.styles";
import devOne from "../../../assets/images/Expert/img1.png";
import devTwo from "../../../assets/images/Expert/img2.png";
import devThree from "../../../assets/images/Expert/img3.png";
import { PrimaryButton } from "src/components/Button.styles";
import Slider from "react-slick";
import Link from "next/link";

const images = [devOne, devTwo, devThree]; // Add more image paths here

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, []);
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
    <StyledHome>
      <HomeWrapper>
        <HomeText>
          <h1>
            Hire Our <span>Dedicated</span> <span> Resources</span>
          </h1>
          <p>
            Hire our Expert Python Developers Skilled in Newest Tools and <br />
            Technologies to Fulfill your Project Requirements
          </p>
          <Link href="/Hire-React-Developer">
            <PrimaryButton
              shadowH="none"
              width="190"
              minWidth="170"
              height="50"
              minheight="40"
              size="18"
              minsize="16"
              weight="700"
              radius="9px"
            >
              Hire a Top Talent
            </PrimaryButton>
          </Link>
        </HomeText>
        <ImageContainer>
          <Slider {...settings}>
            <DevInfoWrapper>
              <ImageWrapper src={devOne} alt="devOne" />
              <Devinfo>
                <h3>Hamza Zubair</h3>
                <p>Full Stack DEVELOPER</p>
                <Pill>JavaScript</Pill>
                <Pill>Frontent Development</Pill>
              </Devinfo>
            </DevInfoWrapper>
            <DevInfoWrapper>
              <ImageWrapper src={devTwo} alt="devOne" />
              <Devinfo>
                <h3>Ahmed</h3>
                <p>REACT DEVELOPER</p>
                <Pill>JavaScript</Pill>
                <Pill>Frontent Development</Pill>
              </Devinfo>
            </DevInfoWrapper>
            <DevInfoWrapper>
              <ImageWrapper src={devThree} alt="devThree" />
              <Devinfo>
                <h3>Atif</h3>
                <p>PYTHON DEVELOPER</p>
                <Pill>JavaScript</Pill>
                <Pill>Frontent Development</Pill>
              </Devinfo>
            </DevInfoWrapper>
          </Slider>
        </ImageContainer>
      </HomeWrapper>
    </StyledHome>
  );
};

export default Home;
