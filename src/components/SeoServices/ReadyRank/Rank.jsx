import React from "react";
import {
  Button,
  Expertise,
  RankImg,
  RankSec,
  RankWrapper,
  ReadyText,
} from "./Rank.styles";
import MacBook from "../../../assets/images/seoservices/Macbook.png";
import Image from "next/image";
import { SecondaryButton } from "src/components/Button.styles";
import { ContainerWrapper } from "src/components/Container.styles";

const Rank = () => {
  return (
    <ContainerWrapper>
      <RankWrapper>
        <Expertise className="container">
          <RankSec>
            <ReadyText>
              <h1>Expertise You Can Trust</h1>
              <p>
                With decades of experience in the industry, our team of
                professionals brings unmatched expertise and knowledge to every
                project.
              </p>
              <SecondaryButton
                width="301"
                height="50"
                minheight="40"
                minWidth="273.33"
                bg="white"
                size="24"
                minsize="18"
                radius="27px"
                hover="black"
              >
                <label> Get Your Free Strategy</label>
              </SecondaryButton>
            </ReadyText>
            <RankImg className="fix">
              <Image src={MacBook} alt="MacBook" />
            </RankImg>
          </RankSec>
          <RankImg className="absolute">
            <Image src={MacBook} alt="MacBook" />
          </RankImg>
        </Expertise>
      </RankWrapper>
    </ContainerWrapper>
  );
};

export default Rank;
