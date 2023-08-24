import React from "react";
import {
  ArrowButton,
  ImageWrapper,
  PortfolioImage,
  PortfolioMainWrapper,
  PortfolioText,
  TextMainWrapper,
} from "./Portfolio.styles";
import Image from "next/image";
import Link from "next/link";
const Portfoliocard = ({
  bgimage,
  src,
  heading,
  work,
  discreption,
  closingImage,
  bgcolor,
  marginTop,
  link
}) => {
  return (
    <PortfolioMainWrapper bgcolor={bgcolor}>
      <PortfolioImage className="hover" bg={bgimage}>
        <PortfolioText className="color">
          <ImageWrapper>
            <Image src={src} alt="img" />
          </ImageWrapper>
          <TextMainWrapper marginTop={marginTop}>
            {/* <h2>{heading}</h2> */}
            <h4>{work}</h4>
           
            <p>{discreption}</p>
             <Link
              href={link}
              target="_blank"
            >
              LAUNCH THE WEBSITE
              <ArrowButton/>
            </Link>
          </TextMainWrapper>
        </PortfolioText>
      </PortfolioImage>
      <Image src={closingImage} alt="closingImage" className="image" />
    </PortfolioMainWrapper>
  );
};

export default Portfoliocard;
