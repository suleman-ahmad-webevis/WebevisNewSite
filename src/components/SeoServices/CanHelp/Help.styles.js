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
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
  }
`;
export const Methods = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;
export const MethodsItem = styled.div`
  box-shadow: 3px 5px 23px rgba(0, 0, 0, 0.15);
  border-radius: 51px;
  color: #2b2c2f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 0 10px 0;
  gap: 10px;
  width: 330px;
  aspect-ratio: 1/1;
  .img2 {
    display: none;
  }

  img {
    padding-left: 10px;
    width: 80px;
    height: 80px;
  }
  h3 {
    padding: 0 1rem;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
  }
  p {
    padding: 0 1.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
  }
  &:hover {
    .img2 {
      padding-left: 1rem;
      display: block;
      width: ${({ width }) => (width ? "80px" : "50px")};
      height: ${({ height }) => (height ? "80px" : "47px")};
      /* aspect-ratio: 1/2; */
    }
    .img1 {
      display: none;
    }
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    color: white;
  }
`;
