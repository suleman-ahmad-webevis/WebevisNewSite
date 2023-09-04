import React from "react";
import { Container } from "src/components/Container.styles";
import { FunSec } from "./Functionality.style";
import direction from "../../../../public/assets/images/wordPressPage/direction.png";
import bulb from "../../../../public/assets/images/wordPressPage/bulb.png";
import resize from "../../../../public/assets/images/wordPressPage/resize.png";
import laptop from "../../../../public/assets/images/wordPressPage/laptop.png";
import Image from "next/image";
const Funtionality = () => {
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
          <div className="fun">
            <Image src={direction} alt="direction" />
            <h5>Unparalleled Flexibility</h5>
          </div>
          <div className="fun">
            <Image src={bulb} alt="bulb" />

            <h5>Extend Core Functionality</h5>
          </div>
          <div className="fun">
            <Image src={resize} alt="resize" />

            <h5>Scale Up and Grow</h5>
          </div>
        </div>
        <div className="main_div">
          <div className="text">
            <h3>Leverage Unparalleled <br/> Flexibility</h3>
            <h4>
              With our WordPress Development Services, you can leverage the
              unlimited flexibility that WordPress offers as both a CMS and a
              Website Development framework without making compromises.
            </h4>
          </div>
          <div className="text_image">
            <Image src={laptop} alt="laptop" />
          </div>
        </div>
      </FunSec>
    </Container>
  );
};

export default Funtionality;
