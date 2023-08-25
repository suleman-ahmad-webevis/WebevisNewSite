import React from 'react'
import {
  AiContainer,
  AiServicesCards,
  AiService,
  ResponsiveImage,
} from "./AiStyles";

import { data } from "./AiServicesData";

const AiServices = () => {
  return (
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
  );
};

export default AiServices
