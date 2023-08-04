import React from "react";
import { Pool, Slider, Talent, Title } from "./TalentPool.styles";
import { Container } from "src/components/Container.styles";
import TalentCard from "../TalentCard/TalentCard";

const TalentPool = ({ heading, talentData }) => {
  return (
    <Talent>
      <Container>
        <Pool>
          <Title>
            <h2>{heading}</h2>
            <ul>
              <li>100+ vetted engineers</li>
              <li>mid- and senior-level</li>
              <li>mid- and senior-level</li>
              <li>available for full-time, long-term engagements</li>
              <li>experienced with remote work in fast-paced environments</li>
              <li>adjusted work schedule for better time overlap</li>
            </ul>
          </Title>
          <Slider>
            <TalentCard arr={talentData} />
          </Slider>
        </Pool>
      </Container>
    </Talent>
  );
};

export default TalentPool;
