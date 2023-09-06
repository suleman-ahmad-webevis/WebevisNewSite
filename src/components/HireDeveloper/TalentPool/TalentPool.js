import React from "react";
import { Pool, Slider, Talent, Title } from "./TalentPool.styles";
import { Container } from "src/components/Container.styles";
import TalentCard from "../TalentCard/TalentCard";
import { reactPool } from "./TalentPoolData";

const TalentPool = ({ heading, talentData, type, data = reactPool }) => {
  return (
    <Talent>
      <Container>
        <Pool>
          <Title>
            <h2>{heading}</h2>
            <ul>
              {data.map((elem, ind) => (
                <li key={ind}>{elem}</li>
              ))}
            </ul>
          </Title>
          <Slider>
            <TalentCard arr={talentData} type={type} />
          </Slider>
        </Pool>
      </Container>
    </Talent>
  );
};

export default TalentPool;
