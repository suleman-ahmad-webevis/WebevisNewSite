import React from "react";
import Image from "next/image";
import img1 from "../../../assets/images/Services/Personalizedapproach.png";
import { Approach, Card, CardHolder } from "./MarketingProcess.styles";
const ProcessCards = ({ processData }) => {
  return (
    <CardHolder>
      <div className="header">
        <h1>Our Digital Marketing Process</h1>
      </div>
      <div className="Card-parent">
        {processData.map((process) => (
          <Card key={process.id}>
            <div className="content-holder">
              <Approach>
                {/* <div className="rowrapper"> */}
                <div className="imagewrapper">
                  <Image src={process.img} alt="Personalized approach" />
                </div>
                {/* <hr className="horizontalline" /> */}
                {/* </div> */}
                <div className="title-holder">
                  <h2>{process.title}</h2>
                </div>
                <div className="text-holder">
                  <p>{process.description}</p>
                </div>
              </Approach>
            </div>
          </Card>
        ))}
      </div>
    </CardHolder>
  );
};
export default ProcessCards;
