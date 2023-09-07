import styled from "styled-components";
export const ServiceHolder = styled.section`
  padding: 100px 0 50px 0;
  position: relative;
  @media screen and (max-width: 1440px) {
    padding: calc(50px + (100 - 50) * (100vw - 390px) / (1440 - 390)) 0
      calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const ServiceContent = styled.div`
  color: #424954;
  @media screen and (max-width: 767px) {
    .Bg1,
    .Bg2 {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    .mobile-Bg1,
    .mobile-Bg2 {
      display: none;
    }
  }
  .Bg1,
  .Bg2,
  .mobile-Bg1,
  .mobile-Bg2 {
    max-width: 528px;
    position: absolute;
    z-index: -1;
    top: 250px;
    @media screen and (max-width: 1440px) {
      max-width: calc(250px + (528 - 250) * (100vw - 768px) / (1440 - 768));
    }
    @media screen and (max-width: 1369px) {
      top: 240px;
    }
    @media screen and (max-width: 1199px) {
      top: 200px;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .Bg1,
  .mobile-Bg1 {
    left: 0;
  }
  .Bg2,
  .mobile-Bg2 {
    right: 0;
  }
  .mobile-Bg1,
  .mobile-Bg2 {
    max-width: 189px;
    top: 200px;
    @media screen and (max-width: 575px) {
      top: 220px;
    }
  }
  .Top {
    text-align: center;
    h2 {
      font-size: 45px;
      line-height: 50px;
      font-weight: 600;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
        line-height: calc(32px + (50 - 32) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(10px + (20 - 10) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      max-width: 1062px;
      font-size: 28px;
      line-height: 32px;
      font-weight: 400;
      padding-bottom: 50px;
      margin: 0 auto;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(22px + (32 - 22) * (100vw - 390px) / (1440 - 390));
        padding-bottom: calc(25px + (50 - 25) * (100vw - 768px) / (1440 - 768));
      }
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 80px;
    }
  }
  .Col-holder {
    max-width: 1100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin: 0 auto;
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 767px) {
      gap: 12px;
    }

    .Col {
      max-width: 347px;
      padding: 40px 20px;
      border-radius: 25px;
      background: #fff;
      box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15);
      @media screen and (max-width: 1440px) {
        padding: calc(14px + (40 - 14) * (100vw - 390px) / (1440 - 390))
          calc(10px + (20 - 10) * (100vw - 390px) / (1440 - 390));
      }
      .img-holder {
        max-width: 69px;
        height: 60;
        margin-bottom: 30px;
        @media screen and (max-width: 1440px) {
          max-width: calc(32px + (69 - 32) * (100vw - 390px) / (1440 - 390));
          height: calc(28px + (60 - 28) * (100vw - 390px) / (1440 - 390));
          margin-bottom: calc(
            14px + (30 - 14) * (100vw - 390px) / (1440 - 390)
          );
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
      }
      h3 {
        font-size: 28px;
        line-height: 32px;
        font-weight: 600;
        margin-bottom: 15px;
        @media screen and (max-width: 1440px) {
          font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
          line-height: calc(18px + (32 - 18) * (100vw - 390px) / (1440 - 390));
          margin-bottom: calc(7px + (15 - 7) * (100vw - 390px) / (1440 - 390));
        }
      }
      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        @media screen and (max-width: 1440px) {
          font-size: calc(12px + (18 - 12) * (100vw - 390px) / (1440 - 390));
          line-height: calc(16px + (22 - 16) * (100vw - 390px) / (1440 - 390));
        }
      }
    }
  }
`;
