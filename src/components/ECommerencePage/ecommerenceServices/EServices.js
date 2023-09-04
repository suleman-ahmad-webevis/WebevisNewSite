import React from "react";
import { ServiceSec } from "./EServices.style";
import Image from "next/image";
import { ServicesData } from "./EData";
import { Container } from "src/components/Container.styles";

const EServices = () => {
  return (
    <Container>
      <ServiceSec>
        <h2 className="heading">
          E-Commerce Web Development Services <br/> We Offer
        </h2>
        <div className="main_div">
          {ServicesData.map((el, ind) => (
            <div className="custom" key={ind}>
              <div className="polygon">
                <Image src={el.image} alt={el.image} />
              </div>
              <h3>{el.title}</h3>
              <p>{el.descreption}</p>
            </div>
          ))}
        </div>
      </ServiceSec>
    </Container>
  );
};

export default EServices;
