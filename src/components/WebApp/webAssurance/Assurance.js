import React from "react";
import { AssurSec } from "./Assurance.style";
import assurOne from "../../../../public/assets/images/webApp/assurOne.png";
import assurTwo from "../../../../public/assets/images/webApp/assurTwo.png";
import assurThree from "../../../../public/assets/images/webApp/assurThree.png";
import curves from "../../../../public/assets/images/webApp/curves.png";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";

const Assurance = () => {
  return (
    <Container>
      {" "}
      <AssurSec>
        <div className="image">
          <Image src={curves} alt="curves" />
        </div>
        <div className="main_assurance">
          <h2>Webevis Assurance as a Web App Development Company</h2>
          <div className="assurance1">
            <div className="img">
              <Image src={assurOne} alt="assurOne" />
            </div>
            <div className="text">
              <h5>A Quality-First Approach</h5>
              <p>
                Our team is capable of delivering immersive web experiences,
                magnifying digital transformation
              </p>
            </div>
          </div>
          <div className="assurance1">
            <div className="img">
              <Image src={assurTwo} alt="assurTwo " />
            </div>
            <div className="text">
              <h5>Steering Web Complexities</h5>
              <p>
                Get your hands on world-class web apps that are capable of
                driving market disruption
              </p>
            </div>
          </div>
          <div className="assurance1">
            <div className="img">
              <Image src={assurThree} alt="assurThree" />
            </div>
            <div className="text">
              <h5>Multiple Engagement Models</h5>
              <p>
                Choose your business model as per your budget, essentialities
                and requirements
              </p>
            </div>
          </div>
        
          <PrimaryButton
            bg="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
            width="200"
            height="50"
            radius="7px"
            size="20px"
          >
            Work With us
          </PrimaryButton>
        </div>
      </AssurSec>
    </Container>
  );
};

export default Assurance;
