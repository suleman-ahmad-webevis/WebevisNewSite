import styled from "styled-components";
import Circle1 from "../../../assets/images/Careers/circle1.png";
export const CareerHolder = styled.section`
  background: #0b1011;
  color: #fff;
  padding: 55px 0;
`;
export const Career = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  .career {
    width: 45%;
    @media screen and (max-width: 767px) {
      width: 70%;
      margin-bottom: 50px;
    }
    @media screen and (max-width: 575px) {
      width: 100%;
    }
    .Circle3,
    .Circle4 {
      position: absolute;
      background: rgba(255, 225, 103, 0.2);
      border-radius: 100%;
    }
    .Circle1,
    .Circle2 {
      position: absolute;
      background: #d9d9d9;
      width: 10px;
      height: 10px;
      border-radius: 100%;
    }
    .Circle1 {
      top: 50%;
      right: 40%;
      @media screen and (max-width: 1199px) {
        right: 46%;
      }
      @media screen and (max-width: 767px) {
        top: 45%;
        right: 37%;
      }
      @media screen and (max-width: 500px) {
        top: 47%;
        right: 33%;
      }
    }
    .Circle2 {
      top: 100px;
      left: 531px;
      @media screen and (max-width: 767px) {
        top: 50%;
        left: 78%;
      }
      @media screen and (max-width: 500px) {
        top: 53%;
        left: 90%;
      }
    }
    .Circle3 {
      top: 65%;
      right: 38%;
      width: 60px;
      height: 60px;
      @media screen and (max-width: 1199px) {
        right: 43%;
      }
      @media screen and (max-width: 767px) {
        top: 36%;
        right: 21%;
      }
      @media screen and (max-width: 500px) {
        top: 39%;
        right: 10%;
      }
    }
    .Circle4 {
      top: 4%;
      right: 35%;
      width: 43px;
      height: 43px;
      @media screen and (max-width: 1199px) {
        top: -5%;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    h1 {
      font-size: 70px;
      font-weight: 600;
      line-height: 75px;
      margin-bottom: 40px;
      position: relative;
      z-index: 2;
      @media screen and (max-width: 1400px) {
        font-size: calc(32px + (70 - 32) * (100vw - 390px) / (1440 - 390));
      }
      &::before {
        content: "";
        position: absolute;
        background-image: url(${Circle1.src});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 265px;
        height: 100px;
        top: 2px;
        left: 36px;
        z-index: -1;
        @media screen and (max-width: 1400px) {
          width: 211px;
          height: 80px;
          top: 12px;
          right: auto;
        }
        @media screen and (max-width: 991px) {
          width: 200px;
          height: 76px;
          top: 10px;
        }
        @media screen and (max-width: 767px) {
          width: 174px;
          height: 66px;
          top: 9px;
        }
        @media screen and (max-width: 575px) {
          left: 28px;
        }
        @media screen and (max-width: 400px) {
          width: 150px;
          height: 57px;
          left: 22px;
          top: 13px;
        }
      }
    }
    p {
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 991px) {
        br {
          display: none;
        }
      }
    }
    .paragraph {
      margin-bottom: 40px;
    }
  }
  .image-holder {
    max-width: 540px;
    @media screen and (max-width: 1440px) {
      max-width: calc(346px + (540 - 346) * (100vw - 390px) / (1440 - 390));
    }
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`;
