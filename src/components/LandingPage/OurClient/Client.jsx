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
import men from "../../../assets/images/Services/AWAServices/man.png";
import { RatingStar } from "rating-star";

import bg from "../../../../public/assets/images/Homemain/clientsVideo.png";
import play from "../../../assets/images/Homemain/playButton.png";
import { RxCross1 } from "react-icons/rx";
import Slider from "react-slick";
import Modal from "src/components/Modal/Modal";
import QA from "../Question/QA";

export default function Client() {
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
      <ClientSwiper>
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
          <ClientCard image={bg}>
            <CleintWrapper>
              <ClientText>
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
              >
                <Image src={play} alt="play-Button" />
                <h6>Watch The Video</h6>
              </PlayVideo>
            </CleintWrapper>
          </ClientCard>
          <ClientCard image={bg}>
            <CleintWrapper>
              <ClientText>
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
              >
                <Image src={play} alt="play-Button" />
                <h6>Watch The Video</h6>
              </PlayVideo>
            </CleintWrapper>
          </ClientCard>
          <ClientCard image={bg}>
            <CleintWrapper>
              <ClientText>
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
              >
                <Image src={play} alt="play-Button" />
                <h6>Watch The Video</h6>
              </PlayVideo>
            </CleintWrapper>
          </ClientCard>
        </Slider>
        <ClientSwiper></ClientSwiper>
      </ClientSwiper>
    </>
  );
}
