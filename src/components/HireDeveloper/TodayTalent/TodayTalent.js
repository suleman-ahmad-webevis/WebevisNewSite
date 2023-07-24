import React from "react";
import { Container } from "src/components/Container.styles";
import BestTalentImage from "../../../assets/images/HireDeveloper/Best-Talent.png";
import Image from "next/image";
import {
  Best,
  BestHolder,
  BestTalent,
  BestTalentHolder,
  ImageHolder,
} from "./TadayTalent.styles";
import { PrimaryButton } from "src/components/Button.styles";
const TodayTalent = () => {
  return (
    <BestTalentHolder>
      <Container>
        <BestTalent>
          <BestHolder>
            <Best>
              <h2>Hire The Best Talent Today!</h2>
              <p>
                We provide you with the most qualified talent to meet your
                needs. Get in touch to learn more.
              </p>
              <button>
                <span>Work With Talent</span>
              </button>
            </Best>
            <ImageHolder>
              <Image src={BestTalentImage} alt="BestTalent" />
            </ImageHolder>
          </BestHolder>
        </BestTalent>
      </Container>
    </BestTalentHolder>
  );
};

export default TodayTalent;
