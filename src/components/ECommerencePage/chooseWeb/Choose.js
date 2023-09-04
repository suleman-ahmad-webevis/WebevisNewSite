import React from "react";
import { ChooseSec } from "./Choose.style";
import { ChooseData } from "./ChooseData";
import mobile from "../../../../public/assets/images/ECommerencePage/mobile.png";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";

const Choose = () => {
  return (
    <ChooseSec>
      <h2>Why Choose Webevis technologies for eCommerce Development?</h2>
      <div className="main_card">
        <div className="first_div">
          {ChooseData.map((el, ind) => (
            <div className="card" key={ind}>
              <div className="inside_div">
                <div className="image">
                  <h5>{el.para}</h5>
                </div>
                <div className="text">
                  <h3>{el.title}</h3>
                </div>
              </div>
              <p>{el.description}</p>
            </div>
          ))}
        </div>

        <div className="choose_image">
          <Image src={mobile} alt="mobile" />
        </div>
      </div>
      <div className="btn">

      <PrimaryButton width="352" minWidth="350" minheight="40" minsize="16" height="60" size="20" radius="5px">
      Start Building Your Online Store
      </PrimaryButton>
      </div>
    </ChooseSec>
  );
};

export default Choose;
