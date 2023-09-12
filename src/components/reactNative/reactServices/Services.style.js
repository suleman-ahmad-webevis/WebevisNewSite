import styled from "styled-components";
import reactIcon from "../../../../public/assets/images/ReactNative/reactIcon.png";
export const ServiceSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px 0;
  gap: 50px;
  .text {
    h2 {
      color: #434956;
      text-align: center;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      max-width: 1089px;
      line-height: normal;
      @media screen and (max-width: 1199px) {
        font-size: 40px;
      }
      @media screen and (max-width: 991px) {
        font-size: 32px;
      }
      @media screen and (max-width: 574px) {
        font-size: 28px;
      }
    }
  }

  .main_services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    position: relative;
    

    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 658px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .card {
      border-radius: 8px;
      background: #2b2c2f;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.14);
      padding: 33px 30px;
      position:relative;
      &::before {
        content: "";
        position: absolute;
        background-image: url(${reactIcon.src});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 106px;
        right:0;
        top:0;
        width: 116px;
      }
      img {
        margin-bottom: 24px;
      }
      h3 {
        color: #fff;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
        margin-bottom: 20px;
        @media screen and (max-width: 1199px) {
          font-size: 24px;
        }
      }
      p {
        color: #d9d9d9;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        font-size: 14px;
      }
    }
  }
`;
