import React, { useState } from "react";
import {
  ChooseSection,
  ChooseSections,
  ChooseWrapper,
  ImageWrapper,
  StyledChoose,
} from "./Choose.styles";
import Image from "next/image";
import img1 from "../../../assets/images/Expert/image1.png";
import img2 from "../../../assets/images/Expert/image2.png";
import img3 from "../../../assets/images/Expert/image3.png";
import img4 from "../../../assets/images/Expert/img4.png";
import img5 from "../../../assets/images/Expert/img5.png";
import img6 from "../../../assets/images/Expert/img6.png";
import main from "../../../assets/images/Expert/whyChooseMain.png";
import { PrimaryButton } from "src/components/Button.styles";
import DeveloperModals from "../../DeveloperModal/DeveloperModals";
import Modal from "src/components/Modal/Modal";

const ChooseUs = ({ heading }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
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
        child={<DeveloperModals heading={heading} />}
      />
      <StyledChoose>
        <ImageWrapper>
          <Image src={main} alt="why-Choose" className="imgResp" />
        </ImageWrapper>
        <ChooseWrapper>
          <ChooseSections>
            <ChooseSection>
              <Image src={img1} alt="img1" />
              <h3>Expertise Tailored To Your Vision</h3>
              {/* <h3>
              Fast dedicated team <br /> creation due to a <br /> large in-house
              developer <br /> pool and location
            </h3> */}
            </ChooseSection>
            <ChooseSection>
              <Image src={img2} alt="img2" />
              <h3>Seamless Integration And Effortless Collaboration</h3>
            </ChooseSection>
            <ChooseSection>
              <Image src={img3} alt="img3" />
              <h3>Flexibility To Scale As Per Requirements</h3>
            </ChooseSection>
          </ChooseSections>
          <ChooseSections>
            <ImageWrapper>
              <Image src={main} alt="why-Choose" className="imgDesk" />
            </ImageWrapper>
          </ChooseSections>
          <ChooseSections>
            <ChooseSection>
              <Image src={img4} alt="img4" />
              <h3>Agile Solutions For Any Challenge</h3>
            </ChooseSection>
            <ChooseSection>
              <Image src={img5} alt="img5" />
              <h3>Cost-Effective Excellence Without Compromising Quality</h3>
            </ChooseSection>
            <ChooseSection>
              <Image src={img6} alt="img6" />
              <h3>White Labeling Approach</h3>
            </ChooseSection>
          </ChooseSections>
        </ChooseWrapper>
        <PrimaryButton
          width="375"
          minWidth="350"
          height="50"
          minheight="40"
          size="24"
          minsize="18"
          weight="700"
          onClick={() => setModal(true)}
        >
          Let’s Achieve More Together!
        </PrimaryButton>
      </StyledChoose>
    </>
  );
};

export default ChooseUs;
