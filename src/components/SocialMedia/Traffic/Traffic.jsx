import React from "react";
import {
  BoostCircul,
  Booster,
  BoostItems,
  BoostText,
  OptionIcon,
  OptionItem,
  OptionText,
  TrafficOption,
  TrafficSec,
  TrafficText,
} from "./Traffic.style";
import optimize from "../../../../public/assets/images/SocialMedia/rocket.png";
import Icon_1 from "../../../../public/assets/images/seoservices/Icon-1.png";
import Icon_2 from "../../../../public/assets/images/seoservices/Icon-2.png";
import Image from "next/image";
import { ContainerWrapper } from "src/components/Container.styles";

const Traffic = () => {
  return (
    <TrafficSec>
      <ContainerWrapper className="container-wrapper">
        <Booster>
          <Image src={optimize} alt="Booster" />
          <BoostItems>
            <BoostText>
              <BoostCircul color="#D304F6"></BoostCircul>
              <p>Instagram</p>
            </BoostText>
            <BoostText>
              <BoostCircul color="#00A2FE"></BoostCircul>
              <p>Facebook</p>
            </BoostText>
            <BoostText>
              <BoostCircul color="#3870FF"></BoostCircul>
              <p>LinkedIn</p>
            </BoostText>
            <BoostText>
              <BoostCircul color="#FB5935"></BoostCircul>
              <p>Pinterest</p>
            </BoostText>
            <BoostText>
              <BoostCircul color="#00FFF0"></BoostCircul>
              <p>Twitter</p>
            </BoostText>
          </BoostItems>
        </Booster>

        <TrafficText>
          <h2>Pay for Qualified Traffic</h2>
          <p className="center">
            We are an experienced and talented team of passionate consultants
            who live and breathe search engine marketing
          </p>
          <TrafficOption>
            <OptionItem>
              <OptionIcon>
                <Image src={Icon_2} alt="" />
              </OptionIcon>
              <OptionText>
                <h1>PPC Optimization</h1>
                <p>
                  Conversions can be website sign-ups, increased revenue from
                  transactions, increased purchases.
                </p>
              </OptionText>
            </OptionItem>
            <OptionItem>
              <OptionIcon>
                <Image src={Icon_1} alt="" />
              </OptionIcon>
              <OptionText>
                <h1>Ad Copywriting</h1>
                <p>
                  We help improve B2B companies engage buyers throughout the
                  buyers&apos; journey using SEO.
                </p>
              </OptionText>
            </OptionItem>
          </TrafficOption>
        </TrafficText>
      </ContainerWrapper>
    </TrafficSec>
  );
};

export default Traffic;
