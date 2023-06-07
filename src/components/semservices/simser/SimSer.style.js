import cardback from "../../semservices/assests/card.png";
import styled from "styled-components";

export const SwiperContainer = styled.div`
  .swiper-pagination-bullet {
    width: 70px;
    height: 10px;
    border-radius: 10px;
    background: linear-gradient(94.82deg, #2eacb2 -4.21%, #20b386 84.08%);
  }
`;
export const Responsive = styled.section`
  text-align: center;
  width: 85%;
  margin: auto;
  h1 {
    
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    color: #424954;
  }
  p {
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
    margin-bottom: 70px;
    color: #2b2c2f;
  }
  @media screen and (max-width: 658px) {
    text-align: center;
  }
`;

export const SimCard = styled.section`
  max-width: 80%;
  background: #ffffff;
  margin: auto;
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.11);
  border-radius: 58px;
  padding: 60px 25px;
margin-bottom: 70px;
  img {
    background: #434956;
    object-fit: contain;
    border-radius: 28px;
    padding: 30px;
  }
  /* &:active{
    background-image: url(${cardback.src}),
      linear-gradient(
        110.26deg,
        rgba(12, 145, 204, 0.82) -1.17%,
        rgba(2, 185, 128, 0.87) 60.57%
      );
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    img {
      background-color: white;
    }
    h1 {
      color: white;
    }
    p {
      color: white;
    }
  } */

  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 30px;
    color: #434956;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #434956;
  }
`;
