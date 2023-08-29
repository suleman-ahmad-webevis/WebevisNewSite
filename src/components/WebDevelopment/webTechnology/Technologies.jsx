import React from "react";
import { TechSec } from "./Technologies.style";
import swift from "../../../assets/images/Services/WebDevelopmentServices/swift.png";
import angular from "../../../assets/images/Services/WebDevelopmentServices/angular.png";
import django from "../../../assets/images/Services/WebDevelopmentServices/django.png";
import typescript from "../../../assets/images/Services/WebDevelopmentServices/typescript.png";
import jenkins from "../../../assets/images/Services/WebDevelopmentServices/jenkins.png";
import node from "../../../assets/images/Services/WebDevelopmentServices/node.png";
import php from "../../../assets/images/Services/WebDevelopmentServices/php.png";
import reactImage from "../../../assets/images/Services/WebDevelopmentServices/reactImage.png";
import github from "../../../assets/images/Services/WebDevelopmentServices/github.png";
import Image from "next/image";
import { Container } from "src/components/Container.styles";

const Technologies = () => {
  return (
    <Container>
      
      <TechSec>
        <Image src={swift} alt="swift" />
        <Image src={angular} alt="angular" />
        <Image src={typescript} alt="typescript" />
        <Image src={node} alt="node" />
        <Image src={jenkins} alt="jenkins" />
        <Image src={php} alt=" php " />
        <Image src={reactImage} alt="reactImage" />
        <Image src={github} alt=" php " />
        <Image src={django} alt=" php " />
      </TechSec>
    </Container>
  );
};

export default Technologies;
