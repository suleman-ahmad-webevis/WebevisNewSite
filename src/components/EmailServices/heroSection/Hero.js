import React from "react";
import { HeroImages, HeroSection, HeroText } from "./Hero.style";
import Image from "next/image";
import heroImage from "../../../assets/images/Services/EmailServices/heroImage.png";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import { useState } from "react";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
const Hero = ({ type }) => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <HeroSection>
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
        <Container className="container">
          <HeroText>
            <h1>
              <span className="Text-gradient"> email marketing </span>
              for big ideas and Easily
            </h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur. Eget ultricies sit morbi
              gravida eu risus interdum porta semper.
            </h2>

            <div className="input">
              <input
                type="text"
                name="email_address"
                onChange={handleChange}
                placeholder="Submit your email here"
              />

              <PrimaryButton
                bg="#28b781"
                width="200"
                height="48"
                size="16"
                onClick={() => setModal(true)}
              >
                Get a Free Quote
              </PrimaryButton>
            </div>
          </HeroText>
          <HeroImages>
            <Image src={heroImage} alt="heroImage" />
          </HeroImages>
        </Container>
      </HeroSection>
    </>
  );
};

export default Hero;
