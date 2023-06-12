import React from "react";
import {
  BenefitsSec,
  BenefitsText,
  SMOitems,
  SmoServices,
} from "./Benefits.styles";
import { data } from "./benefitData";
import triangle from "../../../assets/images/SocialMedia/triangle.png";
import Image from "next/image";

const Benefits = () => {
  return (
    <BenefitsSec>
      <BenefitsText>
        <h1>Key Benefits of Our SMO Services</h1>
        <p>Let us look at some of the major benefits of our SMO services</p>
        <SmoServices>
          {data.map((elem, ind) => (
            <SMOitems key={ind}>
              <Image src={triangle} title="triangle" alt="" />
              {/* <span></span> */}
              <h5 className="font">{elem}</h5>
            </SMOitems>
          ))}
        </SmoServices>
      </BenefitsText>
    </BenefitsSec>
  );
};

export default Benefits;
