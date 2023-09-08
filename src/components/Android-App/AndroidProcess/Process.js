import React from "react";
import { Col, ProcessContent, ProcessHolder } from "./Process.styles";
import { Container } from "src/components/Container.styles";
import { processData } from "./ProcessData";

const Process = () => {
  return (
    <ProcessHolder>
      <Container>
        <ProcessContent>
          <h2>Our Android Application Development Process</h2>
          <p>
            We handle the entire app development process, from forming the
            original idea to developing the UI and software to publishing the
            finished app in the Google Play Store.
          </p>
          <div className="Col-holder">
            {processData.map((item, ind) => (
              <Col addBefore={item.addBefore} key={ind}>
                <h3>{item.heading}</h3>
                <ul>
                  <li>{item.list1}</li>
                  <li>{item.list2}</li>
                  <li>{item.list3}</li>
                </ul>
              </Col>
            ))}
          </div>
        </ProcessContent>
      </Container>
    </ProcessHolder>
  );
};

export default Process;
