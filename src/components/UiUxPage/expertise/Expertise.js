import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import { ExpertiseSec } from "./Expertise.style";
import Image from "next/image";
import { ExpertiseData } from "./ExpertiseData";
import { Container } from "src/components/Container.styles";

const Expertise = () => {
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
    return <animated.span>{number.to((n) =>Math.round(n.toFixed(1)) )}</animated.span>;
  }
  return (
    <Container>
      <ExpertiseSec>
        <p>Numbers That Speak Our Power</p>
        <h2>Raising The Bar For PSD To HTML Expertise</h2>
        <div className="main_expert" ref={ref}>
          {ExpertiseData.map((el, ind) => (
            <div className="expert" key={ind} >
              <div className="circle">
                <Image src={el.image} alt={el.image} />
              </div>
              <h3>      
                <Number n={el.title} />
+



              </h3>
              <h4>{el.descreption}</h4>
            </div>
          ))}
        </div>
      </ExpertiseSec>
    </Container>
  );
};

export default Expertise;
