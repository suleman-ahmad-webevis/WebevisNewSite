import React, { useState } from "react";
import { HeroImg, HeroSection, HeroText } from "./Hero.styles";
import bg from "../../../../public/assets/images/SocialMedia/socialbg.png";

import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";

const Hero = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
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
        child={<ServiceModal type={type} modal={modal} setModal={setModal} />}
      />
      <HeroText>
        <h1 className="Text-gradient">Social Media Marketing</h1>
        {/* <Image src={line} title="Vector" alt="" /> */}

        <p>
          With our top-notch social media marketing plan and campaign monitoring
          system, social media content marketing can lead to increased search
          traffic, better SEO, healthier customer engagement, and improved brand
          loyalty.
        </p>
        <PrimaryButton
          color="white"
          width="334"
          minWidth="350"
          height="50"
          minheight="40"
          radius="4px"
          onClick={() => setModal(true)}
        >
          Get Your Free Custom Proposal
        </PrimaryButton>
      </HeroText>
      <HeroImg>
        <Image src={bg} alt="bg" />
      </HeroImg>
    </HeroSection>
  );
};

export default Hero;
