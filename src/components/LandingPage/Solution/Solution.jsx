import React from "react";
import {
  FloatingImage,
  SolutionMain,
  SolutionText,
  SolutionWrapper,
  SoultionImage,
} from "./Solution.styles";
import bannerImage from "../../../assets/images/Homemain/solutionbanner.png";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import Modal from "src/components/Modal/Modal";
import DateModal from "src/components/HireDeveloper/SkilledDevelopers/DateModal";
import { useState } from "react";

const Solution = ({ background }) => {
  const [modal, setModal] = useState(false);
  return (
    <SolutionWrapper background={background}>
      <div
        style={{ maxWidth: "1440px", position: "relative", margin: "0 auto" }}
      >
        <SolutionMain>
          <SolutionText>
            <Modal
              open={modal}
              setOpen={setModal}
              desktopTop="9px"
              desktopRight="10px"
              MobileTop="9px"
              MobileRight="10px"
              svgColor="black"
              mobileColor="black"
              child={<DateModal />}
            />
            <h3>
              Unlock The Potential Of Your Project With Expert Consultation
            </h3>
            <PrimaryButton
              bg="#2b2c2f"
              radius="12px"
              size="24"
              minSize="18"
              width="261"
              height="50"
              onClick={() => setModal(true)}
            >
              Schedule a Call
            </PrimaryButton>
          </SolutionText>
          <SoultionImage>
            <Image src={bannerImage} alt="bannerImage" />
          </SoultionImage>
        </SolutionMain>
        <FloatingImage>
          <Image src={bannerImage} alt="bannerImage" />
        </FloatingImage>
      </div>
    </SolutionWrapper>
  );
};

export default Solution;
