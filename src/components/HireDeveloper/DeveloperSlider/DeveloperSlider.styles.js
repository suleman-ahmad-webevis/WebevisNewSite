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
    max-width: calc(300px + (370 - 300) * (100vw - 992px) / (1440 - 992));
  }
  @media screen and (max-width: 992px) {
    max-width: 370px;
  }
  @media screen and (max-width: 768px) {
    max-width: calc(218px + (370 - 218) * (100vw - 390px) / (768 - 390));
    height: calc(251px + (370 - 251) * (100vw - 390px) / (768 - 390));
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
    @media screen and (max-width: 768px) {
      width: calc(218px + (500 - 218) * (100vw - 390px) / (768 - 390));
      height: calc(100px + (180 - 100) * (100vw - 390px) / (768 - 390));
    }
  }
  .arrow {
    position: absolute;
    top: 20%;
    left: 5%;
    max-width: 72px;
    min-height: 54px;
    @media screen and (max-width: 768px) {
      max-width: calc(44px + (72 - 44) * (100vw - 390px) / (768 - 390));
      min-height: calc(44px + (54 - 33) * (100vw - 390px) / (768 - 390));
    }
    @media screen and (max-width: 576px) {
      top: 20%;
    }
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
    max-width: calc(180px + (222 - 180) * (100vw - 992px) / (1440 - 992));
  }
  @media screen and (max-width: 992px) {
    max-width: 222px;
  }
  @media screen and (max-width: 768px) {
    max-width: calc(129px + (222 - 129) * (100vw - 390px) / (768 - 390));
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
    @media screen and (max-width: 1440px) {
      width: calc(128px + (258 - 128) * (100vw - 390px) / (1440 - 390));
      margin-right: calc(20px + (80 - 20) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .Designation {
    background-color: #fff;
    padding: 33px 20px;
    border-radius: 10px;
    border: 2px solid #28b781;
    width: 100%;
    @media screen and (max-width: 1440px) {
      padding: calc(20px + (33 - 20) * (100vw - 390px) / (1440 - 390))
        calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
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
          margin-bottom: calc(
            10px + (20 - 10) * (100vw - 390px) / (1440 - 390)
          );
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
            flex-shrink: 0;
            @media screen and (max-width: 1440px) {
              padding: calc(2px + (5 - 2) * (100vw - 390px) / (1440 - 390))
                calc(4px + (7 - 4) * (100vw - 390px) / (1440 - 390));
            }
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
