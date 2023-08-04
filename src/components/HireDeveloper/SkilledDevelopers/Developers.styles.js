import styled from "styled-components";
import BG from "../../../assets/images/HireDeveloper/Developers-BG.png";
import { BiCalendar } from "react-icons/bi";
export const DeveloperHolder = styled.section`
  padding: 83px 0;
  text-align: center;
  color: #fff;
  position: relative;
  /* min-height: 450px; */
  background-image: url(${BG.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  overflow: hidden;
  @media screen and (max-width: 991px) {
    padding: 370px 0;
  }
  .Yellow {
    position: absolute;
    top: -19%;
    right: 50px;
    border-radius: 100%;
    background-color: #f6c453;
    width: 162px;
    height: 162px;

    @media screen and (max-width: 991px) {
      top: auto;
      right: -71px;
      bottom: 41px;
    }
  }
  .Green {
    position: absolute;
    bottom: -21%;
    left: 50px;
    border-radius: 100%;
    background-color: #28b781;
    width: 162px;
    height: 162px;
    @media screen and (max-width: 991px) {
      top: 36px;
      left: -78px;
    }
  }
  .circle1 {
    position: absolute;
    top: -123px;
    right: -436px;
    width: 760px;
    height: 760px;
    border-radius: 768.292px;
    border: 64px solid #d1d3d4;
    opacity: 0.10000000149011612;
    @media screen and (max-width: 991px) {
      top: 741px;
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }
    &::after,
    &::before {
      content: "";
      position: absolute;
      inset: 50px;
      border-radius: 768.292px;
      border: 64px solid #d1d3d4;
    }
    &::before {
      inset: 170px;
    }
    &.alignLeft {
      right: auto;
      left: -364px;
      top: 75px;
      @media screen and (max-width: 991px) {
        right: auto;
        left: -20px;
        top: -340px;
      }
      &::after,
      &::before {
        inset: 70px;
      }
      &::before {
        inset: 200px;
      }
    }
  }
`;
export const Developer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    max-width: 772px;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      max-width: calc(350px + (772 - 350) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 575px) {
      margin-top: 50px;
    }
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    max-width: 746px;
    margin: 0 auto;
    margin-bottom: 40px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
      max-width: calc(350px + (746 - 350) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Calendar = styled(BiCalendar)`
  width: 24px;
  height: fit-content;
`;
export const FloatingImage = styled.div`
  .Employe1,
  .Employe2,
  .Employe3,
  .Employe4 {
    max-width: 137px;
    position: absolute;
    top: 12%;
    left: 5%;
    @media screen and (max-width: 991px) {
      top: 6%;
      left: 225px;
    }
  }
  .Employe2 {
    max-width: 92px;
    top: 65%;
    left: 18%;
    @media screen and (max-width: 991px) {
      top: 28%;
      left: 6%;
    }
  }
  .Employe3 {
    max-width: 93px;
    top: 35%;
    right: 4%;
    left: auto;
    @media screen and (max-width: 991px) {
      top: 88%;
      right: 211px;
    }
    @media screen and (max-width: 575px) {
      top: 87%;
      right: 137px;
    }
  }
  .Employe4 {
    max-width: 143px;
    top: 60%;
    right: 13%;
    left: auto;
    @media screen and (max-width: 991px) {
      top: 71%;
      right: 344px;
    }
    @media screen and (max-width: 575px) {
      top: 68%;
      right: 218px;
    }
  }
`;
export const Curve = styled.div`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : "")};
  right: ${({ right }) => (right ? right : "")};
  left: ${({ left }) => (left ? left : "")};
`;
