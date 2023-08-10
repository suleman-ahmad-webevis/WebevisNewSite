import React from "react";
import { ContainerWrapper } from "src/components/Container.styles";
import {
  ImageWrapper,
  StoryText,
  StoryTimline,
  StyledStory,
  TimelineText,
} from "./Story.styles";
import Timeline from "../../../assets/images/AboutUs/timeline.png";
import Image from "next/image";
const Story = () => {
  return (
    <StyledStory>
      <div className="container">
        <StoryText>
          <h2>
            Webevis Technologies — <span>Journey To Excellence</span>
          </h2>
          <h3>
            Discover the journey of Webevis Technologies, where innovation has
            driven transformative growth and success.
          </h3>
        </StoryText>
        <StoryTimline>
          <ImageWrapper>
            <Image src={Timeline} alt="Timeline" />
          </ImageWrapper>
          <TimelineText
            top="5%"
            top1="6.5%"
            top2="8.5%"
            right="0%"
            right1="5%"
            right2="0%"
            topText="0%"
            rightText="105%"
          >
            <h4>2017</h4>
            <p>
              Embarking on our journey, Webevis Technologies strategized and
              launched its innovative vision, setting up its first remote
              office.
            </p>
          </TimelineText>
          <TimelineText
            top="17%"
            top1="18.5%"
            top2="18%"
            left="0%"
            align
            left1="5%"
            left2="0%"
            topText="1%"
            leftText="105%"
          >
            <h4>2018</h4>
            <p>
              Accelerating growth, we boarded our pioneering fintech client and
              surpassed 20 projects, expanding our team.
            </p>
          </TimelineText>
          <TimelineText
            top="30%"
            top1="30%"
            top2="29%"
            right="0%"
            right1="5%"
            right2="0%"
            topText="0%"
            rightText="105%"
          >
            <h4>2019</h4>
            <p>
              Expanding horizons, Webevis established its first office in
              Lahore, Pakistan, and grew its team to 20+ members.
            </p>
          </TimelineText>
          <TimelineText
            top="42%"
            top1="41%"
            top2="39%"
            left="0%"
            align
            left1="5%"
            left2="0%"
            topText="0%"
            leftText="105%"
          >
            <h4>2020</h4>
            <p>
              A bold step onto the international stage with offices in the UK
              and the US amplified Webevis&apos; reach, forging connections
              across continents.
            </p>
          </TimelineText>
          <TimelineText
            top="55.5%"
            top1="55.5%"
            top2="51%"
            right="0%"
            right1="5%"
            right2="0%"
            topText="0%"
            rightText="105%"
          >
            <h4>2021</h4>
            <p>
              A pinnacle year with over 140 projects successfully delivered,
              accumulating 150k+ hours of dedicated work by a thriving team of
              100+ experts.
            </p>
          </TimelineText>
          <TimelineText
            top="70%"
            top1="69%"
            top2="63%"
            left="0%"
            align
            left1="5%"
            left2="0%"
            topText="0%"
            leftText="105%"
          >
            <h4>2022</h4>
            <p>
              We expanded our global footprint, establishing offices in Dubai
              and a second one in Lahore, marking an exciting chapter of growth.
            </p>
          </TimelineText>
          <TimelineText
            top="84%"
            top1="83%"
            top2="75%"
            right="2%"
            right1="5%"
            right2="0%"
            topText="0%"
            rightText="105%"
          >
            <h4>2023</h4>
            <p>
              Startup ideation and planning. <br /> Analyzed the market and
              identified <br /> areas to improve.
            </p>
          </TimelineText>
        </StoryTimline>
      </div>
    </StyledStory>
  );
};

export default Story;
