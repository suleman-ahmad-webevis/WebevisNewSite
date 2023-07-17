import styled from "styled-components";

export const StyledWorkHistory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  padding-top: 90px;
`;

export const WorkText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 50px;
  width: 43%;
  flex-shrink: 0;
  gap: 30px;
  h3 {
    color: #434956;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }

  h2 {
    color: #434956;
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  span {
    color: rgba(40, 183, 129, 1);
    font-family: Outfit;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  h4 {
    color: #434956;
    font-family: Outfit;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;

export const WorkStatus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const WorkNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? "flex-start" : "center")};
  gap: 20px;
  padding: ${({ padding }) => (padding ? padding : "0px 26px 40px 0px")};
  border-left: ${({ borderl }) => (borderl ? borderl : "none")};
  border-right: ${({ borderR }) => (borderR ? borderR : "none")};
  border-top: ${({ borderT }) => (borderT ? borderT : "none")};
  border-bottom: ${({ borderB }) => (borderB ? borderB : "none")};
  margin-left: ${({ margin }) => (margin ? margin : "0px")};
  h1 {
    color: #434956;
    font-family: Outfit;
    font-size: 60px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (60 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #28b781;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;

export const TeamSlider = styled.div`
  width: 57%;
  margin: 0 auto;
  /* .slick-slider {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  } */
  .box {
    margin-right: 0px;

    height: 443px;
    max-width: 296px;
    margin: 0 auto;
    button {
      background: red;
    }

    img {
      margin-top: 50px;
      max-width: 100%;
      height: auto;
    }
  }
  .slick-current {
    .box {
      margin-right: 50px;
      height: 673px;
      max-width: 448px;
      margin: 0 50px 0 auto;

      img {
        margin-top: 0px;
        max-width: 100%;
        height: auto;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;
