import styled from "styled-components";
import BG from "../../../../public/assets/images/MobileApp/Together-bg.png";
export const TogetherHolder = styled.section`
  padding-top: 30px;
  @media screen and (max-width: 767px) {
    padding-top: 0;
  }
`;
export const TogetherContent = styled.div`
  max-width: 730px;
  margin: 0 auto;
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  box-shadow: 0px 0.27px 7.26px 0.56831px rgba(40, 183, 129, 0.82);
  border-radius: 20px;
  padding: 27px 65px;
  @media screen and (max-width: 1440px) {
    padding: calc(20px + (27 - 20) * (100vw - 390px) / (1440 - 390))
      calc(36px + (65 - 36) * (100vw - 390px) / (1440 - 390));
  }
  h2 {
    color: #434956;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
      line-height: calc(36px + (52 - 36) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(15px + (30 - 15) * (100vw - 390px) / (1440 - 390));
    }
  }
  h3 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    background: var(
      --new,
      linear-gradient(93deg, #28b781 21.84%, #cfef00 178.39%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(20px + (28 - 20) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(9px + (15 - 9) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
