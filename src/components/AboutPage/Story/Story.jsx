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
            The Story of <span> Webevis Technologies</span>
          </h2>
          <h3>
            Through years of pioneering progress, we continue to forge ahead,
            crafting an inspiring and transformative journey.
          </h3>
        </StoryText>
        <StoryTimline>
          <ImageWrapper>
            <Image src={Timeline} alt="Timeline" />
          </ImageWrapper>
          <TimelineText top="5%" top1="6.5%" right="2%" right1="5%">
            <h4>2017</h4>
            <p>
              Startup ideation and planning. <br /> Analyzed the market and
              identified <br /> areas to improve.
            </p>
          </TimelineText>
          <TimelineText top="17%" top1="18.5%" left="2%" align left1="5%">
            <h4>2018</h4>
            <p>
              Startup ideation and planning. <br /> Analyzed the market and
              identified <br /> areas to improve.
            </p>
          </TimelineText>
          <TimelineText top="30%" top1="30%" right="2%" right1="5%">
            <h4>2019</h4>
            <p>
              Startup ideation and planning. <br /> Analyzed the market and
              identified <br /> areas to improve.
            </p>
          </TimelineText>
          <TimelineText top="42%" top1="41%" left="2%" align left1="5%">
            <h4>2020</h4>
            <p>
              Startup ideation and planning. <br /> Analyzed the market and
              identified <br /> areas to improve.
            </p>
          </TimelineText>
          <TimelineText top="55.5%" top1="55.5%" right="2%" right1="5%">
            <h4>2021</h4>
            <p>
              Startup ideation and planning. <br /> Analyzed the market and
              identified <br /> areas to improve.
            </p>
          </TimelineText>
          <TimelineText top="70%" top1="69%" left="2%" align left1="5%">
            <h4>2022</h4>
            <p>
              Startup ideation and planning. <br /> Analyzed the market and
              identified <br /> areas to improve.
            </p>
          </TimelineText>
          <TimelineText top="84%" top1="83%" right="2%" right1="5%">
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
