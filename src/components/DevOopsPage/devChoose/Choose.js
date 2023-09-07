import React from "react";
import { ChooseSec } from "./Choose.style";
import Image from "next/image";
import choose from "../../../../public/assets/images/DevOopsPage/choose.png";
import { Container } from "src/components/Container.styles";

const Choose = () => {
  return (
    <Container>
      <ChooseSec>
        <div className="choose_text">
          <h3>
            Why Choose Webevis technologies as Your DevOps Services Company?
          </h3>
          <p>
            With our DevOps consulting services, you will get the ability to
            deliver applications and services at high velocity. This will allow
            you to make small, incremental changes at multiple levels of the
            deployment lifecycle without hampering the quality. Our DevOps
            consultants will assist you with compound delivery across digital
            and enterprise applications.
          </p>
        </div>
        <div className="choose_image">
          <Image src={choose} alt="choose" />
        </div>
      </ChooseSec>
    </Container>
  );
};

export default Choose;
