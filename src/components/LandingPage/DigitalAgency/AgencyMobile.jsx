import React, { useState } from "react";
import {
  AgencyHoverSection,
  AgencyImageSection,
  AgencyMobileWrapper,
  AgencyTransform,
} from "./AgencyMobile.styles";
import byDefault from "../../../assets/images/Designation/Section-bg.jpg";
import Design from "../../../assets/images/Designation/Design-bg.jpg";
import Customer from "../../../assets/images/Designation/Customer-bg.jpg";
import Fintech from "../../../assets/images/Designation/Fintech-bg.jpg";
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
              {/* <h6>view Digital Marketing Services</h6> */}

              <h4>
                Webevis Technology is a major digital marketing agency <br /> in
                the United States, specializing in digital marketing,
              </h4>
            </div>
            <div className="headerText">
              <h2>01</h2>
              <h3>Web development</h3>
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
            trans3="-65%"
          >
            <div className="leftText">
              {/* <h6>view Digital Marketing Services</h6> */}

              <h4>
                Webevis Technology is a major digital marketing agency <br /> in
                the United States, specializing in digital marketing,
              </h4>
            </div>
            <div className="headerText">
              <h2>02</h2>
              <h3>Mobile Development</h3>
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
              {/* <h6>view Digital Marketing Services</h6> */}

              <h4>
                Webevis Technology is a major digital marketing agency <br /> in
                the United States, specializing in digital marketing,
              </h4>
            </div>
            <div className="headerText">
              <h2>03</h2>
              <h3>Digital Marketing</h3>
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
              {/* <h6>view Digital Marketing Services</h6> */}

              <h4>
                Webevis Technology is a major digital marketing agency <br /> in
                the United States, specializing in digital marketing,
              </h4>
            </div>
            <div className="headerText">
              <h2>04</h2>
              <h3>Customer Support</h3>
            </div>
          </AgencyTransform>
        </AgencyHoverSection>
      </AgencyImageSection>
    </AgencyMobileWrapper>
  );
};

export default AgencyMobile;
