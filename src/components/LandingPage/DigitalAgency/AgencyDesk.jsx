import React, { useState } from "react";

import {
  AgencyCounter,
  AgencyMain,
  AgencyWrapper,
  Agencysection,
  AngencyTranform,
  CounterText,
} from "./AgencyDesk.styles";
import byDefault from "../../../assets/images/Designation/Section-bg.jpg";
import Design from "../../../assets/images/Designation/Design-bg.jpg";
import Customer from "../../../assets/images/Designation/Customer-bg.jpg";
import Fintech from "../../../assets/images/Designation/Fintech-bg.jpg";
import { IoMdArrowDropright } from "react-icons/io";

const AgencyDesk = () => {
  const [hover, setHover] = useState(byDefault);
  const [hoverClass, sethoverClass] = useState(0);

  return (
    <AgencyWrapper>
      <h1>Full Stack Digital Agency Provides</h1>
      <AgencyMain image={hover} className="zoomIn">
        <Agencysection
          onMouseEnter={() => {
            setHover(byDefault);
            sethoverClass(1);
          }}
        >
          <AngencyTranform className={hoverClass === 1 ? "hover" : ""}>
            <div className="headerText">
              <h2>01</h2>
              <h3>Web development</h3>
            </div>
            <div className="leftText">
              <h4>
                Webevis Technology is a major digital marketing agency in the
                United States, specializing in digital marketing, graphic
                design,
              </h4>
              <h6>view Digital Marketing Services</h6>
            </div>
          </AngencyTranform>
        </Agencysection>
        <Agencysection
          onMouseEnter={() => {
            setHover(Design);
            sethoverClass(2);
          }}
        >
          <AngencyTranform className={hoverClass === 2 ? "hover" : ""}>
            <div className="headerText">
              <h2>02</h2>
              <h3>Mobile Development</h3>
            </div>
            <div className="leftText">
              <h4>
                Webevis Technology is a major digital marketing agency in the
                United States, specializing in digital marketing, graphic
                design,
              </h4>
              <h6>
                view Digital Marketing Services
                <span>{/* <IoMdArrowDropright /> */}</span>
              </h6>
            </div>
          </AngencyTranform>
        </Agencysection>
        <Agencysection
          onMouseEnter={() => {
            setHover(Customer);
            sethoverClass(3);
          }}
        >
          <AngencyTranform className={hoverClass === 3 ? "hover" : ""}>
            <div className="headerText">
              <h2>03</h2>
              <h3>Digital Marketing</h3>
            </div>
            <div className="leftText">
              <h4>
                Webevis Technology is a major digital marketing agency in the
                United States, specializing in digital marketing, graphic
                design,
              </h4>
              <h6>view Digital Marketing Services</h6>
            </div>
          </AngencyTranform>
        </Agencysection>
        <Agencysection
          onMouseEnter={() => {
            setHover(Fintech);
            sethoverClass(4);
          }}
        >
          <AngencyTranform className={hoverClass === 4 ? "hover" : ""}>
            <div className="headerText">
              <h2>04</h2>
              <h3>Customer Support</h3>
            </div>
            <div className="leftText">
              <h4>
                Webevis Technology is a major digital marketing agency in the
                United States, specializing in digital marketing, graphic
                design,
              </h4>
              <h6>view Digital Marketing Services</h6>
            </div>
          </AngencyTranform>
        </Agencysection>
      </AgencyMain>
    </AgencyWrapper>
  );
};

export default AgencyDesk;
