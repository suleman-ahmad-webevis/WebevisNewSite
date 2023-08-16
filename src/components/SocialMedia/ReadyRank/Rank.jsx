import React from "react";
import {
  Button,
  RankImg,
  RankSec,
  RankWrapper,
  ReadyText,
} from "./Rank.styles";
import MacBook from "../../../assets/images/SocialMedia/Macbook.png";
import Image from "next/image";
import { Container } from "src/components/Container.styles";

const Rank = () => {
  return (
    <Container resPadding="0">
      <RankWrapper>
        <RankSec>
          <ReadyText>
            <h1>Need Help with Your Next Social Media Project?</h1>

            <Button href="/">
              <h2>Request a free audit</h2>
            </Button>
            <p>
              Get a free, no-obligation social media marketing performance
              evaluation.
            </p>
          </ReadyText>
          <RankImg>
            <Image src={MacBook} alt="MacBook" />
          </RankImg>
        </RankSec>
      </RankWrapper>
    </Container>
  );
};

export default Rank;
