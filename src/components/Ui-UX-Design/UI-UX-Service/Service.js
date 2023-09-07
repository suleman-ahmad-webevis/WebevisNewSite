import React from "react";
import { ServiceContent, ServiceHolder } from "./Service.styles";
import { Container } from "src/components/Container.styles";
import Bg1 from "../../../../public/assets/images/UI-UX/ui-ux-service-1.png";
import Bg2 from "../../../../public/assets/images/UI-UX/ui-ux-service-2.png";
import MobileBg1 from "../../../../public/assets/images/UI-UX/ui-ux-service-mobile1.png";
import MobileBg2 from "../../../../public/assets/images/UI-UX/ui-ux-service-mobile2.png";
import Image from "next/image";
import { serviceData } from "./ServiceData";
const Service = () => {
  return (
    <ServiceHolder>
      <Container>
        <ServiceContent>
          <div className="Bg1">
            <Image src={Bg1} alt="Bg1" />
          </div>
          <div className="Bg2">
            <Image src={Bg2} alt="Bg2" />
          </div>
          <div className="mobile-Bg1">
            <Image src={MobileBg1} alt="Bg1" />
          </div>
          <div className="mobile-Bg2">
            <Image src={MobileBg2} alt="Bg2" />
          </div>
          <div className="Top">
            <h2>Our UI/UX Services</h2>
            <p>
              We provide a wide range of UI and UX approaches to ensure an
              efficient, engaging, and user-friendly application design. Our UI
              and UX services include:
            </p>
          </div>
          <div className="Col-holder">
            {serviceData.map((item, ind) => (
              <div key={ind} className="Col">
                <div className="img-holder">
                  <Image src={item.image} alt="ColImg1" />
                </div>
                <h3>{item.heading}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </ServiceContent>
      </Container>
    </ServiceHolder>
  );
};

export default Service;
