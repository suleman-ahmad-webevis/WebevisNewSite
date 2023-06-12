import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";

import {
  ConterWrapper,
  CounterItem,
  CounterSec,
  Heading,
  Paragraph,
} from "./Counter.styles";
import Aos from "aos";
import "aos/dist/aos.css";

const Counter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    Aos.init();

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
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  return (
    <CounterSec ref={ref} data-aos="zoom-in-down">
      {isVisible && (
        <ConterWrapper>
          <CounterItem>
            <Heading>
              <Number n={150} /> +
            </Heading>
            <Paragraph>Happy Clients</Paragraph>
          </CounterItem>
          <CounterItem>
            <Heading>
              <Number n={50} /> +
            </Heading>
            <Paragraph>Client Globly</Paragraph>
          </CounterItem>
          <CounterItem>
            <Heading>
              <Number n={100} />+
            </Heading>
            <Paragraph>User Aquired</Paragraph>
          </CounterItem>
          <CounterItem>
            <Heading>
              <Number n={15} />+
            </Heading>
            <Paragraph>Partnership</Paragraph>
          </CounterItem>
        </ConterWrapper>
      )}
    </CounterSec>
  );
};

export default Counter;
