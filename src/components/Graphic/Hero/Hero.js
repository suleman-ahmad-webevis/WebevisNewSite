import React from "react";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import GraphicImg from "../../../assets/images/Graphic/hero-img.png";
import Image from "next/image";
import { Content, ContentHolder, HeroHolder, ImageHolder } from "./Hero.styles";
import { useState } from "react";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";

const Hero = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <HeroHolder>
      <Container>
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
          child={<ServiceModal type={type} modal={modal} setModal={setModal} />}
        />
        <ContentHolder>
          <Content>
            <h1>
              Fast & Effective <br />{" "}
              <span className="Text-gradient">Graphic Design.</span> <br /> Flat
              & Affordable
              <br />
              Rates.
            </h1>
            <p>
              The benefits of a hands-on design team are now at your fingertips.
              Our dedicated experts aim to deliver you high-quality designs in
              record time, at a fraction of the price.
            </p>
            <PrimaryButton
              width="266"
              minWidth="217"
              height="50"
              size="24"
              minsize="16"
              radius="12px"
              onClick={() => setModal(true)}
            >
              Let’s Get Started
            </PrimaryButton>
          </Content>
          <ImageHolder>
            <Image src={GraphicImg} alt="GraphicImg" />
          </ImageHolder>
        </ContentHolder>
      </Container>
    </HeroHolder>
  );
};

export default Hero;
