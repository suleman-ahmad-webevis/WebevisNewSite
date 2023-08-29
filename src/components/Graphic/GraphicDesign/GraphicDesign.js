import React from "react";
import { Design, DesignHolder } from "./GraphicDesign.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import DesignImg from "../../../assets/images/Graphic/Graphic-design-img.png";

const GraphicDesign = () => {
  return (
    <DesignHolder>
      <Container>
        <Design>
          <div className="img-holder">
            <Image src={DesignImg} alt="DesignImg" />
          </div>
          <div className="Design-content">
            <h3>WHY SHOULD YOU CHOOSE</h3>
            <h2>Webevis Technologies For Graphic Design?</h2>
            <p>
              Webevis Technologies offers graphic design services in the USA in
              both B2B and B2C space. Our graphic designer USA teams work as an
              extension of your digital marketing and branding teams to fulfill
              all design requirements. Over 10 years, we have delivered on
              diverse design needs, and built capacities to meet wide-ranging
              project requirements.
            </p>
          </div>
        </Design>
      </Container>
    </DesignHolder>
  );
};

export default GraphicDesign;
