import React from "react";
import img1 from "../../../assets/images/Services/youtubeMarketting/mask.png";
import product from "./BeneficialMap";
import { BCard, FlexCard, FlexText } from "./Beneficial.style";
import Image from "next/image";

const Beneficial = () => {
  return (
    <>
    <FlexText>
    <h1>How YouTube Marketing Beneficial For Business?</h1>
    <p>YouTube, being the most entertaining and traffic-rich platform, provides inventive opportunities 
to advertise your business through video posting. For successful business, YouTube marketing is 
the latest advertising technique which is helpful for Video Promotion as it gains fast popularity.</p>
    </FlexText>
        <FlexCard >
      {product.map((el) => (
          <BCard className="back">
            <Image src={el.image} alt="" />
            <h1> {el.title}</h1>
            <p>{el.description}</p>
          </BCard>
      ))}
        </FlexCard>
    </>
  );
};

export default Beneficial;
