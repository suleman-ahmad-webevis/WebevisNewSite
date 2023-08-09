import React from "react";
import Image from "next/image";
import {
  MarketFlex,
  MarketHeading,
  MarketImg,
  MarketingHeading,
  MarketingSec,
  MarketInside,
  SemFlex,
  SemSec,
} from "./Marketing.style";
import img1 from "../../semservices/assests/Group4.png";
const Marketing = () => {
  return (
    <>
      <SemSec>
        <SemFlex>
          <h1>How We Do SEM?</h1>
          <p>
            Search engines use algorithms to rank SEM ads and determine their
            search relevance. Paid search engine marketing is all about creating
            the right search engine marketing strategy, bidding on high-value
            keywords and continuously improving your search advertising tactics
            based on analytics results to lower your ad spending and improve
            profitability.
          </p>
        </SemFlex>
        <SemFlex>
          <Image src={img1} alt="img" />
        </SemFlex>
      </SemSec>
      <MarketHeading>
        <h5>search engine usage metrics</h5>
        <MarketFlex>
          <MarketInside>
            <h1>Google</h1>
            <p>92.26%</p>
          </MarketInside>
          <MarketInside>
            <h1>Bing</h1>
            <p>2.83%</p>
          </MarketInside>
          <MarketInside>
            <h1>Yahoo</h1>
            <p>1.59%</p>
          </MarketInside>
          <MarketInside>
            <h1>Baidu</h1>
            <p>1.14%</p>
          </MarketInside>
          <MarketInside>
            <h1>DuckDuckGo</h1>
            <p>1.14%</p>
          </MarketInside>
          <MarketInside>
            <h1>Yandex</h1>
            <p>0.5%</p>
          </MarketInside>
        </MarketFlex>
      </MarketHeading>
    </>
  );
};

export default Marketing;
