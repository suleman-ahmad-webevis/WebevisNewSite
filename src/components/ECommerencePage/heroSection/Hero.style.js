import styled from "styled-components";
import heroImage from "../../../../public/assets/images/ECommerencePage/heroImage.png";
export const HeroSec = styled.div`
  background-image: url(${heroImage.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 100px 0;
  }
  .text {
    padding-left: 20px;
    h1 {
      color: #fff;
      max-width: 617px;
      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: capitalize;
      margin-bottom: 30px;
    }
    p {
      color: #fff;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      max-width: 569px;
      margin-bottom: 40px;
      line-height: 30px; /* 125% */
    }
  }
`;
