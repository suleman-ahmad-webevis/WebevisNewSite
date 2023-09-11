import React from "react";
import { OurAppContent, OurAppHolder } from "./OurApp.styles";
import { Container } from "src/components/Container.styles";
import OurAppImg from "../../../../public/assets/images/Android-App/Our-App-Img.png";
import Image from "next/image";

const OurApp = () => {
  return (
    <OurAppHolder>
      <Container>
        <OurAppContent>
          <div className="img-holder">
            <Image src={OurAppImg} alt="OurAppImg" />
          </div>
          <div className="Content">
            <h2>Why Choose Our Android App Development Services?</h2>
            <p>
              Webevis is a top Android app development company dedicated to
              engineering best-in-class Android apps that add value to your
              business.
            </p>
            <ul>
              <li>Experienced android app development team</li>
              <li>Transparent solutions</li>
              <li>IP rights protection</li>
              <li>Maintain oversight & control</li>
              <li>Flexible engagement options</li>
              <li>No contract lock-ins</li>
              <li>Hand-picked vetted talent</li>
              <li>Complementary development manager</li>
            </ul>
          </div>
        </OurAppContent>
      </Container>
    </OurAppHolder>
  );
};

export default OurApp;
