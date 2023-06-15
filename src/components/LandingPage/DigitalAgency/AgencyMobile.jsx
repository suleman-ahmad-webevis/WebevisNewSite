import React, { useState } from "react";
import {
  AgencyHoverSection,
  AgencyImageSection,
  AgencyMobileWrapper,
  AgencyTransform,
} from "./AgencyMobile.styles";
import byDefault from "../../../assets/images/Designation/Section-bg.png";
import Design from "../../../assets/images/Designation/Design-bg.png";
import Customer from "../../../assets/images/Designation/Customer-bg.png";
import Fintech from "../../../assets/images/Designation/Fintech-bg.png";
import { AgencyCounter, CounterText } from "./AgencyDesk.styles";
const AgencyMobile = () => {
  const [hover, setHover] = useState(byDefault);
  const [hoverClass, sethoverClass] = useState(0);

  return (
    <AgencyMobileWrapper>
      <h1>Full Service Digital Agency</h1>
      <AgencyImageSection image={hover}>
        <AgencyHoverSection
          onMouseEnter={() => {
            setHover(byDefault);
            sethoverClass(1);
          }}
        >
          <AgencyTransform className={hoverClass === 1 ? "hover" : ""}>
            <div className="leftText">
              <h6>view Digital Marketing Services</h6>

              <h4>
                Webevis Technology is a major digital marketing agency in the
                United States, specializing in digital marketing,
              </h4>
            </div>
            <div className="headerText">
              <h2>01</h2>
              <h3>Digital Marketing</h3>
            </div>
          </AgencyTransform>
        </AgencyHoverSection>
        <AgencyHoverSection
          onMouseEnter={() => {
            setHover(Design);
            sethoverClass(2);
          }}
        >
          <AgencyTransform
            className={hoverClass === 2 ? "hover" : ""}
            trans="-78%"
            trans1="-75%"
            trans2="-74%"
            trans3="-73%"
          >
            <div className="leftText">
              <h6>view Digital Marketing Services</h6>

              <h4>
                Webevis Technology is a major digital marketing agency in the
                United States, specializing in digital marketing,
              </h4>
            </div>
            <div className="headerText">
              <h2>02</h2>
              <h3>Design Development</h3>
            </div>
          </AgencyTransform>
        </AgencyHoverSection>
        <AgencyHoverSection
          onMouseEnter={() => {
            setHover(Customer);
            sethoverClass(3);
          }}
        >
          <AgencyTransform className={hoverClass === 3 ? "hover" : ""}>
            <div className="leftText">
              <h6>view Digital Marketing Services</h6>

              <h4>
                Webevis Technology is a major digital marketing agency in the
                United States, specializing in digital marketing,
              </h4>
            </div>
            <div className="headerText">
              <h2>03</h2>
              <h3>Customer Services</h3>
            </div>
          </AgencyTransform>
        </AgencyHoverSection>
        <AgencyHoverSection
          onMouseEnter={() => {
            setHover(Fintech);
            sethoverClass(4);
          }}
        >
          <AgencyTransform className={hoverClass === 4 ? "hover" : ""}>
            <div className="leftText">
              <h6>view Digital Marketing Services</h6>

              <h4>
                Webevis Technology is a major digital marketing agency in the
                United States, specializing in digital marketing,
              </h4>
            </div>
            <div className="headerText">
              <h2>04</h2>
              <h3>Fintech Solutions</h3>
            </div>
          </AgencyTransform>
        </AgencyHoverSection>
      </AgencyImageSection>
      <AgencyCounter>
        <CounterText>
          <h4>370+</h4>
          <p>Product</p>
        </CounterText>
        <CounterText>
          <h4>150+</h4>
          <p>Client</p>
        </CounterText>
        <CounterText>
          <h4>40+</h4>
          <p>Members</p>
        </CounterText>
        <CounterText>
          <h4>200+</h4>
          <p>Partnership</p>
        </CounterText>
      </AgencyCounter>
    </AgencyMobileWrapper>
  );
};

export default AgencyMobile;
