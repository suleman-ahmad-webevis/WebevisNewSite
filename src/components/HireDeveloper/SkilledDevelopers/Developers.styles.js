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
  z-index: -1;
  overflow: hidden;
  .Yellow {
    position: absolute;
    top: -19%;
    right: 50px;
    border-radius: 100%;
    background-color: #f6c453;
    width: 162px;
    height: 162px;
  }
  .Green {
    position: absolute;
    bottom: -21%;
    left: 50px;
    border-radius: 100%;
    background-color: #28b781;
    width: 162px;
    height: 162px;
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
  h2 {
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    max-width: 772px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    max-width: 746px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;
export const Calendar = styled(BiCalendar)`
  width: 24px;
  height: fit-content;
`;
export const FloatingImage = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : "")};
  right: ${({ right }) => (right ? right : "")};
  left: ${({ left }) => (left ? left : "")};
`;
export const Curve = styled.div`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? bottom : "")};
  right: ${({ right }) => (right ? right : "")};
  left: ${({ left }) => (left ? left : "")};
`;
