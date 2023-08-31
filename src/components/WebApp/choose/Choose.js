import React from "react";
import { ChooseSec } from "./Choose.style";
import Image from "next/image";
import tick from "../../../../public/assets/images/webApp/tick.png";
import choose from "../../../../public/assets/images/webApp/choose.png";
import { Container } from "src/components/Container.styles";
const Choose = () => {
  return (
    <Container>
      <ChooseSec>
        <h2>Why Choose Webevis Technologies for Web App Development?</h2>
        <div className="main_choose">
          <div className="choose_list">
            <ul>
              <li>
                {" "}
                <span> Experts in migrating to microservices </span>
              </li>
              <li>
                {" "}
                <span> Innovative in modularizing existing architectures </span>
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  Experience in building Service-Oriented -Architectures (SOA){" "}
                </span>
              </li>
              <li>
                {" "}
                <span> Consistent delivery by following CI/CD approaches </span>
              </li>
              <li>
                {" "}
                <span> Strict adherence to dedicated QA practices </span>
              </li>
              <li>
                {" "}
                <span>Support and maintenance round-the -clock </span>
              </li>
              <li>
                {" "}
                <span>
                  Tech-savvy in integrating the cloud power and web solutions{" "}
                </span>
              </li>
              {/* <li> <Image src={""} alt=""/> Experts in migrating to microservices </li> */}
            </ul>
          </div>
          <div className="choose_image">
            <Image src={choose} alt="choose" />
          </div>
        </div>
      </ChooseSec>
    </Container>
  );
};

export default Choose;
