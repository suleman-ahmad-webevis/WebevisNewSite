import styled from "styled-components";

export const HelpWrapper = styled.div`
  width: 95%;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const HelpSection = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
`;
export const HelpText = styled.div`
  width: 50%;
  display: flex;
  padding-right: 20px;
  flex-direction: column;
  gap: 2rem;
  h1 {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (24 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 970px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;
export const Methods = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  :nth-child(3) {
    display: none;
  }
  @media screen and (max-width: 970px) {
    width: 100%;
    margin: 3rem auto 0 auto;
    row-gap: 2rem;
  }
  @media screen and (max-width: 576px) {
    width: ${({ mdwidth }) => (mdwidth ? mdwidth : "100%")};
  }
`;
export const Method2 = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 970px) {
    row-gap: 2rem;
  }
  /* gap: 1rem; */
`;
export const MethodsItem = styled.div`
  width: ${({ width }) => (width ? width : "24%")};
  box-shadow: 3px 5px 23px rgba(0, 0, 0, 0.15);
  border-radius: 51px;
  color: #2b2c2f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  /* gap: 10px; */
  transition: 0.5s all ease-in-out;
  @media screen and (max-width: 1440px) {
    border-radius: calc(27px + (51 - 27) * (100vw - 390px) / (1440 - 390));
  }
  .img {
    max-width: 68px;
    @media screen and (max-width: 970px) {
      max-width: 40px;
    }
  }
  .img2 {
    display: none;
    /* margin-bottom: 10px; */
  }

  @media screen and (max-width: 1001px) {
    padding: 1.5rem;
  }
  @media screen and (max-width: 970px) {
    width: ${({ width }) => (width ? width : "49%")};
  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  h3 {
    /* padding: 0 1rem; */
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(
        14.894px + (28 - 14.894) * (100vw - 390px) / (1440 - 390)
      );
    }
  }
  p {
    /* padding: 0 1.5rem; */
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(9px + (18 - 9) * (100vw - 390px) / (1440 - 390));
    }
  }
  &:hover {
    .img2 {
      display: block;
    }
    .img1 {
      display: none;
    }
    background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
    color: white;
  }
`;
