import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../../../assets/images/Services/search.png";
import img2 from "../../../assets/images/Services/file.png";
import { Card, Cardwrapper, Iconbox } from "./ServicesCards.styles";
import Link from "next/link";
import { ServiceCardData } from "./ServiceaCardsData";
import { PrimaryButton } from "src/components/Button.styles";
const ServicesCards = () => {
  return (
    <Cardwrapper>
      {ServiceCardData.map((service) => (
        <Card key={service.id}>
          <div className="header">
            <Iconbox>
              <div className="hover-Wrapper">
                <Image
                  className="first-view"
                  src={service.img}
                  alt="background"
                />
              </div>
            </Iconbox>
          </div>
          <div className="text-holder">
            <strong className="title">{service.title}</strong>
            <Link href={service.link}>
              <PrimaryButton
                radius="11px"
                color="#28B781"
                margin-bottom="20px"
                size="16"
                minsize="12"
                bg="#EAF7EE"
                height="40"
                minheight="24"
                hover="#fff"
                shadow="none"
                width="194"
                minWidth="138"
              >
                View More Details
                <IoIosArrowForward />
              </PrimaryButton>
            </Link>
          </div>
        </Card>
      ))}
    </Cardwrapper>
  );
};

export default ServicesCards;
