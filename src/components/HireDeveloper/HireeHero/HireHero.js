import React from "react";
import { Container } from "src/components/Container.styles";
import { Heading, Hero, Hire, ImageHolder } from "./HireHero.styles";
import { PrimaryButton } from "src/components/Button.styles";
import DeveloperSlider from "../DeveloperSlider/DeveloperSlider";
import Modal from "src/components/Modal/Modal";
import DeveloperModals from "src/components/ExpertPool/Home/DeveloperModals";
import { useState } from "react";

const HireHero = ({ heading1, heading2, heading3, developerData, type }) => {
  const [modal, setModal] = useState(false);
  return (
    <Hire>
      <Container>
        <Hero>
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
            child={<DeveloperModals type={type} />}
          />
          <Heading>
            <h1>
              {heading1} <br /> <span>{heading2} </span>
              {heading3}
            </h1>
            <p>
              Hire top software developers and engineers on-demand. From Java,
              .Net, Python, and C++ to Node.js and React, our experts are always
              ready to go.
            </p>
            <PrimaryButton
              width="190"
              height="50"
              minWidth="170"
              minHeight="40"
              onClick={() => setModal(true)}
            >
              Hire a Developer
            </PrimaryButton>
          </Heading>
          <ImageHolder>
            <DeveloperSlider arr={developerData} />
          </ImageHolder>
        </Hero>
      </Container>
    </Hire>
  );
};

export default HireHero;
