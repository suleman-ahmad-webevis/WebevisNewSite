import React from "react";
import { CompanyContent, CompanyHolder } from "./DevCompany.styles";
import { Container } from "src/components/Container.styles";
import Company1 from "../../../../public/assets/images/MobileApp/Company-1.png";
import Company2 from "../../../../public/assets/images/MobileApp/Company-2.png";
import Company3 from "../../../../public/assets/images/MobileApp/Company-3.png";
import Company4 from "../../../../public/assets/images/MobileApp/Company-4.png";
import BG from "../../../../public/assets/images/MobileApp/Development-bg.png";
import MobileBg from "../../../../public/assets/images/MobileApp/Development-mobile-bg.png";
import Image from "next/image";

const DevCompany = () => {
  return (
    <CompanyHolder>
      <Container>
        <CompanyContent>
          <h2>
            The Process That Makes Us Leading Mobile <br />
            <span>App Development Company in USA?</span>
          </h2>
          <div className="Col-holder">
            <div className="bg">
              <Image src={BG} alt="BG" />
            </div>
            <div className="mobile-bg">
              <Image src={MobileBg} alt="BG" />
            </div>
            <div className="Col">
              <div className="img-holder">
                <Image src={Company1} alt="Company1" />
              </div>
              <h3>Strategy</h3>
            </div>
            <div className="Col">
              <div className="img-holder">
                <Image src={Company2} alt="Company1" />
              </div>
              <h3>Quality Assurance</h3>
            </div>
            <div className="Col">
              <div className="img-holder">
                <Image src={Company3} alt="Company1" />
              </div>
              <h3>App Store Submission</h3>
            </div>
            <div className="Col">
              <div className="img-holder">
                <Image src={Company4} alt="Company1" />
              </div>
              <h3>Post-Launch Maintenance</h3>
            </div>
          </div>
        </CompanyContent>
      </Container>
    </CompanyHolder>
  );
};

export default DevCompany;
