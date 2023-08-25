import styled from "styled-components";
import nextArrow from "../../../assets/images/AboutUs/next.png";
import prev from "../../../assets/images/AboutUs/prev.png";

export const StyledWorkHistory = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  padding-top: 90px;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

export const WorkText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 50px;
  width: 47%;
  flex-shrink: 0;
  gap: 30px;
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  @media screen and (max-width: 1200px) {
    gap: 10px;
  }
  h3 {
    color: #434956;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }

  h2 {
    color: #434956;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    } */
    @media screen and (max-width: 1200px) {
      font-size: 35px;
      line-height: 40px;
    }
  }
  span {
    color: rgba(40, 183, 129, 1);
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  h4 {
    color: #434956;

    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1200px) {
      font-size: 20px;
      line-height: 25px;
    }
  }
`;
export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .explore {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    span {
      color: #a1a1a1;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (max-width: 1440px) {
        font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
`;
export const WorkStatus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
`;
export const WorkNumber = styled.div`
  padding: 15px 15px 15px 0;
  border: 1px solid #d9d9d9;
  margin: -1px;
  /* display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? "flex-start" : "center")};
  gap: 20px;
  padding: ${({ padding }) => (padding ? padding : "0px 26px 20px 0px")};
  border-left: ${({ borderl }) => (borderl ? borderl : "none")};
  border-right: ${({ borderR }) => (borderR ? borderR : "none")};
  border-top: ${({ borderT }) => (borderT ? borderT : "none")};
  border-bottom: ${({ borderB }) => (borderB ? borderB : "none")};
  margin-left: ${({ margin }) => (margin ? margin : "0px")}; */
  &:nth-child(even) {
    padding: 15px 0px 15px 50px;
  }
  h1 {
    color: #434956;
    font-size: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* @media screen and (max-width: 1440px) {
      font-size: calc(28px + (60 - 28) * (100vw - 390px) / (1440 - 390));
    } */
    @media screen and (max-width: 1200px) {
      font-size: 35px;
    }
  }
  p {
    color: #28b781;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    /* @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    } */
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
  }
`;

export const TeamSlider = styled.div`
  width: 53%;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    width: 100%;
    max-width: 650px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 70px;
  }
  @media screen and (max-width: 599px) {
    padding: 0px;
  }
  .slick-slider {
    position: relative;
  }
  .box {
    height: 443px;
    max-width: 300px !important;
    margin: 0;
    margin-top: 50px;

    img {
      max-width: 100%;
      height: auto;
    }
    @media screen and (max-width: 1300px) {
      max-width: 280px !important ;
      height: 400px;
    }
    @media screen and (max-width: 1199px) {
      max-width: 220px !important ;
      height: 400px;
    }
    @media screen and (max-width: 991px) {
      max-width: inherit !important;
      height: auto;
      margin-top: 0;
      padding: 10px;
    }
    @media screen and (max-width: 599px) {
      max-width: 170px !important ;
      height: auto !important ;
      margin-top: 10px;
      padding: 0;
    }
  }
  .slick-active {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .slick-current {
    .box {
      margin: 20px;
      height: 673px;
      max-width: 448px !important;
      z-index: 10;

      @media screen and (max-width: 1199px) {
        height: 453px;
      }
      @media screen and (max-width: 991px) {
        height: auto;
        margin: 0;
      }
      @media screen and (max-width: 599px) {
        margin: 10px;
        max-width: 300px !important;
        height: auto !important;
      }
      img {
        margin-top: 0px;
        max-width: 100%;
        height: auto;
      }
    }
  }

  .slick-arrow.slick-next,
  .slick-arrow.slick-prev {
    background-color: #28b781;
    background-image: url(${nextArrow.src});
    background-size: 18.32px 18.16px;
    background-repeat: no-repeat;
    background-position: center;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    left: 67%;
    top: 75%;
    z-index: 10;
    @media screen and (max-width: 1284px) {
      left: 67%;
      top: 70%;
    }
    @media screen and (max-width: 1199px) {
      left: 67%;
      top: 85%;
    }
    @media screen and (max-width: 991px) {
      top: 50%;
      right: -50px;
      left: auto;
    }
    @media screen and (max-width: 599px) {
      top: 95%;
      right: 20%;
      width: 30px;
      height: 30px;
    }

    &::before {
      display: none;
    }
  }
  .slick-arrow.slick-prev {
    background-image: url(${prev.src});
    left: 60%;
    top: 75%;
    @media screen and (max-width: 1284px) {
      left: 60%;
      top: 70%;
    }
    @media screen and (max-width: 1199px) {
      left: 60%;
      top: 85%;
    }
    @media screen and (max-width: 991px) {
      top: 50%;
      right: auto;
      left: -50px;
    }
    @media screen and (max-width: 599px) {
      top: 95%;
      left: 60%;
      width: 30px;
      height: 30px;
    }
  }
`;
  