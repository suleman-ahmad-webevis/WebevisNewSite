import React from "react";
import { Container } from "src/components/Container.styles";
import { Hire, HireHolder } from "./Hiring.styles";
import { PrimaryButton } from "src/components/Button.styles";
import { SecondaryButton } from "src/components/Button.styles";

const Hiring = () => {
  return (
    <HireHolder id="apply">
      <Container>
        <Hire>
          <h2>Current Openings</h2>
          <div className="Hire">
            <h3>Mern Stack Developer</h3>
            <SecondaryButton
              width="164"
              minWidth="123"
              height="50"
              minheight="40"
              bg="#fff"
              border="1px solid #1dc4a5"
              radius="6px"
            >
              <label>Apply Now</label>
            </SecondaryButton>
          </div>
          <div className="Hire">
            <h3>Lead Software Engineer – FullStack</h3>
            <SecondaryButton
              width="164"
              minWidth="123"
              height="50"
              minheight="40"
              bg="#fff"
              border="1px solid #1dc4a5"
              radius="6px"
            >
              <label>Apply Now</label>
            </SecondaryButton>
          </div>
          <div className="Hire">
            <h3>Senior Content Writer</h3>
            <SecondaryButton
              width="164"
              minWidth="123"
              height="50"
              minheight="40"
              bg="#fff"
              border="1px solid #1dc4a5"
              radius="6px"
            >
              <label>Apply Now</label>
            </SecondaryButton>
          </div>
          <div className="Hire">
            <h3>Senior React Js Developer</h3>
            <SecondaryButton
              width="164"
              minWidth="123"
              height="50"
              minheight="40"
              bg="#fff"
              border="1px solid #1dc4a5"
              radius="6px"
            >
              <label>Apply Now</label>
            </SecondaryButton>
          </div>
          <div className="Hire">
            <h3>Design Intern</h3>
            <SecondaryButton
              width="164"
              minWidth="123"
              minheight="40"
              height="50"
              bg="#fff"
              border="1px solid #1dc4a5"
              radius="6px"
            >
              <label>Apply Now</label>
            </SecondaryButton>
          </div>
        </Hire>
      </Container>
    </HireHolder>
  );
};

export default Hiring;
