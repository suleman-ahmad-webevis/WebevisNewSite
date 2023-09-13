import React from "react";
import {
  HeroContainer,
  Button,
  HeroContent,
  SearchCompetitor,
  Input,
  ImageWrapper,
} from "./HeroStyles";
import Traffic from "../../../../public/assets/images/AICompetitorAnalysis/Traffic.png";
import { useState } from "react";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import Image from "next/image";
import { Container } from "src/components/Container.styles";

const Hero = ({ type }) => {
  const [modal, setModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    email_address: "",
  });

  const hanleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSelectedOption((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <HeroContainer>
      <Container className="container">
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
              selectedOption={selectedOption}
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
            “Know your competition” is a business mantra that has been around as
            long as competition itself. Our Competitive Analysis using
            AI-enabled and custom analytics platform discovers brand marketing
            and performance gaps for better business decisions.
          </p>
          <SearchCompetitor>
            <Input
              name="email_address"
              value={selectedOption.email_address}
              onChange={hanleChange}
              placeholder="Enter Email"
            />
            <Button onClick={() => setModal(true)}>Find A Time To Talk</Button>
          </SearchCompetitor>
        </HeroContent>
        <ImageWrapper>
          <Image src={Traffic} alt="Traffic" />
        </ImageWrapper>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
