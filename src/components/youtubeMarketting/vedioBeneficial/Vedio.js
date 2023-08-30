import React from "react";
import img1 from "../../../../public/assets/images/youtubeMarketting/audience.png";
import img2 from "../../../../public/assets/images/youtubeMarketting/vedios.png";
import img3 from "../../../../public/assets/images/youtubeMarketting/youtube.png";

import {
  ParentText,
  ResponsiveImage,
  TextImage,
  VedioFlex,
  VedioImage,
  VedioText,
  VideoMain,
  TextInside
} from "./Vedio.style";
import Image from "next/image";
import { Container } from "src/components/Container.styles";

const Vedio = () => {
  return (
    <Container>
      <ParentText>
        <h2>OUR PROCESS</h2>
        <h1>Get a video process that delivers results.</h1>
        <p>
          Showcase what makes you great with help from our experienced YouTube
          Ads agency team.
        </p>
      </ParentText>
      <VedioFlex>
        <VideoMain>
          <VedioImage className="text">01</VedioImage>
          <VedioText>
            <TextImage>
              <Image src={img1} alt="" />
            </TextImage>
            <TextInside>
              <h1>Focused Audience Research</h1>
              <p>
                To maximize the impact of your YouTube ads, you’ll need to know
                how to target your specific audience. We select the right target
                audience for your objectives, like retargeting, in-market and
                affinity, specific channels, competitor targeting, keyword
                targeting, and more.
              </p>
            </TextInside>
          </VedioText>
        </VideoMain>
        <VideoMain>
          <VedioImage className="text">02</VedioImage>
          <VedioText>
            <TextImage>
              <Image src={img2} alt="" />
            </TextImage>
            <TextInside>
              <h1>Experienced Video</h1>
              <p>
                We put all our years of YouTube Ad content experience to work
                for you. Whether you’re looking to create new video, or expand
                the reach of your existing video assets, we make it easy to
                collaborate and get the best YouTube ads in front of your
                audience.
              </p>
            </TextInside>
          </VedioText>
        </VideoMain>
        <VideoMain>
          <VedioImage className="text">03</VedioImage>
          <VedioText>
            <TextImage>
              <Image src={img3} alt="" />
            </TextImage>
            <TextInside>
              <h1>Full-Funnel YouTube Ads</h1>
              <p>
                In order to maximize lead generation and sales, our team
                supports YouTube advertising by implementing growth strategies
                that target every stage and include: Gmail retargeting, Google
                Display, Facebook Ads, CRO, and email marketing.
              </p>
            </TextInside>
          </VedioText>
        </VideoMain>
      </VedioFlex>
    </Container>
  );
};

export default Vedio;
