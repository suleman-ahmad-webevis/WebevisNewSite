import React from "react";
import { ServiceSec } from "./Services.style";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { ServiceData } from "./ServiceData";

const Services = () => {
  return (
    <Container>
      <ServiceSec>
      <h2 className="heading2">Process We Follow</h2>
        <div className="main_card">
          {ServiceData.map((el, ind) => (
            <div className="card" key={ind}>
              <div className="inside_div">
                <div className="image">
                  <Image src={el.img} alt={el.img} />
                </div>
                <div className="text">
                  <h3>{el.title}</h3>
                </div>
              </div>
              <p>{el.description}</p>
            </div> 
          ))}
        </div>
      </ServiceSec>
    </Container>
  );
};

export default Services;
