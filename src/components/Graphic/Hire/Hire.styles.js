import styled from "styled-components";
import Bg from "../../../assets/images/Graphic/Hire-bg.png";
export const HireHolder = styled.section`
  margin: 140px 0 80px 0;
  background-image: url(${Bg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: #fff;
  .Content {
    padding: 68px 0;
    h3 {
      font-size: 28px;
      font-weight: 400;
      line-height: 32px;
      margin-bottom: 20px;
      &:nth-last-child(1) {
        margin-bottom: 40px;
      }
    }
    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 45px;
      margin-bottom: 20px;
    }
  }
  .img-holder {
    max-width: 682px;
    position: absolute;
    bottom: -81px;
    right: -54px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
