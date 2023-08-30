import React from "react";
import { ProcessSec } from "./Process.style";

import Image from "next/image";
import { Container } from "src/components/Container.styles";
import { ProcessData } from "./ProcessData";
const Process = () => {
  return (
    <Container>
      <ProcessSec>
        <h2 className="heading2">Process We Follow</h2>
        <div className="main_card">
          {ProcessData.map((el) => (
            <div className="card">
              <div className="inside_div">
                <div className="image">
                  <Image src={el.img} alt={el.img} />
                </div>
                <div className="text">
                  <h3>{el.title}</h3>
                </div>
              </div>
              <p>{el.description}</p>
            </div> 
          ))}
        </div>
      </ProcessSec>
    </Container>
  );
};

export default Process;
