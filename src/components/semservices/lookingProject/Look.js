import React from "react";
import {
  Btn,
  LookFlex,
  LookImage,
  LookInside,
  LookSec,
  LookText,
} from "./Look.style";

import Image from "next/image";
import hand from "../../../../public/assets/images/semservices/hand.png";
import { SecondaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";
const Look = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <LookSec>
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
        <LookText>
          <LookFlex>
            <LookImage>
              <Image src={hand} alt="hand" />
            </LookImage>
            <LookInside>
              <h1>Looking to help your project</h1>
              <p>Webevis will help you to solve your project faster.</p>
            </LookInside>
          </LookFlex>
        </LookText>
        <Btn>
          <SecondaryButton
            bg="#fff"
            width="350"
            radius="8px"
            height="50"
            color=""
            onClick={() => setModal(true)}
          >
            <label
              bgText="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
              style={{ fontWeight: "700", fontSize: "24px" }}
            >
              Get Your Free Marketing Plan{" "}
            </label>
          </SecondaryButton>
        </Btn>
      </Container>
    </LookSec>
  );
};

export default Look;
