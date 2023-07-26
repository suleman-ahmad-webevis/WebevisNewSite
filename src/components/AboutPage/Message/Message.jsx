import React from "react";
import { ContainerWrapper } from "src/components/Container.styles";
import {
  CeoImage,
  MessageText,
  SocialIcon,
  SocialIconWrapper,
  StyledMessage,
} from "./Message.styles";
import linkdin from "../../../assets/images/AboutUs/linkdin.svg";
import mail from "../../../assets/images/AboutUs/mail.svg";
import insta from "../../../assets/images/AboutUs/insta.svg";
import Image from "next/image";
const Message = () => {
  return (
    <ContainerWrapper>
      <StyledMessage>
        <MessageText>
          <h1>Message From The CEO</h1>
          <p>Dear valued clients and partners,</p>
          <p>
            I hope this message finds you well. As the CEO of our digital
            marketing company, I wanted to take a moment to reach out and
            express my gratitude for your continued trust and support.{" "}
          </p>
          <p>
            {" "}
            Over the past months, our team has been working tirelessly to
            deliver innovative and effective digital marketing solutions to help
            your businesses thrive in an ever-evolving landscape. We understand
            that the digital realm is constantly changing, and we strive to stay
            ahead of the curve to provide you with the best strategies and
            results.
          </p>
          <p>
            {" "}
            I am pleased to share that our company has achieved several
            significant milestones during this period. We have expanded our team
            of talented professionals, each bringing their unique expertise to
            the table. This growth has allowed us to enhance our service
            offerings, ensuring that we can cater to your specific needs and
            goals.
          </p>
          <p>
            We have also made substantial investments in cutting-edge
            technologies and tools to strengthen our capabilities. By leveraging
            the latest advancements, we aim to deliver even more targeted and
            impactful digital marketing campaigns that yield measurable results
            for your businesses.
          </p>
        </MessageText>
        <CeoImage>
          <h3>Fasih Ullah</h3>
          <p>Ceo of webevis Technologies</p>
          <SocialIconWrapper>
            <SocialIcon>
              <Image src={linkdin} alt="linkdin" />
            </SocialIcon>
            <SocialIcon>
              <Image src={mail} alt="mail" />
            </SocialIcon>
            <SocialIcon>
              <Image src={insta} alt="insta" />
            </SocialIcon>
          </SocialIconWrapper>
        </CeoImage>
      </StyledMessage>
    </ContainerWrapper>
  );
};

export default Message;
