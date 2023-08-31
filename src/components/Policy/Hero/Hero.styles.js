import styled from "styled-components";
import BG from "../../../assets/images/Homemain/Policy-BG.png";
export const PrivacyHolder = styled.section`
  padding: 100px 0 190px 0;
  background-image: url(${BG.src});
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1440px) {
    padding: calc(50px + (100 - 50) * (100vw - 390px) / (1440 - 390)) 0
      calc(150px + (190 - 150) * (100vw - 390px) / (1440 - 390)) 0;
  }
  @media screen and (max-width: 575px) {
    background-position: 53% 100%;
  }
`;
export const Privacy = styled.div`
  text-align: center;
  h1 {
    color: #2b2c2f;
    font-size: 70px;
    line-height: 75px;
    font-weight: 700;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (70 - 32) * (100vw - 390px) / (1440 - 390));
      line-height: calc(37px + (75 - 37) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    max-width: 987px;
    margin: 0 auto;
    color: #000;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
    display: ${({ display }) => (display ? display : "block")};
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(20px + (22 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
