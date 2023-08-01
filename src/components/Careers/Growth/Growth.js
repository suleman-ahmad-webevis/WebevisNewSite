import React from "react";
import { GrowthHolder, TitleHolder } from "./Growth.styles";
import GrowthPic from "../../../assets/images/Careers/Growth-image.png";
import GrowthPic1 from "../../../assets/images/Careers/Growth-image1.png";
import Image from "next/image";
import { ContainerWrapper } from "src/components/Container.styles";

const Growth = () => {
  return (
    <GrowthHolder>
      <ContainerWrapper>
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
            <Image className="GrowthPic" src={GrowthPic} alt="GrowthPic" />
            <Image className="GrowthPic1" src={GrowthPic1} alt="GrowthPic" />
          </div>
        </TitleHolder>
      </ContainerWrapper>
    </GrowthHolder>
  );
};

export default Growth;
