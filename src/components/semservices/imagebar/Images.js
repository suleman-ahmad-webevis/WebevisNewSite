import React from 'react'
import { ImageBar } from './Images.style'
import Image from 'next/image'
import img1 from "../../../../public/assets/images/semservices/rectangle1.png";
import img2 from "../../../../public/assets/images/semservices/rectangle2.png";
import img3 from "../../../../public/assets/images/semservices/rectangle3.png";
import img4 from "../../../../public/assets/images/semservices/rectangle4.png";
import img5 from "../../../../public/assets/images/semservices/rectangle5.png";
import img6 from "../../../../public/assets/images/semservices/rectangle6.png";

const Images = () => {
  return (
    <ImageBar>
      <Image src={img1} alt="img" />
      <Image src={img2} alt="img" />
      <Image src={img3} alt="img" />
      <Image src={img4} alt="img" />
      <Image src={img5} alt="img" />
      <Image src={img6} alt="img" />
    </ImageBar>
  );
}

export default Images;
