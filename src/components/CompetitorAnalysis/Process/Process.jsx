import React from "react";
import {
  ProcessContainer,
  ProcessCards,
  ProcessCard,
  ResponsiveImageWH,
} from "./ProcessStyles";
import { data } from "./processData";
import { Container } from "src/components/Container.styles";

const Process = () => {
  return (
    <Container>
      <ProcessContainer>
        <h2>Our Process</h2>

        <ProcessCards>
          {data.map((elem, ind) => (
            <ProcessCard key={ind} width={elem.width}>
              <ResponsiveImageWH
                src={elem.image}
                alt={elem.head}
                max="218"
                min="100"
              />
              <h3>{elem.head}</h3>
              <p>{elem.body}</p>
            </ProcessCard>
          ))}
        </ProcessCards>
      </ProcessContainer>
    </Container>
  );
};

export default Process;
