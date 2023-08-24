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
            <div className="butn">
              <span className="White-btn">{white1}</span>
              <span className="Green-btn">{green1}</span>
            </div>
            <div className="butn">
              <span className="White-btn">{white2}</span>
              <span className="Green-btn">{green2}</span>
            </div>
            <div className="butn">
              <span className="White-btn">{white3}</span>
              <span className="Green-btn">{green3}</span>
            </div>
            <div className="butn">
              <span className="White-btn">{white4}</span>
              <span className="Green-btn">{green4}</span>
            </div>
          </Discription>
        </Confident>
      </ContainerWrapper>
    </ConfidenceHolder>
  );
};

export default Confidence;
