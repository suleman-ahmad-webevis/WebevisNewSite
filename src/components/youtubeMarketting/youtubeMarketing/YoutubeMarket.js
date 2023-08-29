import React from "react";
import {
  Button,
  FlexImage,
  FlexOne,
  HeadingDiv,
  Market,
  MarketCenter,
  MarketFlex,
  MarketFlex1,
  MarketFlex2,
  MarketParent,
} from "./YouTubeMarket.style";
import Phone from "../../../assets/images/Services/youtubeMarketting/phone.png";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";

const YoutubeMarket = () => {
  return (
    <Container>
      <Market>
        <MarketCenter>
          <h1>Our Youtube Marketing Services</h1>
          <p>
            Webevis Technologies is an all-inclusive digital marketing agency
            that provides covers all facets of your youtube marketing
            strategies. From refining your target audience and developing a full
            content marketing strategy to creating videos, its optimization,
            distribution, analytics, and more, we handle all your youtube
            marketing service needs from one space.
          </p>
        </MarketCenter>
        <MarketParent>
          <MarketFlex>
            <FlexOne>
              <HeadingDiv>
                <h2>1</h2>
              </HeadingDiv>
              <h1>Customized Youtube Channel</h1>
              <p>
                With an understanding of your requirements, we create a
                customized youtube channel that gives you a seamless experience
                of entertaining your audience with meaningful content to relate
                with.
              </p>
            </FlexOne>
            <FlexOne>
              <HeadingDiv>
                <h2>2</h2>
              </HeadingDiv>
              <h1>Youtube Management</h1>
              <p>
                To organically promote your youtube channel, our team of social
                media managers, consultants, and strategists deliver end-to-end
                youtube management services including
              </p>
            </FlexOne>
            <FlexOne>
              <HeadingDiv>
                <h2>3</h2>
              </HeadingDiv>
              <h1>Video Description Copywriting</h1>
              <p>
                To organically promote your youtube channel, our team of social
                media managers, consultants, and strategists deliver end-to-end
                youtube management services including
              </p>
            </FlexOne>
          </MarketFlex>
          <MarketFlex1>
            <Image src={Phone} alt="" />
            <PrimaryButton
              width="330"
              height="50"
              minheight="40"
              radius="13px"
              size="18"
              minsize="16"
              weight="700"
            >
              Book Free Consultation Call
            </PrimaryButton>
          </MarketFlex1>
          <MarketFlex2>
            <FlexOne>
              <HeadingDiv>
                <h2>4</h2>
              </HeadingDiv>
              <h1>Video Creation</h1>
              <p>
                With an understanding of your requirements, we create a
                customized youtube channel that gives you a seamless experience
                of entertaining your audience with meaningful content to relate
                with.
              </p>
            </FlexOne>
            <FlexOne>
              <HeadingDiv>
                <h2>5</h2>
              </HeadingDiv>
              <h1>Youtube Video SEO</h1>
              <p>
                To organically promote your youtube channel, our team of social
                media managers, consultants, and strategists deliver end-to-end
                youtube management services including
              </p>
            </FlexOne>
            <FlexOne>
              <HeadingDiv>
                <h2>6</h2>
              </HeadingDiv>
              <h1>Youtube Video Syndication and Distribution</h1>
              <p>
                To organically promote your youtube channel, our team of social
                media managers, consultants, and strategists deliver end-to-end
                youtube management services including
              </p>
            </FlexOne>
          </MarketFlex2>
        </MarketParent>
      </Market>
    </Container>
  );
};

export default YoutubeMarket;
