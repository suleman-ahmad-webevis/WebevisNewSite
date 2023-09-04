import styled from "styled-components";
import BG from "../../../../public/assets/images/MobileApp/App-bg.png";
export const HeroHolder = styled.section`
  padding: 120px 0;
  background-image: url(${BG.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const HeroContent = styled.div`
  max-width: 569px;
  h1 {
    color: #fff;
    font-size: 60px;
    line-height: 65px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  p {
    color: #fff;
    font-size: 24px;
    line-height: 28px;
    font-weight: 500;
    margin-bottom: 40px;
  }
`;
