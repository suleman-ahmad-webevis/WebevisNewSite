import React from "react";
import { ExpertiseSec } from "./Expertise.style";
import Image from "next/image";
import { ExpertiseData } from "./ExpertiseData";
import { Container } from "src/components/Container.styles";

const Expertise = () => {
  return (
    <Container>
      <ExpertiseSec>
        <p>Numbers That Speak Our Power</p>
        <h2>Raising The Bar For PSD To HTML Expertise</h2>
        <div className="main_expert">
          {ExpertiseData.map((el, ind) => (
            <div className="expert" key={ind}>
              <div className="circle">
                <Image src={el.image} alt={el.image} />
              </div>
              <h3>{el.title}</h3>
              <h4>{el.descreption}</h4>
            </div>
          ))}
        </div>
      </ExpertiseSec>
    </Container>
  );
};

export default Expertise;
