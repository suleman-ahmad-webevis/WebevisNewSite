import React from "react";
import {
  IndustriresServe,
  Industry,
  IndustryFooter,
  ServeSec,
} from "./Serve.styles";
import { cardsData } from "./serveData";
import { Container } from "src/components/Container.styles";

const Serve = () => {
  return (
    <Container resPadding="0">
      <ServeSec>
        <h1>Industries We Serve</h1>
        <p>Webevis has a Solution, No matter what Industry you&apos;re in.</p>
        <IndustriresServe>
          {cardsData.map((elem, ind) => (
            <Industry key={ind} bg={elem.bg}>
              <IndustryFooter footer={elem.footer}>
                <p>{elem.text}</p>
              </IndustryFooter>
            </Industry>
          ))}
        </IndustriresServe>
      </ServeSec>
    </Container>
  );
};

export default Serve;
