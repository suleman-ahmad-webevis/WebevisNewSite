import React from "react";
import { ServiceSec } from "./Services.style";
import { Container } from "src/components/Container.styles";
import { ServiceData } from "./ServicesData";
import Image from "next/image";

const Services = () => {
  return (
    <Container>
      <ServiceSec>
        <div className="text">

        <h2>Get A Wide Range Of React Native App Development Services</h2>
        </div>
        <div className="main_services">
          {ServiceData.map((el, ind) => (
            <div className="card" key={ind}>
              <div className="image">
                <Image src={el.image} alt={el.image} />
              </div>
              <div className="card_text">
                <div dangerouslySetInnerHTML={{ __html: el.title }}></div>
                <div dangerouslySetInnerHTML={{ __html: el.descreption }}></div>
              </div>
            </div>
          ))}
        </div>
      </ServiceSec>
    </Container>
  );
};

export default Services;
