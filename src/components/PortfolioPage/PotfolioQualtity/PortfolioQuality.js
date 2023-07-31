import React from "react";
import {
  CodeIcon,
  Dollar,
  DollarIcon,
  MarqueHolder,
  Price,
  QualityHolder,
  Qualty,
} from "./PortfolioQuality.styles";
import { Container } from "src/components/Container.styles";
import Logos from "../../../assets/images/HireDeveloper/Quality/tscables.svg";
import Logos1 from "../../../assets/images/HireDeveloper/Quality/advertising.svg";
import Logos2 from "../../../assets/images/HireDeveloper/Quality/delta.svg";
import Logos3 from "../../../assets/images/HireDeveloper/Quality/paragon.svg";
import Logos4 from "../../../assets/images/HireDeveloper/Quality/meats.svg";
import Logos5 from "../../../assets/images/HireDeveloper/Quality/original-foods.svg";
import Logos6 from "../../../assets/images/HireDeveloper/Quality/Quality6.png";
// import Laravel from "../../../assets/images/HireDeveloper/Quality/Laravel.png";
// import SQL from "../../../assets/images/HireDeveloper/Quality/SQL.png";
// import Wordpress from "../../../assets/images/HireDeveloper/Quality/Wordpress.png";
// import Golang from "../../../assets/images/HireDeveloper/Quality/Golang.png";
import Image from "next/image";

const PortfolioQuality = () => {
  return (
    <QualityHolder>
      {/* <Container> */}
      <MarqueHolder>
        <div className="flex">
          <div class="marquee-contents">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
          <div class="marquee-contents">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
          <div class="marquee-contents">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
        </div>
        <div className="flex">
          <div class="marquee-content">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
          <div class="marquee-content">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
          <div class="marquee-content">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
        </div>
        <div className="flex">
          <div class="marquee-contents">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
          <div class="marquee-contents">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
          <div class="marquee-contents">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
        </div>
        <div className="flex">
          <div class="marquee-content">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
          <div class="marquee-content">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
          <div class="marquee-content">
            <Image src={Logos} alt="Logos" />
            <Image src={Logos1} alt="Logos" />
            <Image src={Logos2} alt="Logos" />
            <Image src={Logos3} alt="Logos" />
            <Image src={Logos4} alt="Logos" />
            <Image src={Logos5} alt="Logos" />
          </div>
        </div>
      </MarqueHolder>
      {/* </Container> */}
    </QualityHolder>
  );
};

export default PortfolioQuality;
