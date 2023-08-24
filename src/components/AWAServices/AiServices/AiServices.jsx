import React from 'react'
import {
  AiContainer,
  AiServicesCards,
  AiService,
  ResponsiveImage,
} from "./AiStyles";

import { data } from "./AiServicesData";
import { Container } from "src/components/Container.styles";

const AiServices = () => {
  return (
    <Container>
      <AiContainer>
        <h2>Our AI WEBsite AUDIT Services</h2>

        <AiServicesCards>
          {data.map((elem, ind) => (
            <AiService key={ind}>
              <ResponsiveImage
                src={elem.image}
                alt={elem.text}
                max={elem.max}
                min={elem.min}
              />
              <h3>{elem.text}</h3>
            </AiService>
          ))}
        </AiServicesCards>
      </AiContainer>
    </Container>
  );
};

export default AiServices
