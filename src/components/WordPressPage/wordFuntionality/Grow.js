import Image from "next/image";
import React from "react";
import styled from "styled-components";
import grow from "../../../../public/assets/images/wordPressPage/grow.png";
import { LevSec } from "./Levrage";

const Grow = () => {
  return (
    <LevSec>
      <div className="text">
        <h3>
        Scale Up and Grow
        </h3>
        <h4>
        Some of the biggest brands use WordPress as part of their broader technology stacks and we help you do the same. With our intimate knowledge of its inner workings, our expert WordPress developers can help you scale your WordPress solutions to be as big as you need them to be.
        </h4>
      </div>
      <div className="text_image">
        <Image src={grow} alt="grow" />
      </div>
    </LevSec>
  );
};

export default Grow;
