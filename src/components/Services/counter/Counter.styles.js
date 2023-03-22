import styled from "styled-components";
import Bg from "../../../assets/images/Services/counterBg.png";
export const CounterSec = styled.div`
  background: #eaf7ee;
  text-align: center;
`;
export const ConterWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${Bg.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 20px 30px;
  @media screen and (max-width: 602px) {
    padding: 10px 20px;
    border-radius: 15px;
  }
  @media screen and (max-width: 402px) {
    width: 80%;
    padding: 10px 15px;
  }
`;

export const CounterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? "flex-start" : "center")};
`;
export const Heading = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 150%;
  color: #ffffff;
  display: flex;
  @media screen and (max-width: 970px) {
    font-size: 35px;
  }
  @media screen and (max-width: 702px) {
    font-size: 30px;
  }
  @media screen and (max-width: 602px) {
    font-size: 22px;
  }
  @media screen and (max-width: 502px) {
    font-size: 18px;
  }
  @media screen and (max-width: 402px) {
    font-size: 16px;
  }
`;
export const Paragraph = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #ffffff;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
  @media screen and (max-width: 702px) {
    font-size: 16px;
  }
  @media screen and (max-width: 602px) {
    font-size: 14px;
  }
  @media screen and (max-width: 502px) {
    font-size: 11px;
  }
  @media screen and (max-width: 360px) {
    font-size: 9px;
  }
`;
