import React from "react";
import { CircleSec } from "./Circle.style";
import whiteSearch from "../../../assets/images/Services/SemServices/whiteSearch.png";
import Setting from "../../../assets/images/Services/SemServices/Setting.png";
import chartArrow from "../../../assets/images/Services/SemServices/chartArrow.png";
import arrow from "../../../assets/images/Services/SemServices/arrow.png";
import circleImg from "../../../assets/images/Services/SemServices/res.png"
import Image from "next/image";
const Circle = () => {
  return (
    <CircleSec>
      <div className="circle_border">
        <div className="circle_box">
          <Image src={circleImg} alt="circleImg" className="circleImg"/>
          <div className="setp1">1: Keyword Research And Analysis</div>
          <div className="setp2">2: Ads Creations and Landing Page Development</div>
          <div className="setp3">3: Account Setup And Tracking</div>
          <div className="setp4">4: Campaign Launch and Monitoring</div>
          <div className="setp5">5: Evaluation and Analysis</div>
          <div className="setp6">Search Engine <br/> Marketing Process</div>
        </div>
      </div>
    </CircleSec>
  );
};
export default Circle;
