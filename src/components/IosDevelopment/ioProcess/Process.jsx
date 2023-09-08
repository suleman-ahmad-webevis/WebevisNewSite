import React from "react";
import { ProcessSec } from "./Process.style";
import Image from "next/image";
import mobile from "../../../../public/assets/images/IosDevelopment/mobile.png";
import { Container } from "src/components/Container.styles";

const Process = () => {
  return (
    <Container>
      <ProcessSec>
        <div className="process">
          <h2>Key Steps of the IOS App Development Service Process</h2>
          <h4>
            We bring a full-cycle iPhone app development service process that
            fits your business domain while remaining pocket friendly and under
            budget.
          </h4>
        </div>
        <div className="parent">
          <div className="process_one">
            <div className="texting">
              <h3>
                Understand Your Idea <br /> and Goals
              </h3>
              <p>
                We discuss the details with clients to understand their vision,
                goals, and project ideas. We hold a lengthy conversation to
                cover all the requirements, objectives, challenges, ideology,
                and how they relate to your business goals.
              </p>
            </div>
            <div className="texting">
              <h3>
                Wire Framing the <br /> Concept
              </h3>
              <p>
                We outline the features of your app, what to add and how they
                work together. We have a rough sketch of the interface, buttons,
                and screens and how the users likely interact with them.
              </p>
            </div>
          </div>
          <div className="process_image">
            <Image src={mobile} alt="mobile" />
          </div>
          <div className="process_two">
            <div className="texting">
              <h3>
                Assessing Technical <br />
                Feasibility
              </h3>
              <p>
              Our team discusses the budget and resources needed to allocate for the project. This step identifies potential weaknesses and opportunities during the initial phases.
              </p>
            </div>
            <div className="texting">
              <h3>
                Initiating <br /> Development
              </h3>
              <p>
              Our experts start designing the interface and developing codes for a prototype app. It includes a basic version of the app with limited functions to demonstrate the idea. This is where the front-end and back-end development comes into play.
              </p>
            </div>
          </div>
        </div>
      </ProcessSec>
    </Container>
  );
};

export default Process;
