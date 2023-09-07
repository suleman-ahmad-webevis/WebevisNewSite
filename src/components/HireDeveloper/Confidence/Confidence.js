import React from "react";
import { Container } from "src/components/Container.styles";
import {
  ConfidenceHolder,
  Confident,
  Discription,
  ImageHolder,
  TextHolder,
} from "./Confidence.styles";
import Image from "next/image";
import { ContainerWrapper } from "src/components/Container.styles";
import { reactConfidence } from "./ConfidenceData";

const Confidence = ({
  ConfidenceImg,
  paddingRight,
  paddingLeft,
  imgWidth,
  contentWidth,
  textWidth,
  heading,
  text,
  white1,
  white2,
  white3,
  white4,
  green1,
  green2,
  green3,
  green4,
  padding,
  data = reactConfidence,
}) => {
  return (
    <ConfidenceHolder paddingRight={paddingRight} paddingLeft={paddingLeft}>
      <ContainerWrapper>
        <Confident>
          <ImageHolder imgWidth={imgWidth}>
            <Image src={ConfidenceImg} alt="Confidence" />
          </ImageHolder>
          <Discription contentWidth={contentWidth} padding={padding}>
            <h2>{heading}</h2>
            <TextHolder textWidth={textWidth}>
              <p>{text}</p>
            </TextHolder>
            {data.map((elem, ind) => (
              <div className="butn" key={ind}>
                <span className="White-btn">{elem.white}</span>
                <span className="Green-btn">{elem.green}</span>
              </div>
            ))}
          </Discription>
        </Confident>
      </ContainerWrapper>
    </ConfidenceHolder>
  );
};

export default Confidence;
