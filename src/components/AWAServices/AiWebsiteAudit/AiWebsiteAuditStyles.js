import styled from "styled-components";
import Image from "next/image";

export const AuditContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 30px auto 0 auto;

  h2 {
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #424954;
    margin: 30px 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
`;

export const AuditResults = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin: 0;
    text-transform: uppercase;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (18 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ResultOneTitle = styled.div`
  margin-left: 35px;
`;

export const ResultTwoTitle = styled.div`
  margin-bottom: 35px;
  padding-left: 40px;
  @media screen and (max-width: 576px) {
    padding-left: 0;
  }
`;
export const AuditCardsContainer = styled.div`
  display: flex;
  align-items: center;
  .image-holder {
    img {
      max-width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AuditCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 40px;
  @media screen and (max-width: 576px) {
    padding-left: 0;
  }
`;

export const AuditCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuditCardHeading = styled.div`
  h4 {
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
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
    height: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
  }
`;
