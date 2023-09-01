import React from "react";
import { PsdSec } from "./Psd.style";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import { PsdData } from "./PsdData";

const Psd = () => {
  return (
    <Container>
      <PsdSec>
        <h2>Our Specialist PSD to HTML Service</h2>
        <p>
          Webevis Technologies PSD to HTML adopting a unique methodology. Our
          experts code HTML5/CSS3 websites with the following services:
        </p>
        <div className="main_psd">
          {PsdData.map((el, ind) => (
            <div className="psd" key={ind}>
              <div className="first_psd">
                <div className="image">
                  <Image src={el.image} alt={el.image} />
                </div>
                <div className="text">
                  <h3>{el.title}</h3>
                </div>
              </div>
              <h4>{el.description}</h4>
            </div>
          ))}
        </div>
      </PsdSec>
    </Container>
  );
};

export default Psd;
