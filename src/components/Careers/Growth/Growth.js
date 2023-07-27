import React from "react";
import { GrowthHolder, TitleHolder } from "./Growth.styles";
import { Container } from "src/components/Container.styles";
import GrowthPic from "../../../assets/images/Careers/Growth-image.png";
import Image from "next/image";

const Growth = () => {
  return (
    <GrowthHolder>
      <Container>
        <TitleHolder>
          <div className="Growth">
            <h2>Confident Career Growth Starts Here</h2>
            <p>
              We’re seeking extraordinary people who want to contribute to one
              of USA fastest-growing digital marketing agencies with a proven
              track record of success for clients around the world.
            </p>
            <p>
              Team members carry a great work-life balance and directly make an
              impact on our company as well as the lives of our clients,
              communities, and fellow team members.
            </p>
            <p>
              At a mid-sized agency, you have the opportunity to move the needle
              more than at a larger agency. Plus, you get to be part of a team
              of talented, hard-working individuals.
            </p>
          </div>
          <div className="image-holder">
            <Image src={GrowthPic} alt="GrowthPic" />
          </div>
        </TitleHolder>
      </Container>
    </GrowthHolder>
  );
};

export default Growth;
