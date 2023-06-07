import styled from "styled-components";
export const InterSec = styled.section`
 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px dashed #28b781;
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 10px;
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    text-transform: uppercase;
    color: #424954;
    margin-bottom: -2rem;
  }
  h1 {
    max-width: 969px;
    font-weight: 500;
    font-size: 60px;
    line-height: 75px;
    text-align: center;
    color: #424954;
  }
  @media screen and (max-width: 658px) {
    h1 {
      font-size: 24px;
      line-height: 32px;
      margin-top: 3rem;
    }
    p {
      font-size: 21px;
    }
  }
`;

export const Btn = styled.section`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 658px) {
    flex-direction: column;
    gap: 0px;
  }
`;
export const Button = styled.button`
  color: white;
  background: ${({ bg }) =>
    bg ? bg : "linear-gradient(93.39deg, #28B781 21.84%, #CFEF00 178.39%)"};
  border-radius: 6px;
  width: 213px;
  height: 45px;
  margin-bottom: 20px;
  font-size: 20px;
  @media screen and (max-width: 658px) {
    width: ${({ Width }) => (Width ? Width : "115px")};
    font-size: ${({ Fsize }) => (Fsize ? Fsize : "14px")};
    height: ${({Height})=>Height?Height: "30px"};
  }
`;
