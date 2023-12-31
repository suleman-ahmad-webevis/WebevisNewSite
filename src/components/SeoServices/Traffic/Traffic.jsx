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
import optimize from "../../../../public/assets/images/seoservices/optimize.png";
import Icon_1 from "../../../../public/assets/images/seoservices/Icon-1.png";
import Icon_2 from "../../../../public/assets/images/seoservices/Icon-2.png";
import Image from "next/image";
import { Container } from "src/components/Container.styles";

const Traffic = () => {
  return (
    <TrafficSec>
      <Container className="container">
        <Booster>
          <Image src={optimize} alt="Booster" />
          <BoostItems>
            <BoostText>
              <BoostCircul></BoostCircul>
              <p>On-Page SEO</p>
            </BoostText>
            <BoostText>
              <BoostCircul color="#00EFFE"></BoostCircul>
              <p>Off-Page SEO</p>
            </BoostText>
            <BoostText>
              <BoostCircul color="#28B781"></BoostCircul>
              <p>Technical SEO</p>
            </BoostText>
            <BoostText>
              <BoostCircul color="#FFCC03"></BoostCircul>
              <p>AI Competitive Analysis</p>
            </BoostText>
            <BoostText>
              <BoostCircul color="#5677FF"></BoostCircul>
              <p>Keyword Analysis</p>
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
                <Image src={Icon_2} alt="img" />
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
                <Image src={Icon_1} alt="img" />
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
      </Container>
    </TrafficSec>
  );
};

export default Traffic;
