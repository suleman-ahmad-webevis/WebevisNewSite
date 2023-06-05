import React from "react";
import img1 from "../../../assets/images/Services/youtubeMarketting/objects.png";
import img2 from "../../../assets/images/Services/youtubeMarketting/Maskgroup(1).png";
import img3 from "../../../assets/images/Services/youtubeMarketting/Maskgroup(2).png";
import img4 from "../../../assets/images/Services/youtubeMarketting/Maskgroup(3).png";
import img5 from "../../../assets/images/Services/youtubeMarketting/Maskgroup(4).png";
import img6 from "../../../assets/images/Services/youtubeMarketting/Maskgroup(5).png";
import {
  ChildOne,
  ChildServices,
  ChildServicesOne,
  ChildServicesTwo,
  ParentServices,
  ResponsiveImage,
  ServicesImage,
} from "./MarketServices.style";
import Image from "next/image";
const MarketServices = () => {
  return (
    <>
      <ParentServices>
        <ChildServicesOne>
          <ChildOne>
            <h1>Promote Channel In Budget</h1>
            <p>
              Once the video is channelized on YouTube, it is also required to
              promote your videos so that multiple users got to know and watch.
              In such condition, we guide you to reach the users to your
              released video made for promotion purposes.
            </p>
          </ChildOne>
          <ChildOne>
            <ResponsiveImage
              src={img2}
              alt=""
              max="179"
              min="58.75"
              maxh="175"
              minh="57.44"
            />
            <h1>Quality Content To Target Audience</h1>
            <p>
              YouTube Video Content playing the main role to collect audiences.
              Therefore, we suggest you what exactly have to put in your videos
              as showing the perfect information will let your videos be
              entertaining by audiences.
            </p>
          </ChildOne>
          <ChildOne>
            <ResponsiveImage
              src={img5}
              alt=""
              max="179"
              min="58.75"
              maxh="175"
              minh="57.44"
            />
            <h1>Generate Keywords And Specific Titles</h1>
            <p>
              Before using keywords in your content, we deeply research on
              internet, analyze the most searchable one, and then choose the
              accurate keywords. However, we also optimize your video to promote
              using targeted keywords for your brand.
            </p>
          </ChildOne>
        </ChildServicesOne>
        <ServicesImage>
          <ResponsiveImage
            src={img1}
            alt=""
            // max="219.41"
            // min="51.98"
            // maxh="1544.53"
            // minh="699.14"
          />
        </ServicesImage>
        <ChildServicesTwo>
          <ChildOne>
            <ResponsiveImage
              src={img4}
              alt=""
              max="179"
              min="58.75"
              maxh="175"
              minh="57.44"
            />
            <h1>Create Personalized YouTube Channel</h1>
            <p>
              We are the only resource who can instantly understand what you
              required for your YouTube Video Promotion and having the
              proficiency to create a customized channel which gives you
              full-proof of marketing experience with loads of enjoyment.
            </p>
          </ChildOne>
          <ChildOne>
            <ResponsiveImage
              src={img3}
              alt=""
              max="179"
              min="58.75"
              maxh="175"
              minh="57.44"
            />

            <h1>Produce Complete Transcription Of Video</h1>
            <p>
              From us, you can get the benefit of developing the complete
              transcription of video as apparently a written or printed version
              of created video is very much helpful in the business achievement
              and gathering viewers.
            </p>
          </ChildOne>
          <ChildOne>
            <ResponsiveImage
              src={img6}
              alt=""
              max="179"
              min="58.75"
              maxh="175"
              minh="57.44"
            />

            <h1>Generate Keywords And Specific Titles</h1>
            <p>
              Before using keywords in your content, we deeply research on
              internet, analyze the most searchable one, and then choose the
              accurate keywords. However, we also optimize your video to promote
              using targeted keywords for your brand.
            </p>
          </ChildOne>
        </ChildServicesTwo>
      </ParentServices>
    </>
  );
};

export default MarketServices;
