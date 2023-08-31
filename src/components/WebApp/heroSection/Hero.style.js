import styled from "styled-components";

export const HeroSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 51px;
  @media screen and (max-width: 1200px) {
    gap: 18px;
  }
  @media screen and (max-width: 991px) {
    gap: 8px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1276px) {
    br {
      display: none;
    }
  }
`;
export const HeroText = styled.div`
  margin-top: 31px;
  max-width: 50%;
  @media screen and (max-width: 1200px) {
    max-width: 45%;
  }
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
  @media screen and (max-width: 991px) {
    button{
      border-radius: 12px;
    }
  }
  h1 {
    color: #2b2c2f;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 20px;
    @media screen and (max-width: 1200px) {
      font-size: 50px;
    }
    @media screen and (max-width: 991px) {
      font-size: 28px;
    }
    @media screen and (max-width: 767px) {
      font-size: 32px;
    }
  }
  p {
    color: #2b2c2f;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    margin-bottom: 40px;
    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }
    @media screen and (max-width: 992px) {
      font-size: 16px;
    }
    @media screen and (max-width: 767px) {
      font-size: 18px;
    }
  }

`;
export const HeroImage = styled.div`
  margin-top: 59px;
  @media screen and (max-width: 1200px) {
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
