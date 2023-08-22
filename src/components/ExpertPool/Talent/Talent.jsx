import React, { useState } from "react";
import { Container } from "src/components/Container.styles";
import {
  FloatingImage,
  StyledTalent,
  TalentImage,
  TalentText,
  TalentWrapper,
} from "./Talent.styles";
import team from "../../../assets/images/Expert/talent.png";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import DeveloperModals from "../Home/DeveloperModals";

const Talent = () => {
  const [modal, setModal] = useState(false);

  return (
    <Container resPadding="0px">
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
        child={<DeveloperModals />}
      />
      <TalentWrapper>
        <StyledTalent>
          <TalentText>
            <h2>
              Empower your projects with our expert resources and <br /> begin
              your journey towards remarkable success!
            </h2>

            <PrimaryButton
              radius="9px"
              width="275"
              minWidth="315"
              size="16"
              minsize="14"
              height="50"
              // minheight="40"
              bg="#fff"
              onClick={() => setModal(true)}
            >
              <label>Engage Our Expertise!</label>
            </PrimaryButton>
          </TalentText>
          <TalentImage>
            <Image src={team} alt="team" />
          </TalentImage>
        </StyledTalent>
        <FloatingImage>
          <Image src={team} alt="team" />
        </FloatingImage>
      </TalentWrapper>
    </Container>
  );
};

export default Talent;
