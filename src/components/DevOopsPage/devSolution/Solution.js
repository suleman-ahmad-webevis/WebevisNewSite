import React from "react";
import { SolutionSec } from "./Solution.style";
import { Container } from "src/components/Container.styles";
import { SolutionData } from "./SolutionData";
import Image from "next/image";

const Solution = () => {
  return (
    <Container>
      <SolutionSec>
        <h2>Benefits of Our DevOps Solutions</h2>
        <div className="main_solution">
          {SolutionData.map((el, ind) => (
            <div className="solution" key={ind}>
              <div className="square">
                <Image src={el.image} alt={el.image} />
              </div>
              <div dangerouslySetInnerHTML={{ __html:el.title }}></div>
              <div dangerouslySetInnerHTML={{ __html:el.descreption }}></div>

            </div>
          ))}
        </div>
      </SolutionSec>
    </Container>
  );
};

export default Solution;
