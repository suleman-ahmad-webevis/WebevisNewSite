import React from "react";
import { IndustriresServe, Industry, ServeSec } from "./Serve.styles";
import { cardsData } from "./serveData";

const Serve = () => {
  return (
    <ServeSec>
      <h1>Industries We Serve</h1>
      <p>Webevis has a Solution, No matter what Industry you're in.</p>
      <IndustriresServe>
        {cardsData.map((elem, ind) => (
          <Industry key={ind} bg={elem.bg}></Industry>
        ))}
      </IndustriresServe>
    </ServeSec>
  );
};

export default Serve;
