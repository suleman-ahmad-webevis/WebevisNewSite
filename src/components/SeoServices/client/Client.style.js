import styled from "styled-components";
export const ClientSec = styled.div`
  text-align: center;
  width: 95%;
  margin: 3rem auto 3rem auto;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.14);
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
  }
  @media screen and (max-width: 970px) {
    width: 100%;
    h1 {
      width: 80%;
      font-size: 40px;
    }
  }
  @media screen and (max-width: 650px) {
    h1 {
      width: 90%;
      font-size: 30px;
    }
  }
`;
export const ClientBrand = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  @media screen and (max-width: 520px) {
    gap: 10px;
  }
  img {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    @media screen and (max-width: 730px) {
      &:nth-child(1) {
        display: none;
      }
    }
    @media screen and (max-width: 520px) {
      &:nth-child(3) {
        display: none;
      }
    }
  }
`;
