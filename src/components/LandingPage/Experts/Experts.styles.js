import styled from "styled-components";
import BG from "../../../assets/images/Hire/Hire-bg.png"

export const Expert = styled.div`
  padding: 60px 0 60px 0;
  background: url(${BG.src});
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 992px) {
    padding: 80px 0 100px 0;
  }
  h2 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    /* font-family: "GT Haptik"; */
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #424954;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const ExpertButton = styled.button`
  width: 209px;
  height: 50px;
  background: #d9d9d9;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  gap: 6px;
  color: #959a8d;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #fff;
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1400px) {
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;
export const Pictures = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  button {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
    }
  }
  img {
    max-width: 100%;
    margin: 0 auto;
    object-fit: contain;
    /* @media screen and (min-width: 768px) {
      max-width: 300px;
      height: 350px;
    }
    @media screen and (min-width: 992px) {
      max-width: 400px;
      height: 415px;
    }
    @media screen and (min-width: 1400px) {
      max-width: initial;
    } */
  }
`;
