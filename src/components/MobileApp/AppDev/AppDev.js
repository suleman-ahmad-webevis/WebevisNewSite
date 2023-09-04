import React from "react";
import { Dev, DevHolder } from "./AppDev.styles";
import { Container } from "src/components/Container.styles";
import Image from "next/image";
import { devData } from "./DevData";
import { BsCheck2 } from "react-icons/bs";

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
                  <div className="image-holder">
                    <BsCheck2 color="#fff" />
                  </div>
                  <h3>{item.heading} </h3>
                </div>
                <div className="img-holder">
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
