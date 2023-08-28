import React from "react";
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
            top2="10%"
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
            top2="21%"
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
            top2="31%"
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
            top2="41%"
            left="0%"
            align
            left1="5%"
            left2="0%"
            topText="0%"
            leftText="105%"
          >
            <h4>2020</h4>
            <p>
              Celebrating achievements, we marked our 50th project milestone,
              reinforcing our commitment to excellence.
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
              A pinnacle year with over 100 projects successfully delivered,
              accumulating 120k+ hours of dedicated work by a thriving team of
              70+ experts.
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
              A bold step onto the international stage with an office in the US
              and a second one in Lahore amplified Webevis&apos; reach, forging
              connections across continents.
            </p>
          </TimelineText>
          <TimelineText
            top="84%"
            top1="83%"
            top2="74%"
            right="0%"
            right1="5%"
            right2="0%"
            topText="0%"
            rightText="105%"
          >
            <h4>2023</h4>
            <p>
              We expanded our global footprint, establishing offices in the UK,
              marking an exciting chapter of growth.
            </p>
          </TimelineText>
        </StoryTimline>
      </div>
    </StyledStory>
  );
};

export default Story;
