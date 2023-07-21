import React from "react";
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

const Developers = () => {
  return (
    <DeveloperHolder>
      <span className="Yellow"></span>
      <span className="Green"></span>
      <div className="circle1"></div>
      <div className="circle1 alignLeft"></div>
      <Container>
        <Developer>
          <FloatingImage top="12%" left="5%">
            <Image src={Employe1} alt="Employe1" />
          </FloatingImage>
          <FloatingImage top="65%" left="18%">
            <Image src={Employe2} alt="Employe2" />
          </FloatingImage>
          <FloatingImage top="35%" right="4%">
            <Image src={Employe3} alt="Employe3" />
          </FloatingImage>
          <FloatingImage top="60%" right="13%">
            <Image src={Employe4} alt="Employe4" />
          </FloatingImage>
          <h2>
            Looking for skilled and dedicated developers to power your project?{" "}
          </h2>
          <p>
            Our certified experts are extremely knowledgeable, experienced, and
            well-equipped to create robust apps that address the various
            business demands of all of our clients throughout the world.
          </p>
          <PrimaryButton
            width="333"
            height="50"
            radius="40px"
            flex="flex"
            items="center"
            justify="center"
            gap="10px"
          >
            <Calendar />
            Request a free consultation
          </PrimaryButton>
        </Developer>
      </Container>
    </DeveloperHolder>
  );
};

export default Developers;
