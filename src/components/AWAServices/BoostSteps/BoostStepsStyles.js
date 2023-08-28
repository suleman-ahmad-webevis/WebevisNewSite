import styled, { css } from "styled-components";
import Image from "next/image";
import Arrow from "../../../assets/images/Services/AWAServices/Arrow.png";

export const BoostStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  @media screen and (max-width: 440px) {
    padding: 0;
  }
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
  justify-content: space-between;
  position: relative;
  gap: 2rem;
  @media screen and (max-width: 1385px) {
    max-width: 1200px;
  }
  @media screen and (max-width: 1199px) {
    max-width: 1024px;
  }
  @media screen and (max-width: 1023px) {
    max-width: 992px;
  }

  @media screen and (max-width: 991px) {
    max-width: 768px;
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 164px;
  }
  @media screen and (max-width: 767px) {
    max-width: 576px;
  }
  @media screen and (max-width: 575px) {
    max-width: 100%;
  }
`;

export const BoostStep = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  @media screen and (max-width: 991px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }
  @media screen and (max-width: 767px) {
    max-width: 375px;
  }

  ${(props) =>
    props.addBefore &&
    css`
      &:before {
        z-index: -1;
        content: "";
        position: absolute;
        top: 45px;
        left: 90%;
        background: url(${Arrow.src});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 338.003px;
        height: 34.932px;
        @media screen and (max-width: 1439px) {
          left: 72%;
        }
        @media screen and (max-width: 1385px) {
          top: 43px;
          width: 258.003px;
          height: 24.932px;
        }
        @media screen and (max-width: 1199px) {
          top: 40px;
          left: 71%;
          width: 218.003px;
          height: 20.932px;
        }
        @media screen and (max-width: 991px) {
          transform: rotate(-90deg);
          left: -5%;
          top: -97px;
          width: 156.003px;
          height: 17.932px;
        }
        @media screen and (max-width: 767px) {
          left: -18%;
          top: -106px;
          width: 216.003px;
          height: 17.932px;
        }
        @media screen and (max-width: 440px) {
          left: -20%;
          top: -124px;
          height: 16.932px;
        }
        /* @media screen and (max-width: 575px) {
          left: -93px;
        } */
      }
    `}
`;

export const BoostHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 288px;
  @media screen and (max-width: 1440px) {
    max-width: calc(
      219px + (288 - 219) * (100vw - 390px) / (1440 - 390)
    ) !important;
  }
  @media screen and (max-width: 991px) {
    max-width: 100% !important;
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
    @media screen and (max-width: 991px) {
      text-align: left;
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
    @media screen and (max-width: 991px) {
      text-align: left;
    }
  }
`;

export const BoostImage = styled.div`
  display: flex;
  align-items: center;
  width: 133px;
  height: 133px;
  flex-shrink: 0;
  @media screen and (max-width: 1440px) {
    width: calc(75px + (133 - 75) * (100vw - 390px) / (1440 - 390)) !important;
    height: calc(75px + (133 - 75) * (100vw - 390px) / (1440 - 390));
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
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
