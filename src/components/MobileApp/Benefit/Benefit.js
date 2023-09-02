import React from "react";
import { BenefitContent, BenefitHolder } from "./Benefit.styles";
import { Container } from "src/components/Container.styles";
import BenefitImg from "../../../../public/assets/images/MobileApp/Benefit-img.png";
import Image from "next/image";

const Benefit = () => {
  return (
    <BenefitHolder>
      <Container>
        <BenefitContent>
          <div className="Content">
            <h2>Benefits of Custom Mobile App Development</h2>
            <p>
              Custom mobile apps are designed to satisfy tailored customer
              needs, create unique user experience, and implement exceptional
              design. They provide the highest performance, security, better
              resilience and scalability. With custom mobile app development you
              can realise uncommon business ideas, add new functions with each
              iteration, build complex apps to meet special consumers needs,
              address market challenges, and stand out from the competition.
            </p>
          </div>
          <div className="image-holder">
            <Image src={BenefitImg} alt="BenefitImg" />
          </div>
        </BenefitContent>
      </Container>
    </BenefitHolder>
  );
};

export default Benefit;
