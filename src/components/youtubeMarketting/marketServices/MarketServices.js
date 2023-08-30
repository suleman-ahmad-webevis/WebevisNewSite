import React from "react";
import img1 from "../../../../public/assets/images/youtubeMarketting/objects.png";
import img2 from "../../../../public/assets/images/youtubeMarketting/promote.png";
import img3 from "../../../../public/assets/images/youtubeMarketting/bell.png";
import img4 from "../../../../public/assets/images/youtubeMarketting/quality.png";
import img5 from "../../../../public/assets/images/youtubeMarketting/video.png";
import img6 from "../../../../public/assets/images/youtubeMarketting/search.png";
import {
  ChildOne,
  ChildServices,
  ChildServicesOne,
  ChildServicesTwo,
  ImageWrapper,
  ParentHeading,
  ParentServices,
  PromoteSteps,
  ResponsiveImage,
  ServicesImage,
  StepsText,
} from "./MarketServices.style";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
const MarketServices = () => {
  return (
    <Container>
      <ParentHeading>
        <h1>Why Need to Avail Yotube Marketing Services From Us?</h1>
        <p>
          We are a dedicated team of highly qualified engineers who are always
          ready to assist you to optimize your videos on your YouTube Channel.
          It is 100% guaranteed that the content used is in the video is
          informative and simple for the viewer to be understand.
        </p>
      </ParentHeading>
      <ParentServices>
        <ServicesImage>
          <Image src={img1} alt="img1" />
        </ServicesImage>
        <PromoteSteps direction>
          <ImageWrapper>
            <Image src={img2} alt="img" />
          </ImageWrapper>
          <StepsText data="01" bg>
            <h4>Promote Channel In Budget</h4>
            <p>
              Once the video is channelized on YouTube, it is also required to
              promote your videos so that multiple users got to know and watch.
              In such condition, we guide you to reach the users to your
              released video made for promotion purposes.
            </p>
          </StepsText>
        </PromoteSteps>
        <PromoteSteps top="27%">
          <ImageWrapper>
            <Image src={img3} alt="img" />
          </ImageWrapper>
          <StepsText data="02">
            <h4>Create Personalized YouTube Channel</h4>
            <p>
              We are the only resource who can instantly understand what you
              required for your YouTube Video Promotion and having the
              proficiency to create a customized channel which gives you
              full-proof of marketing experience with loads of enjoyment.
            </p>
          </StepsText>
        </PromoteSteps>
        <PromoteSteps top="45%" direction>
          <ImageWrapper>
            <Image src={img4} alt="img" />
          </ImageWrapper>
          <StepsText data="03" bg>
            <h4>Quality Content To Target Audience</h4>
            <p>
              YouTube Video Content playing the main role to collect audiences.
              Therefore, we suggest you what exactly have to put in your videos
              as showing the perfect information will let your videos be
              entertaining by audiences.
            </p>
          </StepsText>
        </PromoteSteps>
        <PromoteSteps top="60%">
          <ImageWrapper>
            <Image src={img5} alt="img" />
          </ImageWrapper>
          <StepsText data="04">
            <h4>Produce Complete Transcription Of Video</h4>
            <p>
              From us, you can get the benefit of developing the complete
              transcription of video as apparently a written or printed version
              of created video is very much helpful in the business achievement
              and gathering viewers.
            </p>
          </StepsText>
        </PromoteSteps>
        <PromoteSteps top="77%" direction>
          <ImageWrapper>
            <Image src={img6} alt="img" />
          </ImageWrapper>
          <StepsText data="05" bg>
            <h4>Generate Keywords And Specific Titles</h4>
            <p>
              Before using keywords in your content, we deeply research on
              internet, analyze the most searchable one, and then choose the
              accurate keywords. However, we also optimize your video to promote
              using targeted keywords for your brand.
            </p>
          </StepsText>
        </PromoteSteps>
      </ParentServices>
    </Container>
  );
};

export default MarketServices;
