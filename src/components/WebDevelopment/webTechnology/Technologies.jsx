import React from "react";
import { TechSec } from "./Technologies.style";
import Sliders from "src/components/socialMediaSlider/Slider";
// import swift from "../../../assets/images/Services/WebDevelopmentServices/swift.png";
// import angular from "../../../assets/images/Services/WebDevelopmentServices/angular.png";
// import django from "../../../assets/images/Services/WebDevelopmentServices/django.png";
// import typescript from "../../../assets/images/Services/WebDevelopmentServices/typescript.png";
// import jenkins from "../../../assets/images/Services/WebDevelopmentServices/jenkins.png";
// import node from "../../../assets/images/Services/WebDevelopmentServices/node.png";
// import php from "../../../assets/images/Services/WebDevelopmentServices/php.png";
// import reactImage from "../../../assets/images/Services/WebDevelopmentServices/reactImage.png";
// import github from "../../../assets/images/Services/WebDevelopmentServices/github.png";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import WebData from "./WebData";

const Technologies = () => {
  return (
    <Container>
      <TechSec>
        <h2>Technologies We Use For Web  Development</h2>
      </TechSec>
      {/* <Sliders arr={WebData} /> */}
    </Container>
  );
};

export default Technologies;
