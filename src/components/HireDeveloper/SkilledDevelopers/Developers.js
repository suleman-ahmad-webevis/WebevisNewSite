import React, { useState } from "react";
import {
  Calendar,
  Curve,
  Developer,
  DeveloperHolder,
  FloatingImage,
} from "./Developers.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import Employe1 from "../../../assets/images/HireDeveloper/Employe1.png";
import Employe2 from "../../../assets/images/HireDeveloper/Employe2.png";
import Employe3 from "../../../assets/images/HireDeveloper/Employe3.png";
import Employe4 from "../../../assets/images/HireDeveloper/Employe4.png";
import Image from "next/image";
import Modal from "src/components/Modal/Modal";
import DateModal from "./DateModal";
const Developers = ({
  heading,
  text,
  button = " Request a Consultation Now!",
}) => {
  const [modal, setModal] = useState(false);
  return (
    <DeveloperHolder>
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
      <span className="Yellow"></span>
      <span className="Green"></span>
      <div className="circle1"></div>
      <div className="circle1 alignLeft"></div>
      <Container>
        <Developer>
          <FloatingImage>
            <div className="Employe1">
              <Image src={Employe1} alt="Employe1" />
            </div>
          </FloatingImage>
          <FloatingImage>
            <div className="Employe2">
              <Image src={Employe2} alt="Employe2" />
            </div>
          </FloatingImage>
          <FloatingImage>
            <div className="Employe3">
              <Image src={Employe3} alt="Employe3" />
            </div>
          </FloatingImage>
          <FloatingImage>
            <div className="Employe4">
              <Image src={Employe4} alt="Employe4" />
            </div>
          </FloatingImage>
          <h2>{heading}</h2>
          <p>{text}</p>
          <PrimaryButton
            width="333"
            height="50"
            radius="40px"
            flex="flex"
            items="center"
            justify="center"
            gap="10px"
            onClick={() => setModal(true)}
          >
            <Calendar />
            {button}
          </PrimaryButton>
        </Developer>
      </Container>
    </DeveloperHolder>
  );
};

export default Developers;
