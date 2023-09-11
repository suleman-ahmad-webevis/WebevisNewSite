import styled from "styled-components";
export const HeroHolder = styled.section`
  padding-top: 70px;
  background-color: #211d1a;
  @media screen and (max-width: 767px) {
    padding-top: 50px;
  }
`;
export const HeroContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
  color: #fff;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .Content {
    max-width: 438px;
    padding-bottom: 70px;
    br {
      display: none;
      @media screen and (max-width: 991px) {
        display: block;
      }
    }
    @media screen and (max-width: 991px) {
      max-width: 100%;
    }
    h1 {
      font-size: 70px;
      line-height: 80px;
      font-weight: 700;
      margin-bottom: 12px;
      @media screen and (max-width: 1440px) {
        font-size: calc(30px + (70 - 30) * (100vw - 390px) / (1440 - 390));
        line-height: calc(37px + (80 - 37) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      font-size: 24px;
      line-height: 28px;
      font-weight: 500;
      max-width: 410px;
      margin-bottom: 40px;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(22px + (28 - 22) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(25px + (40 - 25) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 991px) {
        max-width: 60%;
      }
      @media screen and (max-width: 575px) {
        max-width: 100%;
      }
    }
  }
  .img-holder {
    max-width: 963px;
    /* margin-bottom: -70px; */
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
