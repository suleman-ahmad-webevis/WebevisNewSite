import React from "react";
import { ComMain, ComSec } from "./ComWeb.style";
import { Container } from "src/components/Container.styles";
import tick from "../../../../public/assets/images/ECommerencePage/tick.png"
import Image from "next/image";
const ComWeb = () => {
  return (
    <Container>
      <ComSec>
        <h2>
          Our eCommerce Web Development <br /> Process
        </h2>
        <ComMain>
          <div className="card">
            <div className="heading">
              <h3>In the First 24 Hours</h3>
            </div>
            <ul>
              <li>
                <h6>1</h6>
                <span>
                   We gauge and understand your requirements and align
                  a technical analyst
                </span>
              </li>
              <li>
                <h6>2</h6>{" "}
                <span>
                  Based on the discussions, we create a project roadmap
                </span>
              </li>
              <li>
                <h6>3</h6>{" "}
                <span>
                  A quote is presented after all the questions are answered{" "}
                </span>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="heading">
              <h3>After the Quote Gets Approved</h3>
            </div>
            <ul>
              <li>
                <h6>1</h6>

                <span>
                  {" "}
                  We create the project on Bitrix24 CRM and assign the project
                  manager
                </span>
              </li>
              <li>
                <h6>2</h6>{" "}
                <span> Our team starts developing your eCommerce store </span>
              </li>
              <li>
                <h6>3</h6>{" "}
                <span>
                  Timely updates are shared, and feedback is annotated{" "}
                </span>
              </li>
              <li>
                <h6>4</h6>

                <span>
                  {" "}
                  The website is tested meticulously with a manual and automated
                  approach
                </span>
              </li>
              <li>
                <h6>5</h6>

                <span>
                  We share the test reports with you and fix issues before
                  delivery
                </span>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="heading">
              <h3>Launch</h3>
            </div>
            <ul>
              <li>
                <h5>

                <Image src={tick} alt="tick"/>
                </h5>
                {" "}
                <span>
                  We publish the website on your live server (or share it in ZIP
                  file format)
                </span>
              </li>
              <li>
                <h5>

              <Image src={tick} alt="tick"/>
                </h5>

                <span>
                  We provide post-launch website support, offering support &
                  maintenance services to resolve all your technical issues.
                </span>
              </li>
            </ul>
          </div>
        </ComMain>
      </ComSec>
    </Container>
  );
};

export default ComWeb;
