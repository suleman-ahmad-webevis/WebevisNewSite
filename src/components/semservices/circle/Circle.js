import React from "react";
import { CircleSec } from "./Circle.style";
import whiteSearch from "../../../assets/images/Services/SemServices/whiteSearch.png";
import Setting from "../../../assets/images/Services/SemServices/Setting.png";
import chartArrow from "../../../assets/images/Services/SemServices/chartArrow.png";
import arrow from "../../../assets/images/Services/SemServices/arrow.png";
import Image from "next/image";
import circleImg from "../../../assets/images/Services/SemServices/res.png"
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

        {/* <div className="text1">
          <p>1: Keyword Research And Analysis</p>
    
          <div className="circle first">
            <div className="green">
              <Image src={whiteSearch} alt="whiteSearch.png" className="img1" />
            </div>
          </div>
        </div>
        <div className="text2">
          <p>2: Ads Creations and Landing Page Development</p>

          <div className="circle second">
            <div className="black">
              <Image src={arrow} alt="arrow" />

            </div>
          </div>
        </div>
        <div className="text3">
          <p>3: Account Setup And Tracking </p>

          <div className="circle third">
            <div className="green">
            <Image src={whiteSearch} alt="whiteSearch.png"  className="img1"/>

            </div>
          </div>
        </div>
        <div className="text4">
          <p>5: Evaluation and Analysis </p>

          <div className="circle four">
            <div className="black">
            <Image src={chartArrow} alt="chartArrow"  className="img4" />

            </div>
          </div>
        </div>
        <div className="text5">
          <p>4: Campaign Launch and Monitoring </p>

          <div className="circle five">
            <div className="green">
            <Image src={Setting} alt="Setting" />

            </div>
          </div>
        </div> */}
      </div>
    </CircleSec>
  );
};

export default Circle;
