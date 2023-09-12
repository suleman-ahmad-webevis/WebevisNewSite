import React from "react";
import { ChooseSec } from "./Choose.style";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { ChooseData } from "./ChooseData";
import juicy from "../../../../public/assets/images/wordPressPage/juicyOne.gif";
const Choose = () => {
  return (
    <Container>
      <ChooseSec>
        <div className="webevis">
          <div className="inside_text">
            <h2>Why Choose Webevis For Your WordPress Project?</h2>
            <h5>
              1000s of clients have chosen Webevis for our top-notch WordPress
              Development Services. There is a reason why.
            </h5>
          </div>
          <div className="inside_image">
            <Image src={juicy} alt="juicy" />
          </div>
        </div>
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
