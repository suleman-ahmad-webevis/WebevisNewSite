import React, { useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

import {
  ConterWrapper,
  CounterItem,
  CounterSec,
  Heading,
  Paragraph,
} from "./Counter.styles";

const Counter = () => {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 0,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  return (
    <CounterSec>
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
    </CounterSec>
  );
};

export default Counter;
