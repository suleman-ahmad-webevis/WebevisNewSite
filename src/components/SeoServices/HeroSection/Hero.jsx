import React, { useState } from "react";
import { Cta, HeroImg, HeroMain, HeroText } from "./Hero.style";

import Image from "next/image";
import { Button } from "../Offers/Offer.styles";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = ({ type }) => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState("");

  const hanleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  return (
    <HeroMain>
      <ToastContainer />

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
        child={<ServiceModal type={type} state={state} />}
      />
      <Container>
        <HeroText>
          <div>
            <h1>
              GET <span className="Text-gradient"> SEO SERVICES </span> THAT
              DRIVE RESULTS
            </h1>
            <p>
              EO boost is here to help you with all you SEO requirments. Get top
              ranking on Google with our premium SEO services. Check out our
              packages to learn more or give us a call and let us help you!
            </p>
            <Cta>
              <input
                type="text"
                name="website"
                onChange={hanleChange}
                placeholder="Your website URL"
              />
              <input
                type="email"
                name="email_address"
                onChange={hanleChange}
                placeholder="Email address"
              />
              <SecondaryButton
                hover="#fff"
                bgText="#fff"
                bgTextH="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
                width="251"
                minWidth="350"
                radius="4px"
                height="50"
                minheight="40"
                onClick={() => {
                  setModal(true);
                }}
              >
                <label>Get Your Report</label>
              </SecondaryButton>
            </Cta>
          </div>
        </HeroText>
      </Container>
    </HeroMain>
  );
};

export default Hero;
