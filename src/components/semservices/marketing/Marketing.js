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
// import img1 from "../../semservices/assests/circle.png";
// import img2 from "../../semservices/assests/vector2.png";
// import img3 from "../../semservices/assests/vector3.png";
// import img4 from "../../semservices/assests/vector4.png";
// import img5 from "../../semservices/assests/vector5.png";
// import img6 from "../../semservices/assests/video1.png";

const Marketing = () => {
  return (
    <>
      {/* <MarketingSec> */}
      {/* <MarketImg>
          <Image src={img2} />
          <h3>2: Ads Creations and Landing Page Development</h3>
        </MarketImg>
        <MarketImg>
          <Image src={img3} />
          <h3>1: Keyword Research And Analysis</h3>
        </MarketImg>
        <MarketingHeading>
          <Image src={img1} />
          <h1>Search Engine Marketing Process</h1>
        </MarketingHeading>
        <MarketImg>
          <Image src={img4} />
          <h3>5: Evaluation and Analysis</h3>
        </MarketImg>
        <MarketImg>
          <Image src={img5} />
          <h3>4: Campaign Launch and Monitoring</h3>
        </MarketImg>
        <MarketImg>
          <Image src={img6} />
          <h3>3: Account Setup And Tracking</h3>
        </MarketImg> */}
      {/* </MarketingSec> */}
      {/* this is new section in the website */}
      {/* this is the new section in the website */}
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
