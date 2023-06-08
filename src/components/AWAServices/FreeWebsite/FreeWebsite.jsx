import React from 'react'
import FreeWebsiteBG from "../../../assets/images/Services/AWAServices/FreeWebsiteBG.png";
import {
  ButtonWebsite,
  FloatingImage,
  FreeWrapper,
  FreeWrappermain,
  WebsiteImage,
  WebsiteText,
} from "./FreeWebsiteStyles";
import Image from "next/image";

const FreeWebsite = () => {
  return (
    <FreeWrappermain>
      <FreeWrapper>
        <WebsiteText>
          <h1>
            Get Your FREE Website <br /> Audit Now!
          </h1>
          <ButtonWebsite>
            <a> Take Action on My Website</a>
          </ButtonWebsite>
        </WebsiteText>
        <WebsiteImage>
<<<<<<< HEAD
          <Image src={FreeWebsiteBG} title="FreeWebsiteBG" />
        </WebsiteImage>
      </FreeWrapper>
      <FloatingImage>
        <Image src={FreeWebsiteBG} title="FreeWebsiteBG" />
=======
          <Image src={FreeWebsiteBG} alt="FreeWebsiteBG" />
        </WebsiteImage>
      </FreeWrapper>
      <FloatingImage>
        <Image src={FreeWebsiteBG} alt="FreeWebsiteBG" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
      </FloatingImage>
    </FreeWrappermain>
  );
};

export default FreeWebsite
