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
          <div className="dev_card">
            <div className="circle">
              <Image src={real1} alt="real1" />
            </div>
            <h3>Turn your idea into something valuable</h3>
            <p>
              We ensure our clients remain a competent player in the industry,
              by keeping them up to date with all the market trends.
            </p>
          </div>
          <div className="dev_card">
            <div className="circle">
              <Image src={real2} alt="real2" />
            </div>
            <h3>Develop and maintain competency</h3>
            <p>
              We ensure our clients remain a competent player in the industry,
              by keeping them up to date with all the market trends.
            </p>
          </div>
          <div className="dev_card">
            <div className="circle">
              <Image src={real3} alt="real3" />
            </div>

            <h3>Streamlined customer experience</h3>
            <p>
              We ensure our clients remain a competent player in the industry,
              by keeping them up to date with all the market trends.
            </p>
          </div>
          <div className="dev_card">
            <div className="circle">
              <Image src={real4} alt="real4" />
            </div>

            <h3>Become the standard website to follow</h3>
            <p>
              We ensure our clients remain a competent player in the industry,
              by keeping them up to date with all the market trends.
            </p>
          </div>
          <div className="dev_card">
            <div className="circle">
              <Image src={real5} alt="real5" />
            </div>
            <h3>Get investors on your side</h3>
            <p>
              We ensure our clients remain a competent player in the industry,
              by keeping them up to date with all the market trends.
            </p>
          </div>
          <div className="dev_card">
            <div className="circle">
              <Image src={real6} alt="real6" />
            </div>

            <h3>Maintain pace with trends</h3>
            <p>
              We ensure our clients remain a competent player in the industry,
              by keeping them up to date with all the market trends.
            </p>
          </div>
        </DevText>
      </DevSec>
    </Container>
  );
};

export default Dev;
