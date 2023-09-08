import styled from "styled-components";
import expert from "../../../../public/assets/images/IosDevelopment/expert.png";
export const ExpertSec = styled.div`
  background-image: url(${expert.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 44px 51px;
  @media screen and (max-width: 1080px) {
    padding: 44px 20px;
    flex-direction: column;
    gap: 26px;
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 26px;
  }
  .expert_text {
    display: flex;
    gap: 20px;
    .image {
      border-radius: 8px;
      background: #fff;
      width: 88px;
      height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 767px) {
        width: 70px;
        height: 60px;
        img {
          display: block;
          width: 40.816px;
          height: 26.901px;
        }
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h2 {
        color: #fff;
        font-size: 45px;
        margin-bottom: 10px;
        font-style: normal;
        font-weight: 600;
        line-height: 80%;
        @media screen and (max-width: 1023px) {
          font-size: 38px;
        }
        @media screen and (max-width: 767px) {
          white-space:nowrap;
        }
        @media screen and (max-width: 574px) {
          font-size: 28px;
          white-space:normal;

        }
      }
      p {
        max-width: 570px;
        color: #fff;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 36px */
        @media screen and (max-width: 1023px) {
          font-size: 20px;
        }
        @media screen and (max-width: 574px) {
          font-size: 18px;
        }
      }
    }
  }
`;
