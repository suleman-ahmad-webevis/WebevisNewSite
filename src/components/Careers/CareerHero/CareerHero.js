import React from "react";
import { Career, CareerHolder } from "./CareerHero.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import HeroPic from "../../../assets/images/Careers/Career-main.png";
import { Link, animateScroll as scroll } from "react-scroll";

import Image from "next/image";

const CareerHero = () => {
  return (
    <CareerHolder>
      <Container>
        <Career>
          <div className="career">
            <h1>Join Our Team</h1>
            <span className="Circle1"></span>
            <span className="Circle2"></span>
            <span className="Circle3"></span>
            <span className="Circle4"></span>
            <p>
              We hope this is the place that your search comes to <br /> an end.
              Where trying to “find a job” becomes
              <br /> “starting a career.”
            </p>
            <p className="paragraph">
              As part of our dynamic team, you will have the opportunity to work
              on exciting projects, learn from experts in the field, and
              contribute to groundbreaking solutions that drive real-world
              impact.
            </p>
            <Link smooth spy to="apply">
              <PrimaryButton
                width="205"
                height="50"
                minWidth="161"
                minheight="40"
                size="18"
                minsize="16"
              >
                Open Positions
              </PrimaryButton>
            </Link>
          </div>
          <div className="image-holder">
            <Image src={HeroPic} alt="HeroPic" />
          </div>
        </Career>
      </Container>
    </CareerHolder>
  );
};

export default CareerHero;
