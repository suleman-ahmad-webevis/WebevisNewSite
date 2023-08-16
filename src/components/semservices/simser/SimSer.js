import { Responsive, SimCard, SimRow, SwiperContainer } from "./SimSer.style";
import Image from "next/image";
import img3 from "../../semservices/assests/videos2.png";
import search from "../../../assets/images/Services/SemServices/search.png"
import amazon from "../../../assets/images/Services/SemServices/amazom.png"
import ads from "../../../assets/images/Services/SemServices/ads.png"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Container } from "src/components/Container.styles";
// import SwiperCore, { Pagination, Autoplay } from 'swiper';
// SwiperCore.use([Pagination, Autoplay]);
export default function SimSer() {
  return (
    <SwiperContainer>
      <Container>
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
            0: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide >
            <SimCard className="active">
              <div className="image">
                <Image src={search} alt="search" />
              </div>
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
            <SimCard className="active">
              <div className="image">
                <Image src={amazon} alt="amazon" />
              </div>
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
            <SimCard className="active">
              <div className="image">

                <Image src={ads} alt="ads" />
              </div>

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
              <div className="image">

                <Image src={img3} alt="img" />
              </div>

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
              <div className="image">
                <Image src={img3} alt="img" />
              </div>
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
              <div className="image">


                <Image src={img3} alt="img" />
              </div>

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
      </Container>

    </SwiperContainer>
  );
}
