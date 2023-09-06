import React from "react";
import { FlowSec } from "./FlowSite.style";
import Image from "next/image";
import webflowImage from "../../../assets/images/Services/WebDevelopmentServices/flow.png";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";

const FlowSite = () => {
  const [modal, setModal] = useState(false);
  return (
    <Container resPadding="0">
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
      <FlowSec>
        <div className="flow_text">
          <h3>Looking to design & develop an amazing Webflow website?</h3>
          <p>
            If you want to get a hand from the amazing team behind Templates,
            get in touch with Agency today.
          </p>
          <PrimaryButton
            width="147"
            height="50"
            radius="25px"
            onClick={() => setModal(true)}
          >
            Get A Quote
          </PrimaryButton>
        </div>
        <div className="flow_image">
          <Image src={webflowImage} alt="webflowImage" />
        </div>
      </FlowSec>
    </Container>
  );
};

export default FlowSite;
