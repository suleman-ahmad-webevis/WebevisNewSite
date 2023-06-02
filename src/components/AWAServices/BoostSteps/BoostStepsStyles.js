import styled from "styled-components";
import Image from "next/image";

export const BoostStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 95%;
  margin: 0 auto;

  h2 {
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #424954;
    margin: 30px 0 50px 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }

  @media screen and (max-width: 844px) {
    align-items: center;
  }
`;

export const BoostStepsContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 2rem;
  position: relative;

  @media screen and (max-width: 844px) {
    flex-direction: column-reverse;
    gap: 170px;
    gap: calc(150px + (170 - 150) * (100vw - 390px) / (844 - 390)) !important;
  }
`;

export const BoostStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  width: 33%;
  /* margin: 0 auto; */
  @media screen and (max-width: 844px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
    width: 60%;

    br {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    width: 85%;
  }
  @media screen and (max-width: 420px) {
    width: 95%;
  }
`;

export const BoostHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 844px) {
    align-items: flex-start;
  }

  h3 {
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    margin: 0;
    text-align: center;
    color: #434956;

    @media screen and (max-width: 1440px) {
      font-size: calc(
        21.3182px + (28 - 21.3182) * (100vw - 390px) / (1440 - 390)
      );
    }
  }

  p {
    font-weight: 400;
    font-size: 28px;
    line-height: 35px;
    margin: 0;
    text-align: center;
    color: #434956;

    @media screen and (max-width: 1440px) {
      font-size: calc(
        21.3182px + (28 - 21.3182) * (100vw - 390px) / (1440 - 390)
      );
    }
    @media screen and (max-width: 844px) {
      text-align: left;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }
`;

export const BoostImage = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 844px) {
    display: none;
  }
`;

export const FloatingArrow = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? top : "")};
  left: ${({ left }) => (left ? left : "")};
  z-index: -1;
  @media screen and (max-width: 1215px) {
    left: ${({ leftF }) => (leftF ? leftF : "")};
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const ResponsiveImageWidth = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
  }
`;
export const FloatingImage = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  .mobileReponsive {
    @media screen and (min-width: 844px) {
      display: none;
      max-width: 100%;
      height: calc(
        400px + (675 - 400) * (100vw - 390px) / (844 - 390)
      ) !important;
    }
  }
`;