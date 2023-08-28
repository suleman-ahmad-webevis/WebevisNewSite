import React from "react";
import { Card, CardHolder, MethdologyHolder } from "./Methdology.styles";
import { Container } from "src/components/Container.styles";
import CardImg1 from "../../../assets/images/Graphic/Meth-img1.png";
import CardImg2 from "../../../assets/images/Graphic/Meth-img2.png";
import CardImg3 from "../../../assets/images/Graphic/Meth-img3.png";
import Image from "next/image";
const cardData = [
  {
    icon: CardImg1,
    heading: "Ideation and Approach",
    list1: "Analyze the idea",
    list2: "Gather the design requirements",
    list3: "Prepare a strategy and timeline",
  },
  {
    icon: CardImg2,
    heading: "Defining Tools Used",
    list1: "Research design trends",
    list2: "Select tools and tech stack",
    list3: "Define wireframes",
  },
  {
    icon: CardImg3,
    heading: "Designing",
    list1: "Start designing",
    list2: "Craft creative output",
    list3: "Test the results and finalize  ",
  },
];
const Methdology = () => {
  return (
    <MethdologyHolder>
      <Container>
        <div>
          <h2>Methodology Graphic Designers Approaches</h2>
          <p>
            Get an overview of the working process that graphic designers follow
            for all the purposes.
          </p>
        </div>
        <CardHolder>
          {cardData.map((item, ind) => (
            <div className="Card" key={ind}>
              <div className="img-holder">
                <Image src={item.icon} alt="icon" />
              </div>
              <h3>{item.heading}</h3>
              <ul>
                <li>{item.list1}</li>
                <li>{item.list2}</li>
                <li>{item.list3}</li>
              </ul>
            </div>
          ))}
        </CardHolder>
      </Container>
    </MethdologyHolder>
  );
};

export default Methdology;
