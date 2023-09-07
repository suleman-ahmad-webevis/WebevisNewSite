import React from "react";
import {
  HeroContainer,
  Button,
  HeroContent,
  SearchCompetitor,
  Input,
  ImageWrapper,
  ResponsiveImage,
} from "./HeroStyles";
import Traffic from "../../../assets//images/Services/AICompetitorAnalysis/Traffic.png";
import { useState } from "react";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";

const Hero = ({ type }) => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState(false);
  // const handleClick = (e) => {
  //   const { name, value } = e.target;
  //   setState((prev) => ({ ...prev, [name]: value }));
  // };
  const handleClick = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };
  return (
    <HeroContainer>
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
        child={
          <ServiceModal
            type={type}
            state={state}
            modal={modal}
            setModal={setModal}
          />
        }
      />
      <HeroContent>
        <h2>
          Get Expert <br /> Competitor Analysis{" "}
        </h2>
        <p>
          “Know your competition” is a business mantra <br />
          that has been around as long as competition itself. Our <br />
          Competitive Analysis using AI-enabled and custom <br />
          analytics platform discovers brand marketing and <br />
          performance gaps for better business decisions.
        </p>
        <SearchCompetitor>
          <Input
            name="email_address"
            onChange={handleClick}
            placeholder="Enter Email"
          />
          <Button onClick={() => setModal(true)}>Find A Time To Talk</Button>
        </SearchCompetitor>
      </HeroContent>
      <ImageWrapper>
        <ResponsiveImage
          src={Traffic}
          alt="Traffic"
          max="623.44"
          min="350"
          maxh="480.68"
          minh="269.86"
        />
      </ImageWrapper>
    </HeroContainer>
  );
};

export default Hero;
