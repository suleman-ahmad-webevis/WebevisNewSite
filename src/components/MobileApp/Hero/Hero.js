import React from "react";
import { HeroContent, HeroHolder } from "./Hero.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";

const Hero = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <HeroHolder>
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
      <Container>
        <HeroContent>
          <div>
            <h1>Full-Stack Mobile App Development Company</h1>
            <p>
              Delivering Sophistication through a Refined Process We build
              purpose-driven mobile app Development Services with your success
              in mind.
            </p>
            <PrimaryButton
              width="200"
              size="24"
              minsize="18"
              height="50"
              radius="12px"
              onClick={() => setModal(true)}
            >
              Start Project
            </PrimaryButton>
          </div>
        </HeroContent>
      </Container>
    </HeroHolder>
  );
};

export default Hero;
