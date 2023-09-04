import React from "react";
import { ScopeContent, ScopeHolder } from "./Scope.styles";
import { Container } from "src/components/Container.styles";
import ScopeImg from "../../../../public/assets/images/MobileApp/Scope-img.png";
import Image from "next/image";

const Scope = () => {
  return (
    <ScopeHolder>
      <Container>
        <ScopeContent>
          <div className="heading">
            <h2>Our Scope of Mobile App Development Services</h2>
            <div className="img-holder">
              <Image src={ScopeImg} alt="ScopeImg" />
            </div>
          </div>
          <div className="Content">
            <div>
              <h2>Our scope of mobile app development services</h2>
              <p>
                At Webevis, we know that every detail of the development process
                is crucial, and so we{"'"}ve built the expertise to provide a
                full range of mobile app development services. We can be
                responsible for design, coding, management, or integration, but
                we can also develop your product from scratch into a fully
                functioning application. Regardless if you{"'"}re a start-up or
                a big enterprise, we{"'"}ll adjust to your needs and create a
                beautiful digital product that meets your expectations. Here are
                some of the mobile app development services that we offer:
              </p>
              <div className="list">
                <ul>
                  <li>Product Discovery & Product Research</li>
                  <li>UX Design, UI Design & Branding</li>
                  <li>Cross-Platform Mobile App Development</li>
                  <li>Preparing a Go-To-Market Strategy</li>
                  <li>QA Advisory & Consulting</li>
                  <li>Maintenance & Support</li>
                </ul>
              </div>
            </div>
            <div className="mobile-ul">
              <div className="img-holder">
                <Image src={ScopeImg} alt="ScopeImg" />
              </div>
              <ul>
                <li>Product Discovery & Product Research</li>
                <li>UX Design, UI Design & Branding</li>
                <li>Cross-Platform Mobile App Development</li>
                <li>Preparing a Go-To-Market Strategy</li>
                <li>QA Advisory & Consulting</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
          </div>
        </ScopeContent>
      </Container>
    </ScopeHolder>
  );
};

export default Scope;
