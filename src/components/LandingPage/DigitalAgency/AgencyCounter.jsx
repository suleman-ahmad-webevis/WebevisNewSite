import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { AgencyCount, CounterText } from "./AgencyCounter.style";

const AgencyCounter = () => {
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
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  return (
    <AgencyCount ref={ref}>
      <CounterText>
        <h4>
          <Number n={370} />+
        </h4>
        <p>Product</p>
      </CounterText>
      <CounterText>
        <h4>
          <Number n={150} />+
        </h4>
        <p>Client</p>
      </CounterText>
      <CounterText>
        <h4>
          <Number n={40} />+
        </h4>
        <p>Members</p>
      </CounterText>
      <CounterText>
        <h4>
          <Number n={200} />+
        </h4>
        <p>Partnership</p>
      </CounterText>
    </AgencyCount>
  );
};

export default AgencyCounter;
