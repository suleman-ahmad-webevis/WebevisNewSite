import React from 'react'
import { WebsiteText } from "./FreeWebsiteStyles";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import Modal from 'src/components/Modal/Modal';
import ServiceModal from 'src/components/ServiceModal/ServiceModal';
import { useState } from 'react';

const FreeWebsite = ({type}) => {
  const [modal, setModal] = useState(false);
  return (
    <WebsiteText>
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
        <h1>Get Your FREE Website Audit Now!</h1>
        <SecondaryButton
          bg="#fff"
          width="358"
          minWidth="350"
          height="50"
          minheight="40"
          size="24"
          minsize="18"
          radius="8px"
          onClick={()=>setModal(true)}
        >
          <label> Take Action on My Website</label>
        </SecondaryButton>
      </Container>
    </WebsiteText>
  );
};

export default FreeWebsite
