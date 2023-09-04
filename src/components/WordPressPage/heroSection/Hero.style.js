import styled from "styled-components";

export const HeroSec = styled.div`
  background: #eaf7ee;
  width: 100%;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .hero_text {
    width: 50%;
    margin: auto;
    padding: 67px 0;
    h1 {
      color: #2b2c2f;
      font-size: 70px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
      margin-bottom: 30px;
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
    }
  }
  .hero_image{
    width: 50%;
    margin: 0 auto;
    img{
        width: 100%;
        height: auto;
    }
  }
`;
