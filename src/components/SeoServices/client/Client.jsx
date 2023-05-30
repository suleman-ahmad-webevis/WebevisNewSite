import React from "react";
import { ClientBrand, ClientSec, Img } from "./Client.style";
import delta from "../../../assets/images/seoservices/delta.png";
import meat from "../../../assets/images/seoservices/meats.png";
import llc from "../../../assets/images/seoservices/llc.png";
import food from "../../../assets/images/seoservices/food.png";
import pargon from "../../../assets/images/seoservices/paragon.png";
import Image from "next/image";

const Client = () => {
  return (
    <ClientSec>
      <h1>Join our 30,000+ happy Clients</h1>
      <ClientBrand>
        <Image src={pargon} alt="Paragon" />
        <Image src={llc} alt="llc" />
        <Image src={delta} alt="delta" />
        <Image src={pargon} alt="Paragon" />
        <Image src={meat} alt="meat" />
        <Image src={food} alt="food" />
      </ClientBrand>
    </ClientSec>
  );
};

export default Client;
