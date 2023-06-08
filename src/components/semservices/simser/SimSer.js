import { Responsive, SimCard, SimRow, SwiperContainer } from "./SimSer.style";
import Image from "next/image";
import img1 from "../../semservices/assests/search.png";
import img2 from "../../semservices/assests/amazon.png";
import img3 from "../../semservices/assests/videos2.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
export default function SimSer() {
  return (
    <SwiperContainer>
      <Responsive>
        <h1>SEM Services</h1>
        <p>
          Display advertising focuses on attracting online users’ attention to
          convince them to take a specific action, such as signing up for a
          newsletter or registering for a free software trial.
        </p>
      </Responsive>
      <Swiper
        breakpoints={{
          800: {
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
        spaceBetween={20}
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
          <SimCard className="active">
<<<<<<< HEAD
            <Image src={img2} />
=======
            <Image src={img2} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
            <h1>Keyword Research and Strategy</h1>
            <p>
              Find the right keywords and improve your internet search engine
              marketing campaign. Our paid search agency categorizes your
              keywords based on search intent, value, search volume and
              specificity of your brand offerings.
            </p>
          </SimCard>
        </SwiperSlide>
        <SwiperSlide>
          <SimCard>
<<<<<<< HEAD
            <Image src={img1} />
=======
            <Image src={img1} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c

            <h1>Amazon PPC</h1>
            <p>
              Get maximum visibility and impressions with Amazon sponsored ads.
              Our search engine marketing consultants optimize your Amazon PPC
              keyword strategy, adjust bids based on ad placements and structure
              ad campaigns depending on product performance.
            </p>
          </SimCard>
        </SwiperSlide>
        <SwiperSlide>
          <SimCard>
<<<<<<< HEAD
            <Image src={img3} />
=======
            <Image src={img3} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c

            <h1>Video Advertising</h1>
            <p>
              Studies show that approximately 72 percent of consumers prefer
              video content over text when learning about a product or service.
              Maximize our YouTube marketing services to drive awareness,
              engagement and conversions to your brand.
            </p>
          </SimCard>
        </SwiperSlide>
        <SwiperSlide>
          <SimCard>
<<<<<<< HEAD
            <Image src={img3} />
=======
            <Image src={img3} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c

            <h1>Video Advertising</h1>
            <p>
              Studies show that approximately 72 percent of consumers prefer
              video content over text when learning about a product or service.
              Maximize our YouTube marketing services to drive awareness,
              engagement and conversions to your brand.
            </p>
          </SimCard>
        </SwiperSlide>
        <SwiperSlide>
          <SimCard>
<<<<<<< HEAD
            <Image src={img3} />
=======
            <Image src={img3} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c

            <h1>Video Advertising</h1>
            <p>
              Studies show that approximately 72 percent of consumers prefer
              video content over text when learning about a product or service.
              Maximize our YouTube marketing services to drive awareness,
              engagement and conversions to your brand.
            </p>
          </SimCard>
        </SwiperSlide>
        <SwiperSlide>
          <SimCard>
<<<<<<< HEAD
            <Image src={img3} />
=======
            <Image src={img3} alt="img" />
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c

            <h1>Video Advertising</h1>
            <p>
              Studies show that approximately 72 percent of consumers prefer
              video content over text when learning about a product or service.
              Maximize our YouTube marketing services to drive awareness,
              engagement and conversions to your brand.
            </p>
          </SimCard>
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}
