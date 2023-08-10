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
import Modal from "src/components/Modal/Modal";
import DeveloperModals from "src/components/ExpertPool/Home/DeveloperModals";
import { useState } from "react";
const TodayTalent = ({ type }) => {
  const [modal, setModal] = useState(false);
  return (
    <BestTalentHolder>
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
        child={<DeveloperModals type={type} />}
      />
      <Container>
        <BestTalent>
          <BestHolder>
            <Best>
              <h2>Hire The Best Talent Today!</h2>
              <p>
                We provide you with the most qualified talent to meet your
                needs. Get in touch to learn more.
              </p>
              <button onClick={() => setModal(true)}>
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
