import React from "react";
import Image from "next/image";
import Right from "../../../assets/images/Services/rightcard.png";
import { Card } from "./CardCreativity.styles";
import { PrimaryButton } from "src/components/Button.styles";
const CardCreativity = () => {
  return (
    <Card>
      <Image src={Right} alt="background" />
      <div className="bottom-text">
        <strong className="title">Get Started </strong>
        <h1>Ready to the Most out of Your Creativity?</h1>
        <PrimaryButton
          width="149"
          minWidth="130"
          height="50"
          minheight="40"
          radius="11px"
          size="20"
          minsize="18"
        >
          Contact Us
        </PrimaryButton>
      </div>
    </Card>
  );
};

export default CardCreativity;
