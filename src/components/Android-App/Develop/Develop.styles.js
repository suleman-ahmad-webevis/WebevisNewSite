import styled from "styled-components";
import BG from "../../../../public/assets/images/Android-App/Develop-BG.png";
export const DevelopHolder = styled.section`
  margin: 50px 0;
  padding: 20px 0;
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1440px) {
    margin: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
  @media screen and (max-width: 991px) {
    padding: 40px 0;
  }
`;
export const DevelopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    row-gap: 60px;
  }
  .Content {
    max-width: 683px;
  }
  h2 {
    font-size: 45px;
    line-height: 50px;
    font-weight: 700;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(32px + (50 - 32) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(10px + (20 - 10) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(20px + (22 - 20) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  .img-holder {
    max-width: 471px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
