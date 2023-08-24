import React from "react";
import {
  Items,
  ItemsDetails,
  MainSec,
  StorySec,
  StoryText,
} from "./WhyWebevis.styles";
import { Data } from "./Data";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import Experts from "../Experts/Experts";

const WhyWebevis = () => {
  return (
    <MainSec>
      <StoryText>
        <h1>Why Webevis Technologies?</h1>
        <p>
          Teaming up with Webevis Technologies means you can trust our
          experienced social media specialists and graphic designers to tell
          your brand story and grow your social following. We make your social
          media marketing efforts work for your brand to achieve the results
          you’re looking for.
        </p>
      </StoryText>
      <ItemsDetails>
        <Container className="container-wrapper">
          {Data.map((elem, ind) => (
            <Items key={ind}>
              <div className="image-wrapper">
                <Image src={elem.img} alt={elem.title} />
              </div>
              <p>{elem.title}</p>
            </Items>
          ))}
        </Container>
        <Experts />
      </ItemsDetails>
    </MainSec>
  );
};

export default WhyWebevis;
