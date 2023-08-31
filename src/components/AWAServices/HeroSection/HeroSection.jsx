import React from "react";
import Image from "next/image";
import { HeroText, HeroSec, ImageContainer } from "./HeroSectionStyles";
import heroAduit from "../../../assets/images/Services/AWAServices/heroAduit.png";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";

const HeroSection = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <HeroSec>
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
        child={<ServiceModal type={type} />}
      />
      <Container className="container">
        <HeroText>
          <h2>AI Website Audit</h2>
          <p>
            Your online presence, whether in the B2B or B2C space, is the face
            of your company, and understanding the nuances of the functional
            areas and components of a website&apos;s performance is critical.
          </p>
          <SecondaryButton
            width="356"
            minWidth="256"
            height="50"
            bg="#ffffff"
            size="24"
            minsize="16"
            minheight="40"
            radius="40px"
            hover="black"
            onClick={() => setModal(true)}
          >
            <label>Get Your Free Ai Audit</label>
          </SecondaryButton>
        </HeroText>
        <ImageContainer>
          <Image src={heroAduit} alt="heroAduit" />
        </ImageContainer>
      </Container>
    </HeroSec>
  );
};

export default HeroSection;
