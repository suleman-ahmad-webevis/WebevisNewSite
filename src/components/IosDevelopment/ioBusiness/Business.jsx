import React from "react";
import { BusinessSec } from "./Business.style";
import Image from "next/image";
import business from "../../../../public/assets/images/IosDevelopment/business.png";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
const Business = () => {
  return (
    <Container>
      <BusinessSec>
        <div className="main_business">
          <div className="business_text">
            <h3>
              Empowering Your Business Through Custom iOS Application
              Development
            </h3>
            <p>
              As a full-stack iPhone app development company we have deployed
              hundreds of native iOS apps and witnessed skyrocketing success
              rates on App Store. We are a leading iOS app development company
              that specializes in creating custom iPhone applications to meet
              all your needs. We take pride ourselves in having an exceptional
              team of developers who work tirelessly so you can get the job done
              right and provide only top-quality results!
            </p>
          </div>
          <div className="business_image">
            <Image src={business} alt="business" />
          </div>
        </div>
        <div className="btn">
          <PrimaryButton
            hover="black"
            width="271"
            minWidth="209"
            minheight="40"
            height="50"
            minsize="18"
            radius="12px"
            size="28"
          >
            Get A Free Qoute
          </PrimaryButton>
        </div>
      </BusinessSec>
    </Container>
  );
};

export default Business;
