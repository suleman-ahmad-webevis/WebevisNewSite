import styled from "styled-components";

export const ClientSwiper = styled.div`
  margin-bottom: 50px;
  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    width: 18px;
    height: 15px;
    border-radius: 89px;
    background-color: green;
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
  max-width: 80%;
  margin: auto;
  margin-bottom: 50px;
  background: #ffffff;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  padding: 20px;
  text-align: center;
  h1 {
    font-family: "General Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #2b2c2f;
  }
  ::after {
    content: "";
    transform: rotate(180deg);
    position: relative;
    top: 60px;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-top: 25px solid white;
    width: 36px;
    height: 36px;
  }
  :nth-child(1) {
    ::after {
      content: "";
      transform: rotate(180deg);
      width: 36px;
      position: relative;
      top: 59.9px;
      left: 6px;

      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-top: 25px solid white;
    }
  }
  :nth-child(2) {
    ::after {
      content: "";
      transform: rotate(180deg);
      width: 36px;
      position: relative;
      top: 59.9px;
      left: -5px;

      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-top: 25px solid white;
    }
  }
  :nth-child(3) {
    ::after {
      content: "";
      transform: rotate(180deg);
      width: 36px;
      position: relative;
      top: 59.9px;
      left: 20px;

      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-top: 30px solid white;
    }
  }
`;
export const ClientFlex = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
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
