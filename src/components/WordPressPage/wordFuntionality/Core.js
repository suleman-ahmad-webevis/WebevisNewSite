import React from "react";
import styled from "styled-components";
import Image from "next/image";
import core from "../../../../public/assets/images/wordPressPage/core.png";
import { LevSec } from "./Levrage";

const Core = () => {
  return (
    <LevSec>
      <div className="text">
        <h3>
          Extend the Core <br /> Functionality
        </h3>
        <h4>
          Leverage the Rest API, webhooks architecture, and thousands of
          off-the-shelf plugins to do more with WordPress. No matter how complex
          your needs are, our WordPress developers can provide you with the
          right solution.
        </h4>
      </div>
      <div className="text_image">
        <Image src={core} alt="core" />
      </div>
    </LevSec>
  );
};

export default Core;

