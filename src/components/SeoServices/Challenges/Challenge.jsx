import React from "react";
import { Container } from "src/components/Container.styles";
import {
  ChallegesSection,
  ChallengeCard,
  StyledChallenge,
} from "./Challenge.styles";
import { ChallengeData } from "./challengesData";
import Image from "next/image";

const Challenge = () => {
  return (
    <Container>
      <StyledChallenge>
        <h2>Tired of Dealing With SEO Challenges?</h2>
        <p>
          if any of these sound familiar, meet Webevis. We’ve worked with
          thousands of clients across a variety of industries to solve these
          same issues.
        </p>
        <ChallegesSection>
          {ChallengeData.map((elem, ind) => (
            <ChallengeCard key={ind}>
              <div className="Img">
                <Image src={elem.img} alt={elem.img} />
              </div>
              <span>{elem.text}</span>
            </ChallengeCard>
          ))}
        </ChallegesSection>
      </StyledChallenge>
    </Container>
  );
};

export default Challenge;
