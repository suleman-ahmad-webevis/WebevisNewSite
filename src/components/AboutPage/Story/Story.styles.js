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
    @media screen and (max-width: 991px) {
      max-width: 786px;
    }
    /* @media screen and (max-width: 767px) {
      max-width: 547px;
    }
    @media screen and (max-width: 575px) {
      max-width: 383px;
      padding: 0;
    } */
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
  @media screen and (max-width: 575px) {
    padding: 70px 0px;
  }
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
  @media screen and (max-width: 768px) {
    max-width: 250px;
  }
  @media screen and (max-width: 767px) {
    max-width: 200px;
  }
  @media screen and (max-width: 575px) {
    max-width: 125px;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
export const TimelineText = styled.div`
  max-width: 31%;
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
      font-size: calc(12px + (28 - 12) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 576px) {
      position: absolute;
      right: ${({ rightText }) => (rightText ? rightText : "auto")};
      top: ${({ topText }) => (topText ? topText : "0%")};
      left: ${({ leftText }) => (leftText ? leftText : "auto")};
    }
  }
  p {
    color: #434956;
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
      line-height: normal;
    }
    @media screen and (max-width: 767px) {
      font-size: 11px;
      line-height: 13px;
    }
  }

  @media screen and (max-width: 575px) {
    right: ${({ right2 }) => (right2 ? right2 : "auto")};
    top: ${({ top2 }) => (top2 ? top2 : "0%")};
    left: ${({ left2 }) => (left2 ? left2 : "auto")};
  }

  /* @media screen and (max-width: 767px) {
    max-width: 120px;
  }
  @media screen and (max-width: 575px) {
    max-width: 110px;
  } */
`;
