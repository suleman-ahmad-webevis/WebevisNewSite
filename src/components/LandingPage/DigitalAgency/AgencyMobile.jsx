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
import { PrimaryButton } from "src/components/Button.styles";
const AgencyMobile = () => {
  const [hoverClass, setHoverClass] = useState(0);
  const handleMouseEnter = (classNumber) => {
    setHoverClass(classNumber);
  };
  return (
    <AgencyMobileWrapper>
      <h1>Integrated Full Stack IT Solutions</h1>
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
                Creating visually stunning and functionally robust <br />
                websites that captivate audiences and drive online success
              </h4>
              <PrimaryButton width="200" size="10" height="25">
                View Web development Services
              </PrimaryButton>
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
                Building robust and intuitive mobile applications for iOS
                <br /> and Android platforms to deliver a seamless user
                experience
              </h4>
              <PrimaryButton width="200" size="10" height="25">
                View Mobile Development Services
              </PrimaryButton>
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
                Boosting brand visibility and accelerating growth through
                <br />
                strategic online campaigns, SEO, social media, and targeted
                advertising
              </h4>
              <PrimaryButton width="200" size="10" height="25">
                View Digital Marketing Services
              </PrimaryButton>
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
                Reliable and efficient customer support solutions that ensure{" "}
                <br />
                exceptional service and customer satisfaction every step of the
                way
              </h4>
              <PrimaryButton width="200" size="10" height="25">
                View Customer Support Services
              </PrimaryButton>
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
