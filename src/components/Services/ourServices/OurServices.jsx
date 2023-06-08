"use cleint";
import React, { useState, useEffect } from "react";
import {
  Arrow,
  ServiceSec,
  ServiceSlider,
  ServiceTxt,
  SliderImg,
  SliderText,
} from "./OurServices.styles";
import bg from "../../../assets/images/Services/sliderbg.png";
import bg2 from "../../../assets/images/Services/bg2.png";
import sliderimg from "../../../assets/images/Services/sliderimg.png";
import arrow from "../../../assets/images/Services/arrow.png";
import arrowb from "../../../assets/images/Services/arrowb.png";
import digital from "../../../assets/images/Services/digital.png";
import fintech from "../../../assets/images/Services/fintech.png";
import customer from "../../../assets/images/Services/customer.png";
import design from "../../../assets/images/Services/design.png";
import Image from "next/image";

const OurServices = () => {
  const [toogleimg, setToogleimg] = useState(bg2);
  const [color, setColor] = useState("white");
  const [show, setShow] = useState(true);
  const reverse = () => {
    setToogleimg(bg2);
    setShow(true);
  };
  useEffect(() => {}, []);

  return (
    <ServiceSec>
      <ServiceTxt>
        <p>Digital Marketing Services</p>
        <h3>What We Do Best</h3>
      </ServiceTxt>
      <ServiceSlider image={toogleimg}>
        <SliderText color={color}>
          <p>We specialize in </p>
          <Arrow
            onMouseEnter={() => {
              setToogleimg(digital);
              setShow(false);
            }}
            onMouseLeave={reverse}
          >
            <h2
              color={color}
              onMouseEnter={() => {
                setColor("#424954");
              }}
              onMouseLeave={() => setColor("white")}
            >
              Digital marketing
            </h2>
            <Image src={arrowb} alt="arrow" />
          </Arrow>
          <Arrow
            onMouseEnter={() => {
              setToogleimg(design);
              setShow(false);
            }}
            onMouseLeave={reverse}
          >
            <h2>design & development</h2>
            <Image src={arrow} alt="arrow" />
          </Arrow>
          <Arrow
            onMouseEnter={() => {
              setToogleimg(customer);
              setShow(false);
            }}
            onMouseLeave={reverse}
          >
            <h2>Customer services</h2>
            <Image src={arrow} alt="arrow" />
          </Arrow>
          <Arrow
            onMouseEnter={() => {
              setToogleimg(fintech);
              setShow(false);
            }}
            onMouseLeave={reverse}
          >
            <h2>fintech solutions</h2>
            <Image src={arrow} alt="arrow" />
          </Arrow>
        </SliderText>
        {show && (
          <SliderImg className="remove">
            <Image src={sliderimg} alt="" />
          </SliderImg>
        )}
      </ServiceSlider>
    </ServiceSec>
  );
};

export default OurServices;
