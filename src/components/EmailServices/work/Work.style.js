import styled from "styled-components";
export const WorkSwiper = styled.section`
  position: relative;
  width: 95%;
  margin: auto;
  margin-top: 100px;
  h4 {
    color: #424954;
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    margin-bottom: 30px;
    text-align: center;
  }
  .swiper{
    height: 100%;
    width: 100%;
  }
  
  @media (max-width: 590px){
    .swiper-slide{
      width: 100% !important;
  }
  }
 
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    display: none;
    bottom: var(--swiper-pagination-bottom, 8px);
    top: var(--swiper-pagination-top, auto);
    left: 0;
    width: 100%;
  }
  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    content: "next";
    display: none;
  }
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    content: "prev";
    display: none;
  }
  .swiper-button-next {
    position: absolute;
    right: 0;
  }
  .swiper {
    padding: 20px;
  }
  .arrow1 {
    position: absolute;
    left: -30px;
    img{
      @media screen and (max-width: 1200px) {
      width: 30px;
    height: auto;
      }
    }
  }
  .arrow2 {
    position: absolute;
    right: -45px;
    bottom: 46%;
    cursor: pointer;
  
      @media screen and (max-width: 1200px) {
      width: 30px;
    height: auto;
    right: -35px;
      }
   
  }
  @media screen and (max-width: 990px) {
    .arrow1 {
      position: absolute;
      left: -24px;
    }
    .arrow2 {
      position: absolute;
      right: -37px;
      bottom: 46%;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    .arrow1 {
      display: none;
    }
    .arrow2 {
      display: none;
    }
  }
`;
export const WorkCard = styled.section`
  background: #f2faf6;
  min-height: 470px;
  box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  padding: 30px;
  @media screen and (max-width: 1199px) {
    min-height: 330px;
  }
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    margin-bottom: 10px;
    color: #434956;
    @media screen and (max-width: 1024px) {
      font-size: 18px;
    line-height: 130%;
  }
  }
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1024px) {
      font-size: 24px;
    line-height: 115%;
  }
  @media screen and (max-width: 590px) {
      font-size: 16px;
  }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    line-height: 135%;
    margin-top: 10px;
    }
    @media screen and (max-width: 590px) {
      font-size: 14px;
  }
  }

`;
