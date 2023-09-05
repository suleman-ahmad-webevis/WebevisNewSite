import styled from "styled-components";

export const HeroSec = styled.div`
  background: #eaf7ee;
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:991px){
      flex-direction: column;
      align-items: center;

      }
  }
  .hero_text {
    width: 40%;
    padding: 67px 0;
    @media screen and (max-width:991px){
      width: 100%;


      }
    h1 {
      color: #2b2c2f;
      font-size: 70px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
      margin-bottom: 30px;
      @media screen and (max-width:1200px){
      font-size: 49px;

      }
      @media screen and (max-width:574px){
      font-size: 32px;

      }
    }
    p {
      color: #2b2c2f;
      max-width: 569px;
      font-family: Outfit;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 125% */
      margin-bottom: 40px;
      @media screen and (max-width:1200px){
      font-size: 18px;

      }
    }
  }
  .hero_image{
    width: 60%;
    /* margin: 0 auto; */
    @media screen and (max-width:991px){
      width: 100%;

      }
    img{
        max-width: 100%;
        height: 100%;
    }
  }
`;
