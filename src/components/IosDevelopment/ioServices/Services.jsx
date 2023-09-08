import React from "react";
import { ServiceSec } from "./Services.style";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { ServiceData } from "./ServiceData";
import bg1 from "../../../../public/assets/images/IosDevelopment/bgleft.png";
import bg2 from "../../../../public/assets/images/IosDevelopment/bgright.png";

const Services = () => {
  return (
    <Container>
      <ServiceSec>
       
        <div className="text">
          <h2 className="heading2">IOS App development services</h2>
          <h4>
            Our iOS app development services are focused on providing our
            clients with the most innovative and successful mobile apps. We are
            the experts in digital and mobility transformation, using codes,
            design, and lots of passion and innovation
          </h4>
        </div>
       
        <div className="main_card">
          {ServiceData.map((el, ind) => (
            <div className="card" key={ind}>
              <div className="inside_div">
                <div className="image">
                  <Image src={el.img} alt={el.img} />
                </div>
                <div className="text">
                  <div dangerouslySetInnerHTML={{ __html: el.title }}></div>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: el.description }}></div>
            </div>
          ))}
        </div>
      </ServiceSec>
    </Container>
  );
};

export default Services;
