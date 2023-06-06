import React, { useState, useLayoutEffect, useRef } from "react";
import img1 from "../../../assets/images/AboutUs/assests/mens.png";
import {
  BrilliantSec,
  BrilliantText,
  BrilliantChild,
  BrilliantImage,
} from "./Brilliant.style";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
const Brilliant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    function handleScroll() {
      const component = ref?.current;
      const rect = component?.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrilliantSec>
      <Container>
        <BrilliantChild>
          <BrilliantText isVisible={isVisible}>
            <h1>Our Brilliant and Dedicated Team Is Expert In</h1>
            <p>Digital marketing </p>
            <p ref={ref}>Design & Development</p>
            <p>Customer Services</p>
            <p>Fintech Solutions</p>
          </BrilliantText>
          <BrilliantImage>
            <Image src={img1} />
          </BrilliantImage>
        </BrilliantChild>
      </Container>
    </BrilliantSec>
  );
};

export default Brilliant;
