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

import { PrimaryButton } from "src/components/Button.styles";
import Slider from "react-slick";
import Link from "next/link";
import { userData } from "./userData";
import Modal from "src/components/Modal/Modal";
import DeveloperModal from "../../DeveloperModal/DeveloperModals";

const Home = ({ type }) => {
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
  const [modal, setModal] = useState(false);
  return (
    <StyledHome>
      <Modal
        open={modal}
        setOpen={setModal}
        bg="#fff"
        radius="25px"
        width="1340px"
        desktopTop="9px"
        desktopRight="10px"
        MobileTop="9px"
        MobileRight="10px"
        svgColor="black"
        child={<DeveloperModal type={type} />}
      />
      <HomeWrapper>
        <HomeText>
          <h1>
            Tap Into Our <span>Dedicated</span> <span> Resources </span>Within
            12 Hours
          </h1>
          <p>
            Empower your projects through the strategic utilization
            <br />
            of nearshore outsourcing.
          </p>

          <PrimaryButton
            shadowH="none"
            width="270"
            minWidth="250"
            height="50"
            minheight="40"
            size="18"
            minsize="16"
            weight="700"
            radius="9px"
            onClick={() => setModal(true)}
          >
            Hire Our Skilled Resources
          </PrimaryButton>
        </HomeText>
        <ImageContainer>
          <Slider {...settings}>
            {userData.map((elem, ind) => (
              <DevInfoWrapper key={ind}>
                <div className="image-holder">
                  <ImageWrapper src={elem.userImage} alt={elem.name} />
                </div>
                <Devinfo>
                  <h3>{elem.name}</h3>
                  <p>{elem.stack}</p>
                  {elem.skills.map((elem) => (
                    <>
                      <Pill>{elem}</Pill>
                    </>
                  ))}
                </Devinfo>
              </DevInfoWrapper>
            ))}
            {/* <DevInfoWrapper>
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
            </DevInfoWrapper> */}
          </Slider>
        </ImageContainer>
      </HomeWrapper>
    </StyledHome>
  );
};

export default Home;
