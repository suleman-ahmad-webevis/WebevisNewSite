import React, { useRef, useState } from "react";
// import React from "react";
import {
  ClientCard,
  ClientFlex,
  ClientHeading,
  ClientInside,
  ClientSec,
  ClientSwiper,
} from "./Client.style";
import Image from "next/image";
import men from "../../semservices/assests/man.png";
import { RatingStar } from "rating-star";

// const Client = () => {

// return (
//   <>

{
  /* <ClientSec>
        <ClientCard>
          <RatingStar
            clickable
            maxScore={100}
            id="123"
            rating={rating}
            onRatingChange={onRatingChange}
          />
          <h1>
            “I have recommended Webevis to everyone that I talk to and will
            continue to do so. I can’t stress enough how helpful Webevis is with
            helping us understand the SEO information and how it works.”
          </h1>
        </ClientCard>
        <ClientCard>
          <RatingStar
            clickable
            maxScore={100}
            id="123"
            rating={rating}
            onRatingChange={onRatingChange}
          />
          <h1>
            “I have recommended Webevis to everyone that I talk to and will
            continue to do so. I can’t stress enough how helpful Webevis is with
            helping us understand the SEO information and how it works.”
          </h1>
        </ClientCard>
    
        <ClientCard>
          <RatingStar
            clickable
            maxScore={100}
            id="123"
            rating={rating}
            onRatingChange={onRatingChange}
          />
          <h1>
            “I have recommended Webevis to everyone that I talk to and will
            continue to do so. I can’t stress enough how helpful Webevis is with
            helping us understand the SEO information and how it works.”
          </h1>
        </ClientCard>
      </ClientSec>
      <ClientFlex>
        <ClientInside>
          <Image src={men} />
          <h1>Mark Stefan</h1>
          <p>Seo</p>
        </ClientInside>
        <ClientInside>
          <Image src={men} />
          <h1>Mark Stefan</h1>
          <p>Seo</p>
        </ClientInside>
        <ClientInside>
          <Image src={men} />
          <h1>Mark Stefan</h1>
          <p>Seo</p>
        </ClientInside>
      </ClientFlex>
    </>
  );
};

export default Client; */
}
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Client() {
  const [rating, setRating] = React.useState(100);

  const onRatingChange = (score) => {
    setRating(score);
  };
  return (
    <>
      <ClientSwiper>
        <ClientHeading>Our Clients Feedback</ClientHeading>

        <Swiper
          breakpoints={{
            700: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={3}
          spaceBetween={3}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ClientCard>
              <RatingStar
                clickable
                maxScore={100}
                id="123"
                rating={rating}
                onRatingChange={onRatingChange}
              />
              <h1>
                “I have recommended Webevis to everyone that I talk to and will
                continue to do so. I can’t stress enough how helpful Webevis is
                with helping us understand the SEO information and how it
                works.”
              </h1>
            </ClientCard>
            <ClientInside>
              <Image src={men} />
              <h1>Mark Stefan</h1>
              <p>Seo</p>
            </ClientInside>
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard>
              <RatingStar
                clickable
                maxScore={100}
                id="123"
                rating={rating}
                onRatingChange={onRatingChange}
              />
              <h1>
                “I have recommended Webevis to everyone that I talk to and will
                continue to do so. I can’t stress enough how helpful Webevis is
                with helping us understand the SEO information and how it
                works.”
              </h1>
            </ClientCard>
            <ClientInside>
              <Image src={men} />
              <h1>Mark Stefan</h1>
              <p>Seo</p>
            </ClientInside>
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard>
              <RatingStar
                clickable
                maxScore={100}
                id="123"
                rating={rating}
                onRatingChange={onRatingChange}
              />
              <h1>
                “I have recommended Webevis to everyone that I talk to and will
                continue to do so. I can’t stress enough how helpful Webevis is
                with helping us understand the SEO information and how it
                works.”
              </h1>
            </ClientCard>
            <ClientInside>
              <Image src={men} />
              <h1>Mark Stefan</h1>
              <p>Seo</p>
            </ClientInside>
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard>
              <RatingStar
                clickable
                maxScore={100}
                id="123"
                rating={rating}
                onRatingChange={onRatingChange}
              />
              <h1>
                “I have recommended Webevis to everyone that I talk to and will
                continue to do so. I can’t stress enough how helpful Webevis is
                with helping us understand the SEO information and how it
                works.”
              </h1>
            </ClientCard>
            <ClientInside>
              <Image src={men} />
              <h1>Mark Stefan</h1>
              <p>Seo</p>
            </ClientInside>
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard>
              <RatingStar
                clickable
                maxScore={100}
                id="123"
                rating={rating}
                onRatingChange={onRatingChange}
              />
              <h1>
                “I have recommended Webevis to everyone that I talk to and will
                continue to do so. I can’t stress enough how helpful Webevis is
                with helping us understand the SEO information and how it
                works.”
              </h1>
            </ClientCard>
            <ClientInside>
              <Image src={men} />
              <h1>Mark Stefan</h1>
              <p>Seo</p>
            </ClientInside>
          </SwiperSlide>
        </Swiper>
      </ClientSwiper>
    </>
  );
}
