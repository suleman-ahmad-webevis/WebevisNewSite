import styled from "styled-components";
export const Blog = styled.div`
  background-color: #eaf7ee;
  padding: 56px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(80px + (56 - 80) * (100vw - 390px) / (1440 - 390)) 0
      calc(0px + (56 - 0) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const HeroParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 40px;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    row-gap: 0;
  }
`;
export const HeroSec = styled.section`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
  }

  h1 {
    color: #434956;
    font-family: "Outfit";
    font-size: 70px;
    font-style: normal;
    font-weight: 800;
    line-height: 97%;
    @media screen and (max-width: 1440px) {
      font-size: calc(32px + (70 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    width: 80%;
    color: #434956;
    font-family: Outfit;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px 8px 8px 20px;
  margin-top: 40px;
  max-width: 555px;
  @media screen and (max-width: 1440px) {
    margin-top: calc(30px + (40 - 30) * (100vw - 390px) / (1440 - 390));
  }
`;
export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 80%;
  svg {
    width: 15px;
    height: 16px;
    stroke-width: 1;
  }
  input {
    width: 100%;
    outline: none;
    color: #959ead;
    font-size: 16px;
    font-weight: light;
  }
`;
export const Popular = styled.div`
  display: flex;
  gap: 15px;
  align-items: none;
  margin-top: 20px;
  max-width: 520px;
  @media screen and (min-width: 434px) {
    align-items: center;
  }
  span {
    flex-shrink: 0;
    font-size: 16px;
    color: #5a7184;
  }
`;
export const BtnHolder = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
  }
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
export const BlogWrapper = styled.section`
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;
export const Buton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 40px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: #fff;
    border: 1px solid #28b781;
    border-radius: 10px;
    color: #28b781;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    width: 181px;
    height: 48px;
    .btn {
      margin-top: 4px;
    }
  }
`;
