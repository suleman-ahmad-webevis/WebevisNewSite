import React from 'react'
import { LevelUpContainer, LevelUpButton, LevelText } from "./LevelUpStyles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import vector from "../../../assets/images/Services/ContentMarkettingServices/vectorbanner.png";
import Image from "next/image";

const LevelUp = () => {
  return (
    <Container resPadding="0">
      <LevelUpContainer>
        <LevelText>
          <h1>
            Level Up Your Content Marketing Game with Your Own Dedicated Content
            Marketer!
          </h1>
          <PrimaryButton
            width="218"
            minWidth="350"
            size="16"
            height="50"
            minheight="40"
            radius="48px"
          >
            Contact Us
          </PrimaryButton>
        </LevelText>
        <div className="absolute">
          <Image src={vector} alt="vector" />
        </div>
        <div className="Static">
          <Image src={vector} alt="vector" />
        </div>
      </LevelUpContainer>
    </Container>
  );
};

export default LevelUp
