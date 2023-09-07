import React from "react";
import Image from "next/image";
import { SerSec } from "./Services.style";
import { ServiceData } from "./ServiceData";
import { Container } from "src/components/Container.styles";

const Services = () => {
  return (
    <Container>
      <SerSec>
        <h2>
          We offer comprehensive WordPress <br /> development services.
        </h2>
        <Image src={""} alt="" />
        <div className="main_services">
          {ServiceData.map((el, ind) => (
            <div className="card" key={ind}>
              <div className="image">
                <Image src={el.image} alt={el.image} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: el.title }}></div>
              <p>{el.descreption}</p>
            </div>
          ))}
        </div>
      </SerSec>
    </Container>
  );
};

export default Services;
