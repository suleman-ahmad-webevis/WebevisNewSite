import React from "react";
import { ProcessSec } from "./Process.style";
import { Container } from "src/components/Container.styles";
import img1 from "../../../../public/assets/images/ReactNative/processOne.png";
import img2 from "../../../../public/assets/images/ReactNative/processTwo.png";
import img3 from "../../../../public/assets/images/ReactNative/processThree.png";
import img4 from "../../../../public/assets/images/ReactNative/processFour.png";
import img5 from "../../../../public/assets/images/ReactNative/processFive.png";
import img6 from "../../../../public/assets/images/ReactNative/processSix.png";
import Image from "next/image";
const ProcessData = [
  {
    id: 1,
    image: img1,
    title: "Requirement Gathering",
  },
  {
    id: 2,
    image: img2,
    title: "Design",
  },
  {
    id: 3,
    image: img3,
    title: "Development",
  },
  {
    id: 4,
    image: img4,
    title: "Testing",
  },
  {
    id: 5,
    image: img5,
    title: "Deployment",
  },
  {
    id: 6,
    image: img6,
    title: "Maintenance & Support",
  },
];
const Process = () => {
  return (
    <Container>
      <ProcessSec>
        <h2>Our React Native App Development Process</h2>
        <div className="main_process">
          {ProcessData.map((el, ind) => (
            <div className="process_card" key={ind}>
              <div className="image">
                <Image src={el.image} alt={el.image} />
              </div>
              <div className="text">
                <h3>{el.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </ProcessSec>
    </Container>
  );
};

export default Process;
