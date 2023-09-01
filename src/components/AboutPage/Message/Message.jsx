import React from "react";
import { ContainerWrapper } from "src/components/Container.styles";
import {
  CeoImage,
  MessageText,
  SocialIcon,
  SocialIconWrapper,
  StyledMessage,
} from "./Message.styles";
import linkdin from "../../../../public/assets/images/AboutUs/linkdin.svg";
import mail from "../../../../public/assets/images/AboutUs/mail.svg";
import insta from "../../../../public/assets/images/AboutUs/insta.svg";
import Image from "next/image";
const Message = () => {
  return (
    <ContainerWrapper>
      <StyledMessage>
        <MessageText>
          <h1>CEO Message</h1>
          <p>Greetings,</p>
          <p>
            Welcome to Webevis Technologies, where we embark on a transformative
            journey to redefine the boundaries of digital excellence. As the
            CEO, it is my utmost pleasure to lead a team of passionate and
            innovative minds dedicated to unleashing the true potential of
            technology for your success.
          </p>
          <p>
            At Webevis Technologies, we believe in pushing the boundaries,
            challenging conventions, and embracing the spice of innovation. Our
            goal is not just to meet your expectations but to exceed them,
            delivering solutions that truly resonate with your business needs.
            With our cutting-edge expertise, dynamic strategies, and unwavering
            commitment to quality, we are poised to deliver exceptional results
            that ignite your growth and leave a lasting impact.
          </p>
          <p>
            We are more than just a technology company; we are your partners in
            progress. Our team is driven by a shared passion to empower
            businesses like yours with the tools and capabilities needed to
            thrive in the digital era. We take pride in our ability to craft
            tailor-made solutions that drive efficiency, boost productivity, and
            create remarkable user experiences.
          </p>
          <p>
            Let&apos;s connect and write the next chapter of your success story!
          </p>
        </MessageText>
        <CeoImage>
          <h3>Fasih Ullah</h3>
          <p>Ceo of Webevis Technologies</p>
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
