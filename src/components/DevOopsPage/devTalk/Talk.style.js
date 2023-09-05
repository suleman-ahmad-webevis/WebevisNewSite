import styled from "styled-components";
import backgroundDev from "../../../../public/assets/images/DevOopsPage/backgroundDev.png";
export const TalkSec = styled.div`
  background-image: url(${backgroundDev.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 22px;
  padding: 42px 100px;
  @media screen and (max-width: 767px) {
    padding: 30px 20px;
  }
  @media screen and (max-width: 574px) {
    padding: 30px 10px;
  }
  h3 {
    color: #fff;
    max-width: 1019px;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    @media screen and (max-width: 991px) {
      font-size: 35px;
    }
    @media screen and (max-width: 574px) {
      font-size: 24px;
    }
  }
`;
