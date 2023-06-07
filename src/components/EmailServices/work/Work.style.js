import styled from "styled-components";
export const WorkSwiper = styled.section`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  position: relative;
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
`;
export const WorkCard = styled.section`
  width: 72%;
  margin: auto;
  background: #f2faf6;
  box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  padding: 30px;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    margin-bottom: 10px;
    color: #434956;
  }
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin-bottom: -20px;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
  }
`;
