import React from "react";
import { Dev, DevHolder } from "./AppDev.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { devData } from "./DevData";

const AppDev = () => {
  return (
    <DevHolder>
      <Container>
        <Dev>
          <div className="head">
            <h2>
              Why Choose Webevis <br /> technologies for Mobile <br /> App
              Development?
            </h2>
            <p>
              We have a proven track record in mobile app development. However,
              for more information, here are the reasons that make us your ideal
              mobile app development company:
            </p>
          </div>
          <div className="table">
            {devData.map((item, ind) => (
              <div className="Col" key={ind}>
                <div className="title">
                  <div>
                    <Image src={item.icon} alt="Checkmark" />
                  </div>
                  <h3>{item.heading} </h3>
                </div>
                <div>
                  <Image src={item.image} alt="DevImage" />
                </div>
              </div>
            ))}
          </div>
        </Dev>
      </Container>
    </DevHolder>
  );
};

export default AppDev;
