import React from "react";
import { ExpertSec } from "./Expert.style";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import Image from "next/image";
import expertHand from "../../../../public/assets/images/IosDevelopment/expertHand.png";

const Expert = () => {
  return (
    <Container>
      <ExpertSec>
        <div className="expert_text">
          <div className="image">
            <Image src={expertHand} alt="expertHand" />
          </div>
          <div className="text">
            <h2>Let’s Discuss Your Project</h2>
            <p>
              Get free consultation and let us know your project idea to turn it
              into an amazing digital product.
            </p>
          </div>
        </div>
        <div className="btn">
          <SecondaryButton width="271" height="50" size="24" bg="#fff" hover="black">
            <label>Talk To Our Experts</label>
          </SecondaryButton>
        </div>
      </ExpertSec>
    </Container>
  );
};

export default Expert;
