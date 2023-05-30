import React from "react";

import {
  ClientSec,
  ClientImg,
  ClientHeading,
  LastHeading,
  Button,
} from "./Client.style";
import Image from "next/image";
import img1 from "../../../assets/images/AboutUs/assests/rectangle1.png";
import img2 from "../../../assets/images/AboutUs/assests/rectangle2.png";
import img3 from "../../../assets/images/AboutUs/assests/rectangle3.png";
import img4 from "../../../assets/images/AboutUs/assests/rectangle4.png";
import img5 from "../../../assets/images/AboutUs/assests/rectangle5.png";
import img6 from "../../../assets/images/AboutUs/assests/rectangle6.png";
import img7 from "../../../assets/images/AboutUs/assests/rectangle1.png";
import img8 from "../../../assets/images/AboutUs/assests/rectangle2.png";
import img9 from "../../../assets/images/AboutUs/assests/rectangle3.png";
import img10 from "../../../assets/images/AboutUs/assests/rectangle4.png";
import img11 from "../../../assets/images/AboutUs/assests/rectangle5.png";
import img12 from "../../../assets/images/AboutUs/assests/rectangle6.png";
import img13 from "../../../assets/images/AboutUs/assests/rectangle1.png";
import img14 from "../../../assets/images/AboutUs/assests/rectangle2.png";
import img15 from "../../../assets/images/AboutUs/assests/rectangle3.png";
import img16 from "../../../assets/images/AboutUs/assests/rectangle4.png";
import img17 from "../../../assets/images/AboutUs/assests/rectangle5.png";
import img18 from "../../../assets/images/AboutUs/assests/rectangle6.png";
import { Container } from "src/components/Container.styles";
const Client = () => {
  return (
    <>
      <ClientHeading>Our Client </ClientHeading>
      <ClientSec>
        <Container>
          <ClientImg>
            <Image src={img1} alt="" />
            <Image src={img2} alt="" />
            <Image src={img3} alt="" />
            <Image src={img4} alt="" />
            <Image src={img5} alt="" />
            <Image src={img6} alt="" />
            <Image src={img7} alt="" />
            <Image src={img8} alt="" />
            <Image src={img9} alt="" />
            <Image src={img10} alt="" />
            <Image src={img11} alt="" />
            <Image src={img12} alt="" />
            <Image src={img13} alt="" />
            <Image src={img14} alt="" />
            <Image src={img15} alt="" />
            <Image src={img16} alt="" />
            <Image src={img17} alt="" />
            <Image src={img18} alt="" />
          </ClientImg>
        </Container>
      </ClientSec>
    </>
  );
};
export default Client;
