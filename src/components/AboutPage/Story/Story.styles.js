import styled from "styled-components";

export const StyledStory = styled.section`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* padding: 10px 70px; */
  width: 100%;
  .container {
    max-width: 1380px;
    padding: 0 15px;
    margin: 0 auto;
    @media screen and (max-width: 1400px) {
      max-width: 1250px;
    }
    @media screen and (max-width: 1199px) {
      max-width: 970px;
    }
  }
`;

export const StoryText = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  max-width: 999px;
  text-align: center;
  margin: 0 auto;
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
    span {
      color: #28b781;
    }
  }
  h3 {
    color: #434956;
    text-align: center;
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

export const StoryTimline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 70px 20px;
  width: 100%;
  /* min-height: 700px; */
`;
export const ImageWrapper = styled.div`
  max-width: 471px;
  @media screen and (max-width: 1400px) {
    max-width: 330px;
  }
  @media screen and (max-width: 1199px) {
    max-width: 300px;
  }
  @media screen and (max-width: 991px) {
    max-width: 216px;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
export const TimelineText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? "flex-end" : "flex-start")};
  position: absolute;
  right: ${({ right }) => (right ? right : "auto")};
  top: ${({ top }) => (top ? top : "0%")};
  left: ${({ left }) => (left ? left : "auto")};

  h4 {
    color: #434956;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: ${({ align }) => (align ? "right" : "left")};
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (24 - 14) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1199px) {
      font-size: 17px;
    }
    @media screen and (max-width: 991px) {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1400px) {
    right: ${({ right1 }) => (right1 ? right1 : "auto")};
    top: ${({ top1 }) => (top1 ? top1 : "0%")};
    left: ${({ left1 }) => (left1 ? left1 : "auto")};
  }
`;
