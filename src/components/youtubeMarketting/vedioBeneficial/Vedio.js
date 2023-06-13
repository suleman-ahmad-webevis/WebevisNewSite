import React from "react";
import img1 from "../../../assets/images/Services/youtubeMarketting/audience.png";
import img2 from "../../../assets/images/Services/youtubeMarketting/vedios.png";
import img3 from "../../../assets/images/Services/youtubeMarketting/youtube.png";
import img4 from "../../../assets/images/Services/youtubeMarketting/one.png";
import img5 from "../../../assets/images/Services/youtubeMarketting/two.png";
import img6 from "../../../assets/images/Services/youtubeMarketting/three.png";
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

const Vedio = () => {
  return (
    <>
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
          <VedioImage>
            <ResponsiveImage
              src={img4}
              alt=""
              max="144"
              min="97"
              maxh="97"
              minh="54.33"
            />
          </VedioImage>
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
          <VedioImage>
            <ResponsiveImage
              src={img5}
              alt=""
              max="144"
              min="97"
              maxh="97"
              minh="54.33"
            />
          </VedioImage>
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
          <VedioImage>
            <ResponsiveImage
              src={img6}
              alt=""
              max="174"
              min="96.03"
              maxh="97"
              minh="53.53"
            />
          </VedioImage>
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
    </>
  );
};

export default Vedio;
