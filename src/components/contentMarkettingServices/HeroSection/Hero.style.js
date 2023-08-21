import styled from "styled-components";
import HeroBG from "../../../assets//images/Services/ContentMarkettingServices/HeroBG.jpg";

export const HeroContainer = styled.div`
  background: url(${HeroBG.src});
  background-position: 100% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom-left-radius: 123% 50%;
  border-bottom-right-radius: 123% 50%;
  margin: 0 -40px;
  overflow: hidden;
  padding: 100px 20px 0 20px;
  @media screen and (max-width: 1439px) {
    padding: 100px 40px 0 40px;
  }
  @media screen and (max-width: 500px) {
    padding: 0;
    border-bottom-left-radius: 213% 50%;
    border-bottom-right-radius: 213% 50%;
  }
  .container {
    display: flex;
    align-items: flex-end;
    position: relative;
    width: 100%;
    @media screen and (max-width: 821px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const HeroText = styled.section`
  display: flex;
  flex-direction: column;
  align-self: start;
  max-width: 445px;
  padding-bottom: 20px;
  @media screen and (max-width: 821px) {
    align-self: center;
  }
  @media screen and (max-width: 500px) {
    padding: 100px 40px 0 40px;
  }
  h2 {
    max-width: 338px;
    font-weight: 700;
    font-size: 60px;
    line-height: 70px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (60 - 32) * (100vw - 390px) / (1440 - 390));
      line-height: calc(41px + (70 - 41) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 821px) {
      max-width: 100%;
    }
  }
  p {
    font-size: 18px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 50px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(30px + (30 - 30) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 992px) {
    p {
      margin-bottom: 40px;
    }
    padding-bottom: 50px;
  }
`;
export const HeroImage = styled.div`
  width: 50%;
  margin: 0 auto;
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 821px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    width: 494.007px;
    margin: 10px auto -10px -40px;
  }
`;

export const AbsoluteImage = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : "")};
  left: ${({ left }) => (left ? left : "")};
  right: ${({ right }) => (right ? right : "")};
  transform: rotate(${({ rotate }) => (rotate ? rotate : "")});
  @media screen and (max-width: 991px) {
    top: ${({ top1 }) => (top1 ? top1 : "")};
    left: ${({ left1 }) => (left1 ? left1 : "")};
    right: ${({ right1 }) => (right1 ? right1 : "")};
  }
  @media screen and (max-width: 821px) {
    top: ${({ top2 }) => (top2 ? top2 : "")};
    left: ${({ left2 }) => (left2 ? left2 : "")};
    right: ${({ right2 }) => (right2 ? right2 : "")};
  }
`;
