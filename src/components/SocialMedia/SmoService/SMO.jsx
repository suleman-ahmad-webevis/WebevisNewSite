import React from "react";
import {
  AbsoluteSec,
  SMOImage,
  SMOImg,
  SMOtext,
  SmoButton,
  SmoSection,
} from "./SMO.styles";
import smoService from "../../../../public/assets/images/SocialMedia/smoService.png";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import arrow from "../../../../public/assets/images/SocialMedia/Arrow.png";
import { ContainerWrapper } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";

const SMO = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <ContainerWrapper>
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
      <SmoSection>
        <SMOImage>
          <Image src={smoService} alt="SocialMedia" />
        </SMOImage>
        <AbsoluteSec>
          <SMOtext>
            <h3>Looking for SMO Services?</h3>
            <h1>Let us Optimize your Social Media Accounts!</h1>
            <p>
              Webevis Technologies is a team of SMO experts that aims to help
              you attract the target audience, keep it engaged and build
              influence. With affordable social media services, any business can
              increase brand awareness and build a powerful social presence.{" "}
            </p>

            <PrimaryButton
              bg="#2B2C2F"
              hover="#2B2C2F"
              width="308"
              minWidth="350"
              height="50"
              flex="flex"
              items="center"
              justify="center"
              gap="20px"
              borderRadius="10px"
              weight="500"
              color="#FFF"
              size="18"
              onClick={() => setModal(true)}
            >
              Get Started Today
              <Image src={arrow} alt="arrow" />
            </PrimaryButton>
          </SMOtext>
        </AbsoluteSec>
      </SmoSection>
    </ContainerWrapper>
  );
};

export default SMO;
