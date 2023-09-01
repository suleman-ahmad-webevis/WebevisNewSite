import React from "react";
import Image from "next/image";
import img1 from "../../../assets/images/Services/Personalizedapproach.png";
import { Approach, CardHolder, ImageWrapper } from "./MarketingProcess.styles";
const ProcessCards = ({ processData }) => {
  return (
    <CardHolder>
      <div className="header">
        <h1>Our Digital Marketing Process</h1>
      </div>
      <div className="Card-parent">
        {processData.map((process, ind) => (
          <Approach key={process.id}>
            <ImageWrapper addBefore={ind == 0 ? false : true}>
              <Image src={process.img} alt="Personalized approach" />
            </ImageWrapper>

            <h2>{process.title}</h2>
            <p>{process.description}</p>
          </Approach>
        ))}
      </div>
    </CardHolder>
  );
};
export default ProcessCards;
