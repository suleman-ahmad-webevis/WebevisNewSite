import React from "react";
import { DevSec, DevText } from "./Dev.style";
import { Container } from "src/components/Container.styles";
import real1 from "../../../assets/images/Services/WebDevelopmentServices/real1.png";
import real2 from "../../../assets/images/Services/WebDevelopmentServices/real2.png";
import real3 from "../../../assets/images/Services/WebDevelopmentServices/real3.png";
import real4 from "../../../assets/images/Services/WebDevelopmentServices/real4.png";
import real5 from "../../../assets/images/Services/WebDevelopmentServices/real5.png";
import real6 from "../../../assets/images/Services/WebDevelopmentServices/real6.png";
import Image from "next/image";
import { DevData } from "./DevData";

const Dev = () => {
  return (
    <Container>
      <DevSec>
        <div className="adding_text">
          <h2>
            Turn your website into a valuable source of traffic and revenue with
            our state-of-the-art web design and development strategies
          </h2>
          <p>
            Have the power of all the high-quality digital tools in your keep
          </p>
        </div>
        <DevText>
          {DevData.map((el) => (
            <div className="dev_card">
              <div className="circle">
                <Image src={el.img} alt={el.img} />
              </div>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </div>
          ))}
        </DevText>
      </DevSec>
    </Container>
  );
};

export default Dev;
