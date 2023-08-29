import styled from "styled-components";
import Image from "next/image";
export const ParentText = styled.section`
  text-align: center;
  width: 95%;
  margin: auto;
  h2 {
    margin: 0;
    margin-top: 50px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #28b781;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  h1 {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    margin: 0;
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const VedioFlex = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 70px;
  @media screen and (max-width: 844px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`;
export const VideoMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45%;
  margin: auto;
  gap: 20px;
  &:hover {
    .text {
      background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  @media screen and (max-width: 844px) {
    width: 100%;
  }
`;
export const VedioImage = styled.div`
  color: #f2faf6;
  text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.09);
  font-size: 137.88px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 1440px) {
    font-size: calc(
      77.222px + (137.88 - 77.222) * (100vw - 390px) / (1440 - 390)
    );
  }
  @media screen and (max-width: 767px) {
    line-height: 80px;
  }
`;
export const VedioText = styled.section`
  display: flex;
  flex-direction: column;
`;
export const TextInside = styled.section`
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin: auto;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    margin: auto;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const TextImage = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;
export const ResponsiveImage = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
    height: ${({ maxh, minh }) => (
      maxh,
      minh
        ? `calc(${minh}px + (${maxh} - ${minh}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
  }
  object-fit: contain;
`;
