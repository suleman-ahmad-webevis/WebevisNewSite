import React from "react";
import { GrowthHolder, TitleHolder } from "./Growth.styles";
import GrowthPic from "../../../../public/assets/images/Careers/Growth-image.png";
import GrowthPic1 from "../../../../public/assets/images/Careers/Growth-image1.png";
import Image from "next/image";
import { ContainerWrapper } from "src/components/Container.styles";

const Growth = () => {
  return (
    <GrowthHolder>
      <ContainerWrapper>
        <TitleHolder>
          <div className="Growth">
            <h2>Why Work With Us?</h2>
            <p>
              <strong>Collaborative Environment: </strong>
              Join a team that values collaboration and encourages open
              communication. Your ideas will be heard, and your contributions
              will make a difference.
            </p>
            <p>
              <strong>Continuous Learning: </strong>
              We foster a culture of learning and development. You will have
              access to resources, training, and opportunities that support your
              professional growth.
            </p>
            <p>
              <strong>Innovative Projects: </strong>
              Be part of projects that challenge the status quo and push
              boundaries. Your creativity will find a home here.
            </p>
            <p>
              <strong>Work-Life Balance: </strong>
              We understand the importance of maintaining a healthy work-life
              balance. We offer flexible work arrangements to ensure you are at
              your best, both in and out of the office.
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
