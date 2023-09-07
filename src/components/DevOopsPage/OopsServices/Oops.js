import React from "react";
import { OopSec } from "./Oops.style";
import { Container } from "src/components/Container.styles";
import { OopData } from "./OopData";
import Image from "next/image";

const Oops = () => {
  return (
    <Container>
      <OopSec>
        <h2>Our DevOps Services</h2>
        <div className="main_parent">
          {OopData.map((el, ind) => (
            <div className="oop" key={ind}>
              <Image src={el.image} alt={el.image} />
              <div dangerouslySetInnerHTML={{ __html: el.title }}></div>
            </div>
          ))}
        </div>
      </OopSec>
    </Container>
  );
};

export default Oops;
