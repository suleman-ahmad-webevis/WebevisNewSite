import React from "react";
import { WebSec } from "./WebProcess.style";
import Image from "next/image";
import { WebProcessData } from "./WebProcessData";
import { Container } from "src/components/Container.styles";

const WebProcess = () => {
  return (
    <Container>
      <WebSec>
        <h2>Web application development process</h2>
        <h4>
          Our Solution Development Cycle helps turn your great ideas into
          profitable business solutions.
        </h4>

        <div className="main_web">
          {WebProcessData.map((el, ind) => (
            <div className="web" key={ind}>
              <div className="circle">
                <Image src={el.image} alt={el.image} />
              </div>
                <h3>{el.title}</h3>
                <p>{el.descreption}</p>
            </div>
          ))}
        </div>
      </WebSec>
    </Container>
  );
};

export default WebProcess;
