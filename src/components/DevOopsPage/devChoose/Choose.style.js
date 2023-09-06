import styled from "styled-components";

export const ChooseSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    gap: 30px;
  }
  @media screen and (max-width: 991px) {
    gap: 0px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  .choose_text {
    width: 60%;
    @media screen and (max-width: 767px) {
    width: 100%;

  }
    h3 {
      color: #424954;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
      margin-bottom: 30px;
      max-width: 734px;
      @media screen and (max-width: 1200px) {
        font-size: 35px;
      }
      @media screen and (max-width: 991px) {
        font-size: 28px;
      }
    }
    p {
      color: #434956;
      font-size: 28px;
      max-width: 711px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      @media screen and (max-width: 1200px) {
        font-size: 24px;
      }
      @media screen and (max-width: 991px) {
        font-size: 18px;
      }
    }
  }
  .choose_image {
    width: 40%;
    @media screen and (max-width: 767px) {
    width: 100%;

  }
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
