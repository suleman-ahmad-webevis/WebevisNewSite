import React from "react";
import {
  OurServices,
  ServiceItem,
  ServiceSec,
  ServiceText,
} from "./Services.styles";
import { data } from "./serviceData";
import { Container } from "src/components/Container.styles";

const Services = () => {
  return (
    <Container>
      <ServiceSec>
        <ServiceText>
          <h1>Our SMO Services Include</h1>
          <p>
            We help you leverage the commendable power of social media to
            attract the right customers with the right information at the right
            time and make your brand hub for a community of consumers.
          </p>
        </ServiceText>
        <OurServices>
          {data.map((elem, ind) => (
            <ServiceItem key={ind}>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
            </ServiceItem>
          ))}
        </OurServices>
      </ServiceSec>
    </Container>
  );
};

export default Services;
