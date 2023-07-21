import styled, { keyframes } from "styled-components";
import Image from "next/image";
export const DevInfoWrapper = styled.div`
  position: relative;
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: end;
  width: 100%;
  @media screen and (max-width: 991px) {
    justify-content: center;
  }
`;
export const ImageHolders = styled.div`
  border-radius: 0 0 50% 50%;
  max-width: 370px;
  height: 400px;
  margin-top: 70px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 1440px) {
    max-width: calc(218px + (370 - 218) * (100vw - 992px) / (1440 - 992));
  }
  @media screen and (max-width: 992px) {
    max-width: 370px;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 180px;
    background-color: #28b781;
    z-index: -1;
  }
  .arrow {
    position: absolute;
    top: 30%;
    left: 5%;
  }
  .star1 {
    position: absolute;
    top: 0;
    left: 20%;
  }
  .star2 {
    position: absolute;
    top: 30%;
    right: 5%;
  }
`;
export const ImageWrapper = styled(Image)`
  display: block;
  width: 100%;
  height: auto;
`;

export const Devinfo = styled.div`
  max-width: 222px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 2;
  @media screen and (max-width: 1440px) {
    max-width: calc(129px + (222 - 129) * (100vw - 992 px) / (1440 - 992));
  }
  @media screen and (max-width: 992px) {
    max-width: 222px;
  }
  @media screen and (max-width: 856px) {
    top: 15% !important;
    right: 5%;
  }
  @media screen and (max-width: 510px) {
    top: 10% !important;
    right: 0%;
  }
  @media screen and (max-width: 1440px) {
    width: calc(126px + (239 - 126) * (100vw - 390px) / (1440 - 390));
  }
  @media screen and (max-width: 1216px) {
    top: 0;
    gap: 7px;
  }
  h3 {
    color: #434956;
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    text-align: center;
    font-family: Outfit;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(9.511px + (18 - 9.511) * (100vw - 390px) / (1440 - 390));
    }
  }
  .img {
    width: 258px;
    margin-right: 80px;
    margin-top: 15px;
    img {
      width: 100%;
      display: block;
    }
  }
  .Designation {
    background-color: #fff;
    padding: 33px 20px;
    border-radius: 10px;
    border: 2px solid #28b781;
    width: 100%;
    h3 {
      color: #28b781;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      margin-bottom: 20px;
      @media screen and (max-width: 1440px) {
        font-size: calc(12px + (20 - 12) * (100vw - 390px) / (1440 - 390));
      }
    }
    ul {
      li {
        color: #a1a1a1;
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 20px;
        @media screen and (max-width: 1440px) {
          font-size: calc(10px + (16 - 10) * (100vw - 390px) / (1440 - 390));
        }
        &:nth-last-child(1) {
          margin-bottom: 0;
        }
        &:nth-last-child(2) {
          margin-bottom: 15px;
        }
        .work {
          display: flex;
          gap: 2px;
          margin-top: 15px;
          span {
            background-color: #eaeaea;
            padding: 5px 7px;
            border-radius: 4px;
          }
        }
      }
      li::marker {
        content: ".";
        font-size: 50px;
        line-height: 0;
        color: #28b781;
      }
    }
  }
`;
