import styled from "styled-components";
import Image from "next/image";
export const ParentHeading = styled.section`
  text-align: center;
  margin-top: 40px;
  padding: 10px 20px;
  h1 {
    width: 98%;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
    margin: auto;
  }
  p {
    width: 90%;
    margin: auto;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const ParentServices = styled.section`
  display: flex;
  gap: 20px;
  width: 95%;
  margin: auto;
  margin-top: 30px;
`;
export const ChildServicesOne = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 35%;
    margin: auto;
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
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(12px + (18 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const ChildServicesTwo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  margin: auto;
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
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(12px + (18 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const ChildOne = styled.section``;
export const ServicesImage = styled.section`
img{
  width: 95%;
  object-fit: contain;
  height: max-content;
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
  display:flex;
  align-items:center;
  object-fit: contain;
  margin:auto;
margin-bottom:80px;
margin-top:50px;


`;
