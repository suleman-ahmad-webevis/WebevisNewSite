import styled from "styled-components";
export const GrowthHolder = styled.section`
  padding: 100px 0 100px 20px;
  @media screen and (max-width: 767px) {
    padding: 50px 0 50px 20px;
  }
`;
export const TitleHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: block;
  }
  .Growth {
    width: 100%;
    max-width: 666px;
    margin: 0 auto;
    @media screen and (max-width: 1199px) {
      max-width: 570px;
    }
    @media screen and (max-width: 991px) {
      max-width: 455px;
    }
    @media screen and (max-width: 767px) {
      padding-right: 15px;
    }
    h2 {
      color: #434956;
      font-size: 45px;
      font-weight: 700;
      line-height: 50px;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      color: #434956;
      font-size: 28px;
      font-weight: 400;
      line-height: 32px;
      margin-bottom: 20px;
      &:nth-last-child(1) {
        @media screen and (max-width: 767px) {
          margin-bottom: 40px;
        }
      }
      @media screen and (max-width: 1440px) {
        font-size: calc(20px + (28 - 20) * (100vw - 992px) / (1440 - 390));
      }
      @media screen and (max-width: 991px) {
        /* font-size: 20px; */
        line-height: 25px;
        margin-bottom: 10px;
      }
    }
  }
  .image-holder {
    /* max-width: 722px; */

    .GrowthPic {
      display: flex;
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    .GrowthPic1 {
      display: none;
      @media screen and (max-width: 767px) {
        display: flex;
      }
    }
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`;
