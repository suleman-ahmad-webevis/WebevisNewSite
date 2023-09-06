import React from "react";
import { SecondaryButton } from "../../Button.styles";
import { Container } from "../../Container.styles";
import { Seo, SeoHolder } from "./hireSeo.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";
import { useState } from "react";

const HireSeo = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <SeoHolder>
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
      <Container>
        <Seo>
          <h2>You have a vision. We have a team to get you there.</h2>
          <SecondaryButton
            width="238"
            minWidth="273.33"
            height="50"
            minheight="40"
            size="24"
            minsize="18"
            radius="10px"
            hover="#fff"
            bgText="#fff"
            bgTextH="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
            onClick={() => setModal(true)}
          >
            <label>Request a Quote</label>
          </SecondaryButton>
        </Seo>
      </Container>
    </SeoHolder>
  );
};

export default HireSeo;
