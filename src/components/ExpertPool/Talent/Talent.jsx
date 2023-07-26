import React from "react";
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

const Talent = () => {
  return (
    <Container resPadding="0px">
      <TalentWrapper>
        <StyledTalent>
          <TalentText>
            <h2>
              Our Talent Acquisition Specialists Assemble a <br /> Team of
              Pre-vetted Developers Based on Requirements.
            </h2>
            <PrimaryButton
              radius="9px"
              width="262"
              height="50"
              minheight="40"
              bg="#fff"
            >

              <label>Reach Out</label>
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
