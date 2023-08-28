import React from "react";
import Image from "next/image";
import Right from "../../../assets/images/Services/rightcard.png";
import { Card } from "./CardCreativity.styles";
import { Button } from "src/components/Button.styles";

const CardCreativity = () => {
  return (
    <Card>
      <Image src={Right} alt="background" />
      <div className="bottom-text">
        <strong className="title">Get Started </strong>
        <h1>Ready to the Most out of Your Creativity?</h1>
        <Button
          bg="linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%)"
          color="white"
          margin="0 0 2rem 0"
        >
          Contact Us
        </Button>
      </div>
    </Card>
  );
};

export default CardCreativity;
