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
            <button>
              <label>Reach Out</label>
            </button>
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
