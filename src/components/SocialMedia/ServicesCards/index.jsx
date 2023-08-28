import React from "react";
import Image from "next/image";
import img1 from "../../../assets/images/Services/search.png";
import img2 from "../../../assets/images/Services/file.png";
import { Card, Cardwrapper, Iconbox } from "./ServicesCards.styles";
const ServicesCards = ({ btndetails, servicesData }) => {
  return (
    <Cardwrapper>
      {servicesData.map((service) => (
        <Card key={service.id}>
          <div className="header">
            <Iconbox>
              <Image
                className="first-view"
                src={service.img}
                alt="background"
              />
            </Iconbox>
          </div>
          <div className="text-holder">
            <strong className="title">{service.title}</strong>
            {btndetails}
          </div>
        </Card>
      ))}
    </Cardwrapper>
  );
};

export default ServicesCards;
