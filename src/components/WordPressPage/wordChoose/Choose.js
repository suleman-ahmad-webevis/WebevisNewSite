import React from "react";
import { ChooseSec } from "./Choose.style";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { ChooseData } from "./ChooseData";
const Choose = () => {
  return (
    <Container>
      <ChooseSec>
        <div className="main_choose">
          {ChooseData.map((el, ind) => (
            <div className="parent" key={ind}>
              <div className="circle">
                <Image src={el.image} alt={el.image} />
              </div>
              <div className="choose_card">
                <h3>{el.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: el.descreption }}></div>
              </div>
            </div>
          ))}
        </div>
      </ChooseSec>
    </Container>
  );
};

export default Choose;
