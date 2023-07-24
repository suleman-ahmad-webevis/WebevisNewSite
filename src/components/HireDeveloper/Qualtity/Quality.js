import React from "react";
import {
  CodeIcon,
  Dollar,
  DollarIcon,
  MarqueHolder,
  Price,
  QualityHolder,
  Qualty,
} from "./Quality.styles";
import { Container } from "src/components/Container.styles";
import Logos from "../../../assets/images/HireDeveloper/Quality/QualityLogo.png";
import Logos1 from "../../../assets/images/HireDeveloper/Quality/Quality1.png";
import Logos2 from "../../../assets/images/HireDeveloper/Quality/Quality2.png";
import Logos3 from "../../../assets/images/HireDeveloper/Quality/Quality3.png";
import Logos4 from "../../../assets/images/HireDeveloper/Quality/Quality4.png";
import Logos5 from "../../../assets/images/HireDeveloper/Quality/Quality5.png";
import Logos6 from "../../../assets/images/HireDeveloper/Quality/Quality6.png";
import Image from "next/image";

const Quality = () => {
  return (
    <QualityHolder>
      <Container>
        <Qualty>
          <Price>
            <h2>Best quality-to-price ratio</h2>
            <div className="Text">
              <Dollar bg="#28B781">
                <DollarIcon />
              </Dollar>
              <div>
                <h3>
                  Hire remote developers of Silicon Valley caliber at half the
                  price
                </h3>
                <p>
                  Work with the top 1% of 50+ remote developers from 150+
                  countries.
                </p>
              </div>
            </div>
            <div className="Text">
              <Dollar bg="#F6C453">
                <CodeIcon />
              </Dollar>
              <div>
                <h3>Choose from 100+ skills</h3>
                <p>
                  Hire remote developers with expertise in React, Node, Python,
                  Angular, Swift, React Native, Android, Java, Rails, Golang,
                  and more.
                </p>
              </div>
            </div>
          </Price>
          <MarqueHolder>
            <div class="marquee-container">
              <div className="flex">
                <div class="marquee-contents">
                  <Image src={Logos} alt="Logos" />
                  <Image src={Logos} alt="Logos" />
                </div>
                <div class="marquee-contents">
                  <Image src={Logos} alt="Logos" />
                  <Image src={Logos} alt="Logos" />
                </div>
              </div>
            </div>
            <div class="marquee-container">
              <div className="flex">
                <div class="marquee-content">
                  <Image src={Logos1} alt="Logos" />
                  <Image src={Logos1} alt="Logos" />
                </div>
                <div class="marquee-content">
                  <Image src={Logos1} alt="Logos" />
                  <Image src={Logos1} alt="Logos" />
                </div>
              </div>
            </div>
            <div class="marquee-container">
              <div className="flex">
                <div class="marquee-contents">
                  <Image src={Logos2} alt="Logos" />
                  <Image src={Logos2} alt="Logos" />
                </div>
                <div class="marquee-contents">
                  <Image src={Logos2} alt="Logos" />
                  <Image src={Logos2} alt="Logos" />
                </div>
              </div>
            </div>
            <div class="marquee-container">
              <div className="flex">
                <div class="marquee-content">
                  <Image src={Logos3} alt="Logos" />
                  <Image src={Logos3} alt="Logos" />
                </div>
                <div class="marquee-content">
                  <Image src={Logos3} alt="Logos" />
                  <Image src={Logos3} alt="Logos" />
                </div>
              </div>
            </div>
            <div class="marquee-container">
              <div className="flex">
                <div class="marquee-contents">
                  <Image src={Logos4} alt="Logos" />
                  <Image src={Logos4} alt="Logos" />
                </div>
                <div class="marquee-contents">
                  <Image src={Logos4} alt="Logos" />
                  <Image src={Logos4} alt="Logos" />
                </div>
              </div>
            </div>
            <div class="marquee-container">
              <div className="flex">
                <div class="marquee-content">
                  <Image src={Logos5} alt="Logos" />
                  <Image src={Logos5} alt="Logos" />
                </div>
                <div class="marquee-content">
                  <Image src={Logos5} alt="Logos" />
                  <Image src={Logos5} alt="Logos" />
                </div>
              </div>
            </div>
            <div class="marquee-container">
              <div className="flex">
                <div class="marquee-contents">
                  <Image src={Logos6} alt="Logos" />
                  <Image src={Logos6} alt="Logos" />
                </div>
                <div class="marquee-contents">
                  <Image src={Logos6} alt="Logos" />
                  <Image src={Logos6} alt="Logos" />
                </div>
              </div>
            </div>
          </MarqueHolder>
        </Qualty>
      </Container>
    </QualityHolder>
  );
};

export default Quality;
