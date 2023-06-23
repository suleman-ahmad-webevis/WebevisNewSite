import React, { useState } from "react";
import {
  AgencyCounter,
  AgencyMain,
  AgencyWrapper,
  Agencysection,
  AngencyTranform,
  CounterText,
} from "./AgencyDesk.styles";
import byDefault from "../../../assets/images/Designation/Section-bg.png";
import Design from "../../../assets/images/Designation/Design-bg.png";
import Customer from "../../../assets/images/Designation/Customer-bg.png";
import Fintech from "../../../assets/images/Designation/Fintech-bg.png";
import { IoMdArrowDropright } from "react-icons/io";

const AgencyDesk = () => {
  const [hover, setHover] = useState(byDefault);
  const [hoverClass, sethoverClass] = useState(0);
  return (
    <AgencyWrapper>
      <h1>Full Service Digital Agency</h1>
      <AgencyMain image={hover}>
        <Agencysection
          onMouseEnter={() => {
            setHover(byDefault);
            sethoverClass(1);
          }}
        >
          <AngencyTranform className={hoverClass === 1 ? "hover" : ""}>
            <div className="headerText">
              <h2>01</h2>
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
            setHover(Design);
            sethoverClass(2);
          }}
        >
          <AngencyTranform className={hoverClass === 2 ? "hover" : ""}>
            <div className="headerText">
              <h2>02</h2>
              <h3>Design & Development</h3>
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
              <h3>Customer Services</h3>
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
              <h3>Finetech Solutions</h3>
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
    </AgencyWrapper>
  );
};

export default AgencyDesk;