import React from "react";
import {
  TransformFlex,
  TransformImage,
  TransformPos,
  TransformSec,
  TransformText,
} from "./Transform.style";
import Image from "next/image";
import img1 from "../../../../public/assets/images/youtubeMarketting/women.png";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";

const Transform = () => {
  return (
    <>
      <TransformSec>
        <Container className="container">
          <TransformFlex>
            <TransformText>
              <h1>Transform your channel with our services</h1>
              <SecondaryButton
                width="321"
                minWidth=""
                height="50"
                minheight="40"
                bg="#fff"
                radius="8px"
                hover="black"
                size="20"
                minsize="18"
              >
                <label>Boost my presence</label>
              </SecondaryButton>
            </TransformText>
            <TransformImage>
              <Image src={img1} alt="" />
            </TransformImage>
            <TransformPos>
              <Image src={img1} alt="" />
            </TransformPos>
          </TransformFlex>
        </Container>
      </TransformSec>
    </>
  );
};

export default Transform;
