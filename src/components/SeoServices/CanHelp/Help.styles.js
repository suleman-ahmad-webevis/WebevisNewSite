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
  flex-direction: column;
  gap: 2rem;
  h1 {
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 45px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1020px) {
      font-size: 40px;
    }
    @media screen and (max-width: 600px) {
      font-size: 25px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1020px) {
      font-size: 26px;
    }
    @media screen and (max-width: 750px) {
      font-size: 20px;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
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
  /* display: flex;
  align-items: flex-start; */
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  :nth-child(3) {
    display: none;
  }
  @media screen and (max-width: 970px) {
    width: 100%;
    margin: 3rem auto 0 auto;
  }
  @media screen and (max-width: 390px) {
    grid-template-columns: auto;
  }
`;
export const Method2 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;
  @media screen and (max-width: 970px) {
    grid-template-columns: auto auto auto;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 390px) {
    grid-template-columns: auto;
  }
`;
export const MethodsItem = styled.div`
  box-shadow: 3px 5px 23px rgba(0, 0, 0, 0.15);
  border-radius: 51px;
  color: #2b2c2f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  gap: 10px;
  max-width: 100%;
  height: 300px;
  transition: 0.5s all ease-in-out;
  .img2 {
    display: none;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1001px) {
    height: 250px;
    padding: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    height: 200px;
  }

  img {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    /* width: ${({ width }) => (width ? "80px" : "50px")};
    height: ${({ height }) => (height ? "80px" : "47px")}; */
  }
  h3 {
    /* padding: 0 1rem; */
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    @media screen and (max-width: 1140px) {
      font-size: 22px;
    }
    @media screen and (max-width: 1001px) {
      font-size: 20px;
    }
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
  p {
    /* padding: 0 1.5rem; */
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    @media screen and (max-width: 1001px) {
      font-size: 14px;
    }
    @media screen and (max-width: 500px) {
      font-size: 10px;
    }
  }
  &:hover {
    .img2 {
      /* padding-left: 1rem; */
      display: block;
      /* width: ${({ width }) => (width ? "80px" : "50px")};
      height: ${({ height }) => (height ? "80px" : "47px")}; */
      /* aspect-ratio: 1/2; */
    }
    .img1 {
      display: none;
    }
    background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
    color: white;
  }
`;
