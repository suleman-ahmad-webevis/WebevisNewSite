import React, { useRef, useState } from "react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import bg from "../../../assets/images/Homemain/clientsVideo.png";
import play from "../../../assets/images/Homemain/playButton.png";
import { RxCross1 } from "react-icons/rx";

export default function Client() {
  const [toogle, setToogle] = useState(false);
  return (
    <>
      <ClientSwiper>
        {/* <ClientHeading>Our Clients Feedback</ClientHeading> */}

        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={1}
          // spaceBetween={0}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
          // modules={[Pagination, Autoplay]}
          // className="mySwiper"
        >
          <SwiperSlide>
            <ClientCard image={bg}>
              <CleintWrapper>
                <ClientText>
                  <h1>Testimonials</h1>
                  <p>
                    I have recommended Webevis to everyone that I talk to and
                    will continue to do so. I can’t stress enough how helpful
                    Webevis is with helping us understand the SEO information
                    and how it works.
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
            </ClientCard>
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard image={bg}>
              <CleintWrapper>
                <ClientText>
                  <h1>Testimonials</h1>
                  <p>
                    I have recommended Webevis to everyone that I talk to and
                    will continue to do so. I can’t stress enough how helpful
                    Webevis is with helping us understand the SEO information
                    and how it works.
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
            </ClientCard>
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard image={bg}>
              <CleintWrapper>
                <ClientText>
                  <h1>Testimonials</h1>
                  <p>
                    I have recommended Webevis to everyone that I talk to and
                    will continue to do so. I can’t stress enough how helpful
                    Webevis is with helping us understand the SEO information
                    and how it works.
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
            </ClientCard>
          </SwiperSlide>
        </Swiper>
      </ClientSwiper>
    </>
  );
}
