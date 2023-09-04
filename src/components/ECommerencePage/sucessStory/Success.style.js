import styled from "styled-components";

export const SuccessSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  @media screen and (max-width: 1200px) {
    br {
      display: none;
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
  .success_text {
    width: 55%;
    margin: auto;
    @media screen and (max-width: 1200px) {
      width: 78%;
    }
    @media screen and (max-width: 991px) {
      width: 100%;
    }
    h2 {
      color: #424954;

      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
      margin-bottom: 20px;
      span {
        color: #1ccc97;
      }
      @media screen and (max-width: 1200px) {
        font-size: 32px;
      }
        @media screen and (max-width: 574px) {
        font-size: 28px;
      }
    }
    h3 {
      color: #424954;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
      margin-bottom: 30px;
      @media screen and (max-width: 1200px) {
        font-size: 32px;
      }
      @media screen and (max-width: 574px) {
        font-size: 28px;
      }
    }
    p {
      color: #2b2c2f;
      max-width: 604px;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      @media screen and (max-width: 1200px) {
        font-size: 22px;
        width: 100%;
      }
      @media screen and (max-width: 574px) {
        font-size: 18px;
      }
    }
  }
  .success_image {
    img {
      width: 100%;
      @media screen and (max-width: 991px) {
        height: auto;
      }
    }
  }
`;
