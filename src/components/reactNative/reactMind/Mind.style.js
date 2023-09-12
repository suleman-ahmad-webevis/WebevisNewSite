import styled from "styled-components";
import mindBackground from "../../../../public/assets/images/ReactNative/mindBackground.png";

export const MindSec = styled.div`
  border-radius: 12px;
  background-image: url(${mindBackground.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin: 10rem 0 90px 0;
  position: relative;
  @media screen and (max-width: 1199px) {
    margin: 3rem 0 50px 0;

  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    padding: 10px 30px;
  }

  .mind_text {
    padding: 47px 0;
    h3 {
      color: #fff;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      text-transform: capitalize;
      margin-bottom: 20px;
      @media screen and (max-width: 1023px) {
        font-size: 42px;
      }
      @media screen and (max-width: 991px) {
        font-size: 30px;
      }
      @media screen and (max-width: 574px) {
        font-size: 28px;
      }
    }
    p {
      max-width: 675px;
      color: #fff;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 30px;
      @media screen and (max-width: 1023px) {
        font-size: 26px;
      }
      @media screen and (max-width: 991px) {
        font-size: 20px;
      }
      @media screen and (max-width: 574px) {
        font-size: 18px;
      }
    }
  }
  figure {
    width: 45%;
    position: absolute;
    top: -150px;
    right: 0;
    @media screen and (max-width: 1300px) {
      position: unset !important;
    }
    @media screen and (max-width: 991px) {
      width: 100%;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
