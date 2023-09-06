import React, { useEffect, useRef, useState } from "react";
import {
  CleintWrapper,
  ClientCard,
  ClientHeading,
  ClientInside,
  ClientSwiper,
  ClientText,
  Closer,
  PlayVideo,
  Video,
  VideoWrapper,
  VideoWrapperMain,
} from "./Client.style";
import Image from "next/image";


import bg from "../../../../public/assets/images/Homemain/clientsVideo.png";
import smbg from "../../../../public/assets/images/Homemain/clientsVideosm.png";
import bg1 from "../../../../public/assets/images/Homemain/client-bg1.png";
import smbg1 from "../../../../public/assets/images/Homemain/smbg1.png";
import bg2 from "../../../../public/assets/images/Homemain/client-bg2.png";
import smbg2 from "../../../../public/assets/images/Homemain/client-smbg2.png";
import play from "../../../../public/assets/images/Homemain/playButton.png";
import Slider from "react-slick";
import Modal from "src/components/Modal/Modal";
import QA from "../Question/QA";

export default function Client({ marginBottom, marginTop }) {
  const [handelModal, setHandelModal] = useState(null);
  var setting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  const [open, setOpen] = useState(false);

  return (
    <>
      <ClientSwiper marginBottom={marginBottom} marginTop={marginTop}>
        <Modal
          open={open}
          setOpen={setOpen}
          child={
            <VideoWrapper>
              <Video
                width="560"
                height="500"
                src="https://www.youtube.com/embed/8LSt8_11wbQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></Video>
            </VideoWrapper>
          }
        ></Modal>

        <Slider {...setting}>
          <ClientCard image={bg} smImage={smbg}>
            <CleintWrapper>
              <ClientText className="text">
                <h1>Testimonials</h1>
                <p>
                  I have recommended Webevis to everyone that I talk to and will
                  continue to do so. I can’t stress enough how helpful Webevis
                  is with helping us understand the SEO information and how it
                  works.
                </p>
              </ClientText>
              <PlayVideo
                onClick={() => {
                  setOpen(true);
                }}
                className="video-button"
              >
                <Image src={play} alt="play-Button" />
              </PlayVideo>
            </CleintWrapper>
          </ClientCard>
          <ClientCard image={bg1} smImage={smbg1}>
            <CleintWrapper>
              <ClientText className="text">
                <h1>Testimonials</h1>
                <p>
                  I have recommended Webevis to everyone that I talk to and will
                  continue to do so. I can’t stress enough how helpful Webevis
                  is with helping us understand the SEO information and how it
                  works.
                </p>
              </ClientText>
              <PlayVideo
                onClick={() => {
                  setOpen(true);
                }}
                className="video-button"
              >
                <Image src={play} alt="play-Button" />
              </PlayVideo>
            </CleintWrapper>
          </ClientCard>
          <ClientCard image={bg2} smImage={smbg2}>
            <CleintWrapper>
              <ClientText className="text">
                <h1>Testimonials</h1>
                <p>
                  I have recommended Webevis to everyone that I talk to and will
                  continue to do so. I can’t stress enough how helpful Webevis
                  is with helping us understand the SEO information and how it
                  works.
                </p>
              </ClientText>
              <PlayVideo
                onClick={() => {
                  setOpen(true);
                }}
                className="video-button"
              >
                <Image src={play} alt="play-Button" />
              </PlayVideo>
            </CleintWrapper>
          </ClientCard>
        </Slider>
        <ClientSwiper></ClientSwiper>
      </ClientSwiper>
    </>
  );
}
