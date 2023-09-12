import React from "react";
import { CompanySec } from "./Company.style";
import { Container } from "src/components/Container.styles";
import { CompanyData } from "./CompanyData";
import Image from "next/image";

const Company = () => {
  return (
    <Container>
      <CompanySec>
        <div className="texting">
          <h2>
            Why Choose Webevis as Your iOS Mobile App Development Company?
          </h2>
          <h4>
            Webevis is an iOS app development company dedicated to providing
            innovative and custom iOS app solutions to businesses of all sizes.
          </h4>
        </div>
        <div className="main_company">
          {CompanyData.map((el, ind) => (
            <div className="card" key={ind}>
              <div className="card_body">
                <div className="image">
                  <Image src={el.image} alt={el.image} />
                </div>
                <div className="text">
                  <h2>{el.title}</h2>
                  <p>{el.descreption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CompanySec>
    </Container>
  );
};

export default Company;
