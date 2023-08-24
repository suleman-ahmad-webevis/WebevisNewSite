import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import Image from "next/image";
import {
  MarketFlex,
  MarketHeading,
  MarketImg,
  MarketingHeading,
  MarketingSec,
  MarketInside,
  SemFlex,
  SemFlexImg,
  SemSec,
} from "./Marketing.style";
import img1 from "../../semservices/assests/Group4.png";
import img1mob from "../../semservices/assests/Group4mob.png";
import { Container } from "src/components/Container.styles";
import Circle from "../circle/Circle";
const Marketing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { rootMargin: "0px", threshold: 1.0 }
    );

    const currentRef = ref.current; // Capture ref.current in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: isVisible ? n : 0,
      delay: 0,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.span>{number.to((n) => n.toFixed(2))}</animated.span>;
  }
  return (
    <>
      <Container>
        <SemSec>
          <SemFlex>
            <h1>How We Do SEM?</h1>
            <p>
              Search engines use algorithms to rank SEM ads and determine their
              search relevance. Paid search engine marketing is all about
              creating the right search engine marketing strategy, bidding on
              high-value keywords and continuously improving your search
              advertising tactics based on analytics results to lower your ad
              spending and improve profitability.
            </p>
          </SemFlex>
          <Circle />
        </SemSec>
        <MarketHeading>
          <h5>search engine usage metrics</h5>
          <MarketFlex ref={ref}>
            <MarketInside>
              <h1>Google</h1>
              <p>
                {/* <Number n={92.26} /> */}
                92.26%{" "}
              </p>
            </MarketInside>
            <MarketInside>
              <h1>Bing</h1>
              <p>
                {/* <Number n={2.83} /> */}
                2.83%{" "}
              </p>
            </MarketInside>
            <MarketInside>
              <h1>Yahoo</h1>
              <p>
                {/* <Number n={1.59} /> */}
                1.59%{" "}
              </p>
            </MarketInside>
            <MarketInside>
              <h1>Baidu</h1>
              <p>
                {/* <Number n={1.14} /> */}
                1.14%{" "}
              </p>
            </MarketInside>
            <MarketInside>
              <h1>DuckDuckGo</h1>
              <p>
                {/* <Number n={1.14} /> */}
                1.14%{" "}
              </p>
            </MarketInside>
            <MarketInside>
              <h1>Yandex</h1>
              <p>
                {/* <Number n={0.5} /> */}
                0.5%{" "}
              </p>
            </MarketInside>
          </MarketFlex>
        </MarketHeading>
      </Container>
    </>
  );
};

export default Marketing;
