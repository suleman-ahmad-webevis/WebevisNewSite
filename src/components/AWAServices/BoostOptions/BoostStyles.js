import styled from "styled-components";
import Image from "next/image";
export const ResponsiveImage = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390))`
        : ""
    )};
    height: ${({ maxh, minh }) => (
      maxh,
      minh
        ? `calc(${minh}px + (${maxh} - ${minh}) * (100vw - 390px) / (1440 - 390))`
        : ""
    )};
  }
`;
export const BoostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  img {
    max-width: 100%;
  }

  h2 {
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #424954;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #434956;
    margin: 0 0 50px 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;

export const BoostOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  gap: 5rem;
  .img-holder {
    img {
      max-width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: ${({ direction }) =>
      direction ? "column-reverse" : "column"};
    gap: 2rem;
    .img-holder {
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
  img {
    max-width: 100%;
  }
`;

export const BoostCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    align-items: center;
  }
  h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (28 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  h5 {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #434956;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (20 - 18) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #a1a1a1;
    margin: 0;
  }
`;

export const BoostButton = styled.button`
  width: 209px;
  height: 50px;
  background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
  border-radius: 54px;
  margin-top: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #ffffff;
  @media screen and (max-width: 1440px) {
    font-size: calc(18px + (20 - 18) * (100vw - 390px) / (1440 - 390));
    height: calc(40px + (50 - 40) * (100vw - 390px) / (1440 - 390));
  }
`;