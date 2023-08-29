import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "src/components/Button.styles";
import img1 from "../../../assets/images/Services/search.png";
import img2 from "../../../assets/images/Services/file.png";
import { Card, Cardwrapper, Iconbox } from "./ServicesCards.styles";
import Link from "next/link";
import { ServiceCardData } from "./ServiceaCardsData";
const ServicesCards = ({ btndetails }) => {
  return (
    <Cardwrapper>
      {ServiceCardData.map((service) => (
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
            <Link href={service.link}>
              <Button
                className="btn"
                radius="11px"
                color="#28B781"
                margin-bottom="20px"
                font-size="16px"
              >
                View More Details
                <AiOutlineArrowRight />
              </Button>
            </Link>
          </div>
        </Card>
      ))}
    </Cardwrapper>
  );
};

export default ServicesCards;
