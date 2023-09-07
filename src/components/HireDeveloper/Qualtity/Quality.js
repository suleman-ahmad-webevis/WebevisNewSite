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
import { FiCheck } from "react-icons/fi";
import { reactQuality } from "./QualityData";

const Quality = ({
  heading = "Best quality-to-price ratio",
  discreption = "Elevate your digital presence with our comprehensive ReactJS services designed to empower your web applications with dynamic, responsive, and user-friendly interfaces. Our team of experienced React developers is committed to delivering exceptional solutions that meet your unique business goals and user experience requirements.",
  data = reactQuality,
}) => {
  return (
    <QualityHolder>
      <Container>
        <Qualty>
          <Price>
            <h2>{heading}</h2>
            <p>{discreption}</p>
            <div className="Text">
              {data.map((elem, ind) => (
                <div className="main-text" key={ind}>
                  <Dollar bg="#28B781">
                    <FiCheck color="#fff" />
                  </Dollar>
                  <h3>{elem}</h3>
                </div>
              ))}
            </div>
          </Price>
          <MarqueHolder>
            <div class="marquee-container container1">
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
            <div class="marquee-container container2 ">
              <div className="flex ">
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
            <div class="marquee-container container3 ">
              <div className="flex ">
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
            <div class="marquee-container container4 ">
              <div className="flex ">
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
            <div class="marquee-container container5 ">
              <div className="flex ">
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
            <div class="marquee-container container6 ">
              <div className="flex ">
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
            <div class="marquee-container container7 ">
              <div className="flex ">
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
