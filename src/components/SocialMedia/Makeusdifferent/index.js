import React from "react";
import Image from "next/image";
import img1 from "../../../assets/images/Services/Personalizedapproach.png";
import { Approach, Card, CardHolder } from "./MakeusCards.styles";
const MarketingCards = ({ marketingData }) => {
  return (
    <CardHolder>
      <div className="header">
        <h1>Here's What Makes Us Different</h1>
      </div>
      <div className="Card-parent">
        {marketingData.map((marketing) => (
          <Card key={marketing.id}>
            <Approach>
              <Image src={img1} alt="Personalized approach" />
              <h2>{marketing.title}</h2>
              <p>{marketing.description}</p>
            </Approach>
          </Card>
        ))}
      </div>
    </CardHolder>
  );
};
export default MarketingCards;
