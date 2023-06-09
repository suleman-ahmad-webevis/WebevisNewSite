import styled from "styled-components";
import Image from "next/image";
export const ParentText = styled.section`
  text-align: center;
  width: 95%;
  margin: auto;
  h2 {
    margin: 0;
    margin-top: 50px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #28b781;
  }
  h1 {
    margin: 0;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
  }
  p {
    margin: 0;
    margin-bottom: 50px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
  }
  @media screen and (max-width: 1440px) {
    h2 {
      font-size: calc(16px + (20 - 16) * (100vw - 390px) / (1440 - 390));
    }
    h1 {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
    p {
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
  /* @media screen and (max-width:1024px){
    gap: 20px;
  } */
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
  @media screen and (max-width: 844px) {
    width: 80%;
  }
`;
export const VedioImage = styled.section``;
export const VedioText = styled.section`
  display: flex;
  flex-direction: column;

  
`;
export const TextInside = styled.section`
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    margin: auto;
  }
  p {
    margin: auto;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const TextImage = styled.section`
margin:auto;

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
