import React from "react";
import { ResSec } from "./Responsive.style";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import responsive from "../../../../public/assets/images/uiPage/responsive.png";
import { ResData } from "./ResData";

const Responsive = () => {
  return (
    <Container>
      <ResSec>
        <div className="main_res">
          <h2>Our PSD to Responsive HTML Conversion Process</h2>
          {ResData.map((el, ind) => (
            <div className="res" key={ind}>
              <div className="circle">
                <h5>{el.para}</h5>
              </div>
              <div className="text">
                <h3>{el.title}</h3>
                <p>{el.descreption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="res_image">
          <Image src={responsive} alt="responsive" />
        </div>
      </ResSec>
    </Container>
  );
};

export default Responsive;
