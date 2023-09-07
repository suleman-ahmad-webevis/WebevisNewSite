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
import Modal from "src/components/Modal/Modal";
import DeveloperModal from "src/components/DeveloperModal/DeveloperModals";
import { useState } from "react";
const TodayTalent = ({
  type,
  text = "Partner with our React experts to create dynamic, high-performance applications that captivate users.",
  title = "Secure Our Expert React Developer Today!",
  button = "Start Your Journey",
}) => {
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
        child={<DeveloperModal type={type} modal={modal} setModal={setModal} />}
      />
      <Container>
        <BestTalent>
          <BestHolder>
            <Best>
              <h2>{title}</h2>
              <p>{text}</p>
              <button onClick={() => setModal(true)}>
                <span>{button}</span>
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
