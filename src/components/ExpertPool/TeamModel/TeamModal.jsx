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
        <h1>Challenges of Dedicated Team Model:</h1>
        <h4>
          Choice of interaction mechanism during software development depends on
          the business model, project scale, features, purpose and budget of a
          client. The dedicated development team model is not for everyone, but
          for some. Here are some challenges one can face:
        </h4>
        <TeamPoints>
          <Image src={badge} alt="badge" />
          <p>
            The model isn’t a fit for small-scale projects, fixed price model
            works for SMBs well.
          </p>
        </TeamPoints>
        <TeamPoints>
          <Image src={badge} alt="badge" />
          <p>
            Client has the control over the team, so he has to plan processes
            and assign tasks to each allocated team member. Such tasks are
            looked upon by project managers.
          </p>
        </TeamPoints>
        <TeamPoints>
          <Image src={badge} alt="badge" />
          <p>
            Significant amount of time spent on team and their task management.
            And assessment of development phases
          </p>
        </TeamPoints>
        <TeamPoints>
          <Image src={badge} alt="badge" />
          <p>
            Considered expensive since long-scale projects are ideal but it’s a
            value-added model in the longer run.
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
