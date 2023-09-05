import React from "react";
import { ImpSec } from "./Implement.style";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import implement from "../../../../public/assets/images/DevOopsPage/implement.png";
import { PrimaryButton } from "src/components/Button.styles";
const Implement = () => {
  return (
    <Container>
      <ImpSec>
      <h2>Implementing DevOps</h2>
        <div className="main_imp">
          <div className="imp_image">
            <Image src={implement} alt="implement" />
          </div>
          <div className="imp_text">
            <div className="text">
              <h3>DevOps Culture</h3>
              <p>
                Explain the cultural shift required to embrace DevOps principles
                and foster collaboration.
              </p>
            </div>
            <div className="text">
              <h3>Agile Development</h3>
              <p>
                Discuss the relationship between DevOps and Agile methodologies,
                highlighting their synergies.
              </p>
            </div>{" "}
            <div className="text">
              <h3>Continuous Improvement</h3>
              <p>
                {" "}
                Emphasize the need for regular retrospectives and feedback loops
                to drive continuous improvement.
              </p>
            </div>
          </div>
        </div>
        <PrimaryButton width="390" height="60" size="24" radius="12" >
        Solve The Issues With Devops
        </PrimaryButton>
      </ImpSec>
    </Container>
  );
};

export default Implement;
