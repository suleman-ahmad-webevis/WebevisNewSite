import React, { useState } from "react";
import { Container } from "src/components/Container.styles";
import { Category, End, H2,ContainerHolder } from "./Designation.styles";
import Column from "src/components/LandingPage/DesignationCol/Column";
import { Flex } from "src/components/Flex.styles";

const Designation = () => {
  const [state, setState] = useState(false);
  const [image, setMyImage] = useState(1);

  const handleHover = (key) => {
    setState({ [key]: true });
    setMyImage(key);
    // switch (key) {
    //   case 2:
    //     break;
    //   case 3:
    //     setMyImage(3);
    //     break;
    //   case 4:
    //     setMyImage(4);
    //     break;
    //   default:
    //     setMyImage(1);
    // }
  };

  return (
    <Container>
      <H2>
        <h2>Full Stack Digital Agency </h2>
      </H2>
      <Category img={image}>
        <Flex>
          <Column
            number={"01"}
            title={"Digital Marketing"}
            content={
              "Webevis Technology is a major digital marketing agency in the United States, specializing in digital marketing, graphic design,"
            }
            view={"view Digital Marketing Services"}
            onMouseEnter={() => handleHover(1)}
            isHovered={state[1]}
          />
          <Column
            onMouseEnter={() => {
              handleHover(2);
              // handleMouseEnter(2);
            }}
            // onMouseLeave={() => handleMouseLeave(2)}
            number={"02"}
            title={"Design & Development"}
            content={
              "Webevis Technology is a major digital marketing agency in the United States, specializing in digital marketing, graphic design,"
            }
            view={"view Digital Marketing Services"}
            isHovered={state[2]}
          />
          <Column
            number={"03"}
            onMouseEnter={() => {
              handleHover(3);
              // handleMouseEnter(3);
            }}
            // onMouseLeave={() => handleMouseLeave(3)}
            title={"Customer Services"}
            content={
              "Webevis Technology is a major digital marketing agency in the United States, specializing in digital marketing, graphic design,"
            }
            view={"view Digital Marketing Services"}
            isHovered={state[3]}
          />
          <Column
            number={"04"}
            onMouseEnter={() => {
              handleHover(4);
              // handleMouseEnter(4);
            }}
            // onMouseLeave={() => handleMouseLeave(4)}
            title={"Finetech Solutions"}
            content={
              "Webevis Technology is a major digital marketing agency in the United States, specializing in digital marketing, graphic design,"
            }
            view={"view Digital Marketing Services"}
            isHovered={state[4]}
          />
        </Flex>
      </Category>
      <End>
        <div className="col">
          <h2>370+</h2>
          <span>Product</span>
        </div>
        <div className="col">
          <h2>150+</h2>
          <span>Client</span>
        </div>
        <div className="col">
          <h2>40+</h2>
          <span>Members</span>
        </div>
        <div className="col">
          <h2>200+</h2>
          <span>Partnership</span>
        </div>
      </End>
    </Container>
  );
};

export default Designation;
