import React from "react";
import { StyledTeamModel, TeamImage, TeamText } from "./TeamModel.styles";
import team from "../../../assets/images/Expert/team.png";
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
      </TeamText>
      <TeamImage>
        <Image src={team} alt="team" />
      </TeamImage>
    </StyledTeamModel>
  );
};

export default TeamModal;
