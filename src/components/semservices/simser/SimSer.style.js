import cardback from "../../semservices/assests/card.png";
import styled from "styled-components";

export const SwiperContainer = styled.div`
  .swiper-pagination-bullet {
    width: 70px;
    height: 10px;
    border-radius: 10px;
    background: linear-gradient(94.82deg, #2eacb2 -4.21%, #20b386 84.08%);
    @media screen and (max-width: 767px) {
      width: 40px;
    }
  }
  .swiper{
    padding:10px;
    .swiper-slide-active{
      section{
        background-image: url(${cardback.src}),
      linear-gradient(
        110.26deg,
        rgba(12, 145, 204, 0.82) -1.17%,
        rgba(2, 185, 128, 0.87) 60.57%
      );
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    h1 {
      color: white;
    }
    p {
      color: white;
    }
    .image{
background: #fff;
img{

  filter: invert(72%) sepia(80%) saturate(391%) hue-rotate(99deg) brightness(95%) contrast(96%);
}
    }
      }
    }
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
    margin: 80px 0 20px;
  }
  p {
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
    margin-bottom: 60px;
    color: #2b2c2f;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    p{
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 1440px) {
  width: 93%;
  }
`;

export const SimCard = styled.section`
  max-width: calc(100% - 10px);
  background: #ffffff;
  margin: auto;
  min-height: 420px;
  display:flex;
  flex-direction:column;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.11);
  border-radius: 58px;
  padding: 39px 25px;
  margin-bottom: 70px;
  @media screen and (max-width: 767px) {
    min-height: auto;
    margin-bottom: 40px;
  }
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 30px;
    color: #434956;
    @media screen and (max-width: 767px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
  }
 
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #434956;
    @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  }
  &:hover{
    background-image: url(${cardback.src}),
      linear-gradient(
        110.26deg,
        rgba(12, 145, 204, 0.82) -1.17%,
        rgba(2, 185, 128, 0.87) 60.57%
      );
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    h1 {
      color: white;
    }
    p {
      color: white;
    }
    .image{
background: #fff;
img{

  filter: invert(72%) sepia(80%) saturate(391%) hue-rotate(99deg) brightness(95%) contrast(96%);
}
    }

}
  .image{
    border-radius: 28px;
background: #434956;
width: 76px;
height: 76px;
display:flex;
align-items:center;
justify-content:center;
margin-bottom:20px;
  }

 &:nth-child(2){
  .image{
    background:black;
  }
  }

  

 
`;
