import React from "react";
import {
  Button,
  RankImg,
  RankSec,
  RankWrapper,
  ReadyText,
} from "./Rank.styles";
import MacBook from "../../../assets/images/seoservices/Macbook.png";
import Image from "next/image";

const Rank = () => {
  return (
    <RankWrapper>
      <RankSec>
        <ReadyText>
          <h1>👋 Ready to Rank?</h1>
          <p>
            Our free site analysis includes customized SEO recommendations
            focused on high-impact results.
          </p>
          <Button href="/">
            <h2> Book a Call</h2>
          </Button>
        </ReadyText>
        <RankImg>
          <Image src={MacBook} alt="MacBook" />
        </RankImg>
      </RankSec>
    </RankWrapper>
  );
};

export default Rank;
