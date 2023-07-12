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
  const [hoverClass, setHoverClass] = useState(0);
  const handleMouseEnter = (classNumber) => {
    setHoverClass(classNumber);
  };
  return (
    <AgencyMobileWrapper>
      <h1>Full Service Digital Agency</h1>
      <AgencyImageSection
        className={`class${hoverClass}`}
        animate={hoverClass !== 0}
      >
        <AgencyHoverSection onMouseEnter={() => handleMouseEnter(1)}>
          <AgencyTransform
            className={hoverClass === 1 ? "hover" : ""}
            trans5="-48%"
            trans6="-43%"
          >
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
        <AgencyHoverSection onMouseEnter={() => handleMouseEnter(2)}>
          <AgencyTransform
            className={hoverClass === 2 ? "hover" : ""}
            trans2="-52%"
            trans4="-47%"
            trans5="-48%"
            trans6="-43%"
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
        <AgencyHoverSection onMouseEnter={() => handleMouseEnter(3)}>
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
        <AgencyHoverSection onMouseEnter={() => handleMouseEnter(4)}>
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
