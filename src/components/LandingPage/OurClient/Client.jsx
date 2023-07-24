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
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";
import bg from "../../../assets/images/Homemain/clientsVideo.png";
import play from "../../../assets/images/Homemain/playButton.png";
import { RxCross1 } from "react-icons/rx";
import Slider from "react-slick";
import Modal from "src/components/Modal/Modal";
import QA from "../Question/QA";

export default function Client() {
  const [toogle, setToogle] = useState(false);
  var Testimonail = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
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

        <Slider {...Testimonail}>
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
                {/* <button onClick={() => setModal(!modal)}>click</button> */}
              </PlayVideo>
            </CleintWrapper>
          </ClientCard>
          {/* <ClientCard image={bg}>
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
              <PlayVideo onClick={() => setToogle(!toogle)}>
                <Image src={play} alt="play-Button" />
                <h6>Watch The Video</h6>
              </PlayVideo>

              {toogle && (
                <VideoWrapperMain>
                  <VideoWrapper>
                    <Video
                      width="1280"
                      height="500"
                      // width="560"
                      // height="315"
                      src="https://www.youtube.com/embed/8LSt8_11wbQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></Video>
                    <Closer onClick={() => setToogle(!toogle)}>
                      <RxCross1 />
                    </Closer>
                  </VideoWrapper>
                </VideoWrapperMain>
              )}
            </CleintWrapper>
          </ClientCard> */}
        </Slider>
        <ClientSwiper></ClientSwiper>
      </ClientSwiper>
    </>
  );
}
