import React from "react";
import { HeroSec, HeroText } from "./Hero.style";
import { PrimaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";
const Hero = () => {
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
        child={<ServiceModal modal={modal} setModal={setModal} />}
      />
      <Container className="container">
        <HeroText>
          <h1>
            WEB <span className="Text-gradient"> DEVELOPMENT </span> SERVICES
          </h1>
          <p>
            Our web development services are designed to create remarkable
            online experiences that captivate your target audience and support
            business success.
          </p>
          <PrimaryButton
            size="24"
            color="#fff"
            width="238"
            height="50"
            radius="54px"
            onClick={() => setModal(true)}
          >
            {" "}
            Let’s Get Started
          </PrimaryButton>
        </HeroText>
      </Container>
    </HeroSec>
  );
};

export default Hero;
