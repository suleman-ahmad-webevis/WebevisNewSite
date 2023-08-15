import styled from "styled-components";
import circle from "../../../assets/images/Services/SemServices/res.png";

export const CircleSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  .circle_border {
    position: relative;
    @media screen and (max-width: 767px) {
      flex: 1;
        }
    .circle_box {
      text-align: center;
      position: relative;
      width: 1000px;
      margin: 0 auto;
      @media screen and (max-width: 1024px) {
        width: 700px;
      }
      @media screen and (max-width: 767px) {
        width: 350px;
        min-height: 565px;
        margin-left: 0;
      }
      .circleImg {
        width: auto;
        max-height: 420px;
        @media screen and (max-width: 1024px) {
          max-height: 300px;
        }
        @media screen and (max-width: 767px) {
          max-height: 300px;
          transform: rotate(90deg);
          position: relative;
          left: -65px;
          top: 110px;
        }
      }
      .setp1 {
        position: absolute;
        z-index: 99;
        left: 50px;
        bottom: 235px;
        font-size: 18px;
        color: #28b781;
        line-height: 28px;
        font-weight: bold;
        width: 170px;
        @media screen and (max-width: 1024px) {
          left: 0px;
          bottom: 172px;
          font-size: 16px;
          line-height: 22px;
        }
        @media screen and (max-width: 767px) {
          left: 10px;
          bottom: auto;
          font-size: 14px;
          line-height: 18px;
          width: 145px;
          top: -5px;
        }
      }
      .setp2 {
        position: absolute;
        z-index: 99;
        left: 80px;
        top: 60px;
        font-size: 18px;
        color: #434956;
        line-height: 28px;
        font-weight: bold;
        width: 240px;
        @media screen and (max-width: 1024px) {
          left: 0px;
          top: 40px;
          font-size: 16px;
          line-height: 22px;
        }
        @media screen and (max-width: 767px) {
          left: auto;
          top: 45px;
          font-size: 14px;
          line-height: 18px;
          right: 0;
          width: 150px;
        }
      }
      .setp3 {
        position: absolute;
        z-index: 99;
        top: -20px;
        font-size: 18px;
        color: #28b781;
        line-height: 28px;
        font-weight: bold;
        width: 260px;
        left: 370px;
        @media screen and (max-width: 1024px) {
          left: 230px;
          top: -15px;
          font-size: 16px;
          line-height: 22px;
        }
        @media screen and (max-width: 767px) {
          left: auto;
          top: 162px;
          font-size: 14px;
          line-height: 18px;
          width: 100px;
          right: -5px;
        }
      }
      .setp4 {
        position: absolute;
        z-index: 99;
        right: 50px;
        top: 70px;
        font-size: 18px;
        color: #434956;
        line-height: 28px;
        font-weight: bold;
        width: 240px;
        @media screen and (max-width: 1024px) {
          right: -20px;
          top: 42px;
          font-size: 16px;
          line-height: 22px;
        }
        @media screen and (max-width: 767px) {
          right: 10px;
          top: auto;
          font-size: 14px;
          line-height: 18px;
          bottom: 110px;
          width: 100px;
        }
      }
      .setp5 {
        position: absolute;
        z-index: 99;
        right: 45px;
        bottom: 215px;
        font-size: 18px;
        color: #28b781;
        line-height: 28px;
        font-weight: bold;
        width: 170px;
        @media screen and (max-width: 1024px) {
          right: -8px;
          bottom: 155px;
          font-size: 16px;
          line-height: 22px;
        }
        @media screen and (max-width: 767px) {
          right: auto;
          bottom: 40px;
          width: 110px;
          font-size: 14px;
          line-height: 18px;
          left: 35px;
        }
      }
      .setp6 {
        position: relative;
        z-index: 99;
        bottom: 150px;
        font-size: 28px;
        font-weight: bold;
        width: 270px;
        margin: 0 auto;
        color: #434956;
        @media screen and (max-width: 1024px) {
          bottom: 110px;
          font-size: 22px;
        }
        @media screen and (max-width: 767px) {
          bottom: 80px;
          font-size: 22px;
          left: -80px;
          font-size: 18px;
          width: 140px;
        }
      }
    }
  }
`;
