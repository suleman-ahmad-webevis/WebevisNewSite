import styled from "styled-components";
import background from "../../../../public/assets/images/uiPage/background.png";

export const HeroSec = styled.div`
  background-image: url(${background.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const HeroText = styled.div`
  flex-basis: 50%;
  margin: 102px 0;
  h1 {
    color: #fff;
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
    font-weight: 500;
    line-height: 30px; /* 125% */
    margin-bottom: 30px;
  }
`;
export const HeroImage = styled.div`
  flex-basis: 50%;
  margin: 51px 0;
`;
