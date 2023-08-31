import React, { useState } from "react";
import { InquirSec } from "./Inquir.style";
import { SecondaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";
import Modal from "src/components/Modal/Modal";
import ServiceModal from "src/components/ServiceModal/ServiceModal";

const Inquir = () => {
  const [modal, setModal] = useState(false);
  return (
    <InquirSec>
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
        child={<ServiceModal />}
      />
      <Container className="container">
        <div className="inqiur_Text">
          <h3>Unlock Online Success with Expert Web Development.</h3>
        </div>
        <SecondaryButton
          size="18"
          min-width="155px"
          height="50"
          radius="12px"
          bg="#fff"
          hover="black"
          onClick={() => setModal(true)}
        >
          {" "}
          <label> Inquire Now </label>{" "}
        </SecondaryButton>
      </Container>
    </InquirSec>
  );
};

export default Inquir;
