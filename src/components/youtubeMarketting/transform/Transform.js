import React from "react";
import {
  TransformFlex,
  TransformImage,
  TransformPos,
  TransformSec,
  TransformText,
} from "./Transform.style";
import Image from "next/image";
import img1 from "../../../assets/images/Services/youtubeMarketting/women.png";

const Transform = () => {
  return (
    <>
      <TransformSec>
        <TransformFlex>
          <TransformText>
            <h1>Transform your channel with our services</h1>
            <button>Boost my presence</button>
          </TransformText>
          <TransformImage>
            <Image src={img1} alt="" />
          </TransformImage>
          <TransformPos>
            <Image src={img1} alt="" />
          </TransformPos>
        </TransformFlex>
      </TransformSec>
    </>
  );
};

export default Transform;
