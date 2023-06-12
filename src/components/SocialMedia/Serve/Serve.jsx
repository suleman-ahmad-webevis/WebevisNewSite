import React from "react";
import {
  IndustriresServe,
  Industry,
  IndustryFooter,
  ServeSec,
} from "./Serve.styles";
import { cardsData } from "./serveData";

const Serve = () => {
  return (
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
  );
};

export default Serve;
