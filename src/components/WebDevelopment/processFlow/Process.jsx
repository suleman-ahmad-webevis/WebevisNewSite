import React from "react";
import { ProcessSec } from "./Process.style";
import vector1 from "../../../assets/images/Services/WebDevelopmentServices/vector1.png";
import vector2 from "../../../assets/images/Services/WebDevelopmentServices/vector2.png";
import vector3 from "../../../assets/images/Services/WebDevelopmentServices/vector3.png";
import vector4 from "../../../assets/images/Services/WebDevelopmentServices/vector4.png";
import vector5 from "../../../assets/images/Services/WebDevelopmentServices/vector5.png";
import vector6 from "../../../assets/images/Services/WebDevelopmentServices/vector6.png";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
const Process = () => {
  return (
    <Container>
      <ProcessSec>
        <h2 className="heading2">Process We Follow</h2>
        <div className="main_card">
          <div className="card">
            <div className="inside_div">
              <div className="image">
                <Image src={vector1} alt="vector1" />
              </div>
              <div className="text">
                <h3>
                  Requirement <br /> Gathering
                </h3>
              </div>
            </div>
            <p>
              We follow the first and foremost priority of gathering
              requirements, resources, and information to begin our project.
            </p>
          </div>
          <div className="card">
            <div className="inside_div">
              <div className="image">
                <Image src={vector2} alt="vector2" />
              </div>
              <div className="text">
                <h3>
                  UI/UX <br /> Design
                </h3>
              </div>
            </div>

            <p>
              We create catchy and charming designs with the latest tools of
              designing to make it a best user-friendly experience.
            </p>
          </div>{" "}
          <div className="card">
            <div className="inside_div">
              <div className="image">
                <Image src={vector3} alt="vector3" />
              </div>
              <div className="text">
                <h3>Prototype</h3>
              </div>
            </div>
            <p>
              After designing, you will get your prototype, which will be sent
              ahead for the development process for the product.
            </p>
          </div>{" "}
          <div className="card">
            <div className="inside_div">
              <div className="image">
                <Image src={vector4} alt="vector4" />
              </div>
              <div className="text">
                <h3>Development</h3>
              </div>
            </div>

            <p>
              Development of mobile application/ web/ blockchain started using
              latest tools and technologies with transparency.
            </p>
          </div>{" "}
          <div className="card">
            <div className="inside_div">
              <div className="image">
                <Image src={vector5} alt="vector5" />
              </div>
              <div className="text">
                <h3>Deployment</h3>
              </div>
            </div>
            <p>
              After trial and following all processes, your app is ready to
              launch on the App store or Play Store.
            </p>
          </div>{" "}
          <div className="card">
            <div className="inside_div">
              <div className="image">
                <Image src={vector6} alt="vector6" />
              </div>
              <div className="text">
                <h3>
                  Support & <br /> Maintenance
                </h3>
              </div>
            </div>
            <p>
              Our company offers you all support and the team is always ready to
              answer every query after deployment.
            </p>
          </div>
        </div>
      </ProcessSec>
    </Container>
  );
};

export default Process;
