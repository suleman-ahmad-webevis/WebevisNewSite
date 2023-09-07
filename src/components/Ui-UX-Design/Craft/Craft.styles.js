import styled from "styled-components";
import BG from "../../../../public/assets/images/UI-UX/Craft-bg.jpg";
export const CraftHolder = styled.section`
  padding: 60px 0;
  margin: 50px 0;
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1440px) {
    padding: calc(30px + (60 - 30) * (100vw - 390px) / (1440 - 390)) 0;
    margin: calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const CraftContent = styled.div`
  color: #fff;
  text-align: center;
  h2 {
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(20px + (45 - 20) * (100vw - 390px) / (1440 - 390));
      line-height: calc(24px + (50 - 24) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(10px + (20 - 10) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-size: 28px;
    line-height: 32px;
    font-weight: 400;
    margin-bottom: 40px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(20px + (28 - 20) * (100vw - 390px) / (1440 - 390));
      margin-bottom: calc(20px + (40 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Col-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    @media screen and (max-width: 575px) {
      gap: 10px;
    }
    .Col {
      margin-bottom: 40px;
      @media screen and (max-width: 1440px) {
        margin-bottom: calc(10px + (40 - 10) * (100vw - 390px) / (1440 - 390));
      }
      .img-holder {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        margin: 0 auto;
        width: 89px;
        height: 89px;
        background-color: #fff;
        border-radius: 100%;
        @media screen and (max-width: 1440px) {
          width: calc(40px + (89 - 40) * (100vw - 390px) / (1440 - 390));
          height: calc(40px + (89 - 40) * (100vw - 390px) / (1440 - 390));
        }
        img {
          width: 50px;
          height: 50px;
          @media screen and (max-width: 1440px) {
            width: calc(30px + (50 - 30) * (100vw - 390px) / (1440 - 390));
            height: calc(30px + (50 - 30) * (100vw - 390px) / (1440 - 390));
          }
        }
      }
      p {
        margin-top: 15px;
        margin-bottom: 0;
        @media screen and (max-width: 1440px) {
          font-size: calc(12px + (28 - 12) * (100vw - 390px) / (1440 - 390));
          line-height: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
        }
      }
    }
  }
`;
