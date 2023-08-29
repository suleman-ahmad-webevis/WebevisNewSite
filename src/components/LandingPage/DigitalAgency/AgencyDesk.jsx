import React, { useState, useEffect } from "react";

import {
  AgencyCounter,
  AgencyMain,
  AgencyWrapper,
  Agencysection,
  AngencyTranform,
  CounterText,
} from "./AgencyDesk.styles";

import { IoMdArrowDropright } from "react-icons/io";
import { Container } from "src/components/Container.styles";

const AgencyDesk = () => {
  const [hoverClass, setHoverClass] = useState(0);

  const handleMouseEnter = (classNumber) => {
    setHoverClass(classNumber);
  };

  return (
    <Container resPadding="0">
      <AgencyWrapper>
        <h1>Integrated Full Stack IT Solutions</h1>
        <div style={{ overflow: "hidden" }}>
          <AgencyMain
            className={`class${hoverClass}`}
            animate={hoverClass !== 0}
          >
            <Agencysection onMouseEnter={() => handleMouseEnter(1)}>
              <AngencyTranform className={hoverClass === 1 ? "hover" : ""}>
                <div className="headerText">
                  <h2>01</h2>
                  <h3>Web development</h3>
                </div>
                <div className="leftText">
                  <h4>
                    Creating visually stunning and functionally robust websites
                    that captivate audiences and drive online success
                  </h4>
                  <h6>view Web development Services</h6>
                </div>
              </AngencyTranform>
            </Agencysection>
            <Agencysection
              onMouseEnter={() => handleMouseEnter(2)}
              // onMouseLeave={() => handleMouseEnter(0)}
            >
              <AngencyTranform className={hoverClass === 2 ? "hover" : ""}>
                <div className="headerText">
                  <h2>02</h2>
                  <h3>Mobile Development</h3>
                </div>
                <div className="leftText">
                  <h4>
                    Building robust and intuitive mobile applications for iOS
                    and Android platforms to deliver a seamless user experience
                  </h4>
                  <h6>
                    view Mobile Development Services
                    <span>{/* <IoMdArrowDropright /> */}</span>
                  </h6>
                </div>
              </AngencyTranform>
            </Agencysection>
            <Agencysection onMouseEnter={() => handleMouseEnter(3)}>
              <AngencyTranform className={hoverClass === 3 ? "hover" : ""}>
                <div className="headerText">
                  <h2>03</h2>
                  <h3>Digital Marketing</h3>
                </div>
                <div className="leftText">
                  <h4>
                    Boosting brand visibility and accelerating growth through
                    strategic online campaigns, SEO, social media, and targeted
                    advertising
                  </h4>
                  <h6>view Digital Marketing Services</h6>
                </div>
              </AngencyTranform>
            </Agencysection>
            <Agencysection onMouseEnter={() => handleMouseEnter(4)}>
              <AngencyTranform className={hoverClass === 4 ? "hover" : ""}>
                <div className="headerText">
                  <h2>04</h2>
                  <h3>Customer Support</h3>
                </div>
                <div className="leftText">
                  <h4>
                    Reliable and efficient customer support solutions that
                    ensure exceptional service and customer satisfaction every
                    step of the way
                  </h4>
                  <h6>view Customer Support Services</h6>
                </div>
              </AngencyTranform>
            </Agencysection>
          </AgencyMain>
        </div>
      </AgencyWrapper>
    </Container>
  );
};

export default AgencyDesk;
