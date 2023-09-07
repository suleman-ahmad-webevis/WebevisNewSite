import React from "react";
import { BenefitSec } from "./Benefits.style";
import { Container } from "src/components/Container.styles";

const Benefits = () => {
  return (
    <Container>
      <BenefitSec>
        <div className="text">
          <h3>How You Will Benefit From Webevis AI Development Services?</h3>
          <p>
            Our AI web and app development services help businesses with
            different needs. You will benefit from solutions that enable you to
            scale your business in multiple areas.
          </p>
        </div>
        <div className="side_text">
          <div className="main_side">
            <div className="white">
              {" "}
              <small> Improved operational efficiency</small>
            </div>
            <div className="gradient">
              <h6>Enhanced decision-making capabilities</h6>
            </div>
          </div>
          <div className="main_side">
            <div className="white">
              {" "}
              <small> Increased productivity and cost savings</small>
            </div>
            <div className="gradient">
              <h6>Personalized customer experiences</h6>
            </div>
          </div>
          <div className="main_side">
            <div className="white">
              {" "}
              <small>Better forecasting accuracy</small>
            </div>
            <div className="gradient">
              <h6>Deep Background Checks</h6>
            </div>
          </div>
          <div className="main_side">
            <div className="white">
              {" "}
              <small>Reduced Human Error</small>
            </div>
            <div className="gradient">
              <h6>Faster Data Processing And analysis </h6>
            </div>
          </div>
        </div>
      </BenefitSec>
    </Container>
  );
};

export default Benefits;
