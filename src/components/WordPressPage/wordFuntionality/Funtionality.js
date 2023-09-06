import React, { useState } from "react";
import { Container } from "src/components/Container.styles";
import { FunSec } from "./Functionality.style";
import direction from "../../../../public/assets/images/wordPressPage/direction.png";
import bulb from "../../../../public/assets/images/wordPressPage/bulb.png";
import resize from "../../../../public/assets/images/wordPressPage/resize.png";
import Image from "next/image";
import Levrage from "./Levrage";
import Grow from "./Grow";
import Core from "./Core";
const Funtionality = () => {
  const [selectedComponent, setSelectedComponent] = useState("Levrage");

  const handleClick = (componentName) => {
    setSelectedComponent(componentName);
  };
  return (
    <Container>
      <FunSec>
        <h2>Maximize WordPress Functionality</h2>
        <p>
          The experts at Webevis Technologies can help you do more with
          WordPress by building <br /> great functionality that hooks your
          customers in and helps your business grow.
        </p>
        <div className="main_fun">
          <div
            className="fun"
            style={{
              border:
                selectedComponent === "Levrage" ? "2px solid  #28B781" : "",
            }}
            onClick={() => handleClick("Levrage")}
          >
            <Image src={direction} alt="direction" />
            <h5>Unparalleled Flexibility</h5>
          </div>
          <div
            className="fun"
            style={{
              border: selectedComponent === "Grow" ? "2px solid  #28B781" : "",
            }}
            onClick={() => handleClick("Grow")}
          >
            <Image src={bulb} alt="bulb" />

            <h5>Extend Core Functionality</h5>
          </div>
          <div
            className="fun"
            style={{
              border: selectedComponent === "Core" ? "2px solid  #28B781" : "",
            }}
            onClick={() => handleClick("Core")}
          >
            <Image src={resize} alt="resize" />

            <h5>Scale Up and Grow</h5>
          </div>
        </div>
        {selectedComponent === "Levrage" && <Levrage />}
        {selectedComponent === "Grow" && <Grow />}
        {selectedComponent === "Core" && <Core />}
      </FunSec>
    </Container>
  );
};

export default Funtionality;
