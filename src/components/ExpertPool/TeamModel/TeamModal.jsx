import React from "react";
import {
  StyledTeamModel,
  TeamImage,
  TeamPoints,
  TeamText,
} from "./TeamModel.styles";
import team from "../../../assets/images/Expert/team.png";
import badge from "../../../assets/images/Expert/badge.svg";
import Image from "next/image";
const TeamModal = () => {
  return (
    <StyledTeamModel>
      <TeamText>
        <h1>A Seamless Journey From Project Initiation To Success</h1>
        <h4>
          We believe in a client-centric approach that ensures a seamless and
          collaborative journey from project initiation to successful
          completion. Our client engagement process is designed to keep you
          informed, involved, and in control every step of the way. Here is how:
        </h4>
        <TeamPoints>
          <Image src={badge} alt="badge" />
          <p>
            Initial consultation shapes a personalized plan, aligning your
            objectives, expectations, and scope for project success
          </p>
        </TeamPoints>
        <TeamPoints>
          <Image src={badge} alt="badge" />
          <p>
            Skillful selection of dedicated experts tailored to your
            project&apos;s demands, validated through your approval process.
          </p>
        </TeamPoints>
        <TeamPoints>
          <Image src={badge} alt="badge" />
          <p>
            Smooth onboarding ensures rapid alignment with your project&apos;s
            ethos and seamless integration within your team.
          </p>
        </TeamPoints>
        <TeamPoints>
          <Image src={badge} alt="badge" />
          <p>
            Transparent channels offer real-time updates, maintaining consistent
            collaboration and keeping you informed of project progress.
          </p>
        </TeamPoints>
      </TeamText>
      <TeamImage>
        <Image src={team} alt="team" />
      </TeamImage>
    </StyledTeamModel>
  );
};

export default TeamModal;
