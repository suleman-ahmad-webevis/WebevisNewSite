import React from "react";
import { TransformImage, TransformSec, TransformText } from "./Transform.style";
import Image from "next/image";
import img1 from "../../../assets/images/Services/youtubeMarketting/women.png"

const Transform = () => {
  return (
    <>
      <TransformSec>
        <TransformText>
          <h1>Transform your channel with our services</h1>
          <button>Boost my presence</button>
        </TransformText>
        <TransformImage>
            <Image src={img1} alt=""/>
        </TransformImage>
      </TransformSec>
    </>
  );
};

export default Transform;
