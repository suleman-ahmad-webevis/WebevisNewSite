import React from "react";
import { Holder } from "./DateModal.styles";
import { BsClock } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import Image from "next/image";
import mail from "../../../assets/images/HireDeveloper/mail-icon.svg";

const ThankYou = () => {
  return (
    <Holder>
      <div className="Content">
        <Image src={mail} alt="mail" />

        <div className="text">
          THANK <span>YOU</span>{" "}
        </div>
        <p>
          Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit
          <br />
          sagitis leo sit.Lorem ipsum dolor sit amet nsectetur cing elituspe
          ndisse suscipit
          <br />
          sagitis leo sit.Lorem ipsum dolor sit amet nsectetur cing elituspe
          ndisse suscipit <br />
          sagitis leo sit.
        </p>
      </div>
    </Holder>
  );
};

export default ThankYou;
