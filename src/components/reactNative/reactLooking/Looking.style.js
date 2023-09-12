import styled from "styled-components";
import look from "../../../../public/assets/images/ReactNative/look.png";
import arrowIcon from "../../../../public/assets/images/ReactNative/arrowIcon.png";

export const LookSec = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .look_text {
    display: flex;
    align-items: center;
    flex-direction: column;

    h2 {
      color: #434956;
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      @media screen and (max-width: 1023px) {
        font-size: 35px;
      }
      @media screen and (max-width: 767px) {
        font-size: 28px;
      }
    }
    p {
      color: #434956;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media screen and (max-width: 1023px) {
        font-size: 24px;
      }
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }
    }
  }
  .looking_card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    position: relative;
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);

    }
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);

    }

    .card {
      background-image: url(${look.src});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 30px;
      overflow: hidden;
      margin-top: 50px;
      position: relative;

      .btn_arrow {
        position: absolute;
        height: 100px;
        width: 100px;
        right: 0;
        bottom: 0;
        z-index: 9;
        @media screen and (max-width: 1199px) {
          height: 76px;
          width: 70px;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      }

      .text {
        padding: 30px;
        border-bottom: 1px solid #d9d9d9;
        h3 {
          color: #fff;
          font-size: 35px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          @media screen and (max-width: 1199px) {
            font-size: 30px;
          }
        }
      }
      .image {
        width: 100%;
        transform: translateY(15px);
        -webkit-transform: translateY(15px);
        -moz-transform: translateY(15px);
        -ms-transform: translateY(15px);
        padding-top: 15px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
