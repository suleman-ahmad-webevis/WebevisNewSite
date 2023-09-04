import React from "react";
import { TogetherContent, TogetherHolder } from "./Together.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import DateModal from "src/components/HireDeveloper/SkilledDevelopers/DateModal";
import { useState } from "react";

const Together = () => {
  const [modal, setModal] = useState(false);
  return (
    <TogetherHolder>
      <Modal
        open={modal}
        setOpen={setModal}
        desktopTop="9px"
        desktopRight="10px"
        MobileTop="9px"
        MobileRight="10px"
        svgColor="black"
        mobileColor="black"
        child={<DateModal title="Dedicated Developers" />}
      />
      <Container>
        <TogetherContent>
          <div className="Content">
            <h3>Work Together</h3>
            <h2>Have Any Project On Your Minds?</h2>
            <PrimaryButton
              width="245"
              minWidth="150"
              height="60"
              minheight="40"
              size="24"
              minsize="18"
              radius="100px"
              onClick={() => setModal(true)}
            >
              Let’s Talk
            </PrimaryButton>
          </div>
        </TogetherContent>
      </Container>
    </TogetherHolder>
  );
};

export default Together;
