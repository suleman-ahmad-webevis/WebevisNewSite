import styled from "styled-components";
import green from "../../../../public/assets/images/webApp/greenArrow.png";

export const TalkSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-direction: column;
  margin-top: 100px 0 60px;
  .buttons {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: -70px;
      top: -50px;
      background-image: url(${green.src});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 54.603px;
      height: 84.005px;
      @media screen and (max-width:574px) {
      right: -50px;
      top: -30px;
      width: 52.414px;
height: 53.84px;
        
      }
    }
  }

  h3 {
    color: #2b2c2f;
    text-align: center;
    width: 75%;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    @media screen and (max-width: 991px) {
      font-size: 35px;
      width: 100%;
    }
    @media screen and (max-width: 767px) {
      font-size: 28px;
    }
    @media screen and (max-width: 574px) {
      font-size: 24px;
    }
  }
`;
