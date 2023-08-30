import React from "react";
import { CustomSec } from "./CustomWeb.style";
import Image from "next/image";
import { CustomData } from "./CustomData";
import { Container } from "src/components/Container.styles";

const CustomWeb = () => {
  return (
    <Container>
      <CustomSec>
        <h2 className="heading">
          Custom Web Application Development Offerings
        </h2>
        <div className="main_div">
          {CustomData.map((el, ind) => (
            <div className="custom" key={ind}>
              <div className="polygon">
                <Image src={el.image} alt={el.image} />
              </div>
              <h3>{el.title}</h3>
              <p>{el.descreption}</p>
            </div>
          ))}
        </div>
      </CustomSec>
    </Container>
  );
};

export default CustomWeb;
