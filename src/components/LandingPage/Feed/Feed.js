import { Container } from "src/components/Container.styles";
import React from "react";
import clent from "../../../assets/images/Feedback/client.png";
import Image from "next/image";
import { Client, H2, StyledFlexWrap } from "./Feed.styles";
import { Flex } from "src/components/Flex.styles";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Feed = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <>
      <H2>
        <h2> Our Satisfied Clients Feedback</h2>
      </H2>
      <Client>
        <Container>
          <Slider {...settings}>
          <div className="Section">
            <div>
              <p>
                They’re probably one of the easiest vendors I’ve ever worked
                with in the digital space. They have our best interests in mind.
                The team went the extra mile in negotiating costs and delivering
                within a flexible scope. They’re customer focused and strong in
                terms of development quality.
              </p>
              <h4>Dominika Drońska</h4>
              <span>Senior Digital Marketing Manager, Abbey Road Studios</span>
              <StyledFlexWrap content="none" Align="end" Gap="5px">
                <h3>Read More Reviews</h3>
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </StyledFlexWrap>
            </div>
            <div className="Image">
              <Image src={clent} alt="" />
            </div>
          </div>
          <div className="Section">
            <div>
              <p>
                They’re probably one of the easiest vendors I’ve ever worked
                with in the digital space. They have our best interests in mind.
                The team went the extra mile in negotiating costs and delivering
                within a flexible scope. They’re customer focused and strong in
                terms of development quality.
              </p>
              <h4>Dominika Drońska</h4>
              <span>Senior Digital Marketing Manager, Abbey Road Studios</span>
              <Flex content="none" Align="end" Gap="5px">
                <h3>Read More Reviews</h3>
                <span class="material-symbols-outlined">arrow_right_alt</span>
              </Flex>
            </div>
            <div className="Image">
              <Image src={clent} alt="" />
            </div>
          </div>
            </Slider>
        </Container>
      </Client>
    </>
  );
};

export default Feed;
