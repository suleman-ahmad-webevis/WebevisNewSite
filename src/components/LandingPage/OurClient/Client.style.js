import styled from "styled-components";


export const ClientSwiper = styled.div`
  margin-bottom: 50px;
  /* margin-top: 10rem; */
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: 18px;
    height: 15px;
    border-radius: 89px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
    border-radius: 50%;
    border-top-left-radius: 50%;

    background-color: green;
  }
  @media screen and (max-width: 802px) {
    margin-top: 4rem;
  }
`;

export const ClientHeading = styled.h1`
  width: 95%;
  margin: 50px auto;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 45px;
  text-align: center;
  color: #2b2c2f;
`;
export const ClientSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClientCard = styled.section`
  width: 100%;
  margin: auto;
  background-image: url(${(props) => props.image.src});
  background-position: center;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  margin-bottom: 50px;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  padding: 20px;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1440px) {
    height: calc(548px + (364 - 548) * (100vw - 390px) / (1440 - 390));
  }
  h1 {
    /* font-family: "GT Haptik"; */
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    leading-trim: both;
    text-edge: cap;
    color: #ffffff;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #ffffff;
    margin: 0;
  }
`;

export const ClientInside = styled.section`
  text-align: center;
  margin-bottom: 70px;

  img {
    border-radius: 50%;
  }
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: #2b2c2f;
  }
  p {
    font-family: "General Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    color: #a1a1a1;
  }
`;
