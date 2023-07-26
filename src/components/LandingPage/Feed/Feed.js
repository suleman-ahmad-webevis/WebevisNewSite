import { Container } from "src/components/Container.styles";
import React from "react";
import Image from "next/image";
import { H2, StyledFlexWrap } from "./Feed.styles";

import Client from "../OurClient/Client";

const Feed = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <H2>{/* <h2> Our Satisfied Clients Feedback</h2> */}</H2>

      <Client />
    </>
  );
};

export default Feed;
