import styled from "styled-components";
import black1 from "../../../assets//images/Services/AICompetitorAnalysis/black1.png";
export const OfferSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
`;
export const OfferText = styled.div`
  width: 50%;
  margin: 0 auto 6rem auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 658px) {
    h1 {
      font-size: 39px;
    }
    p {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
`;
export const OfferMain = styled.div`
  width: 95%;
  padding: 0 20px;
  position: relative;
  display: flex;
  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    gap: 10px;
    width: 85%;
    align-self: center;
  }
`;
export const OfferCard = styled.div`
  width: 33%;
  position: relative;
  background: #d9d9d9;
  border-radius: 48px;
  color: #2b2c2f;
  display: flex;
  flex-direction: column;
  transition: 0.5s all ease-in-out;
  margin-bottom: 5rem;

  /* &::before {
    content: "";
    background-image: url(${pol.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100px;
    width: 120px;
    border: 10px solid white;
    border-radius: 50%;
  } */
  @media screen and (max-width: 1024px) {
    width: 57%;
  }
  @media screen and (max-width: 658px) {
    width: 100%;
    padding: 3px;
  }
  .img-2 {
    display: none;
  }
  hr {
    border: 0.8px solid #a1a1a1;
    width: 90%;
    margin: auto;
  }
  &.active {
    background: url(${black1.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #d9d9d9;
    transform: scale(1.04);
    z-index: 1;
    .img-1 {
      display: block;
    }
    .img-2 {
      display: none;
    }
    button {
      background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    }
  }
  &:hover {
    background: url(${black1.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #d9d9d9;
    transform: scale(1.04);
    z-index: 1;
    .img-1 {
      display: block;
    }
    .img-2 {
      display: none;
    }
    button {
      background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    }
  }
`;
export const Border = styled.div`
  position: absolute;
  z-index: 1;
  top: -100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    top: -60px;
    img {
      width: 131px;
      height: 131px;
    }
  }
`;
export const OfferHead = styled.div`
  width: 90%;
  margin: 3rem auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    text-align: center;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(29px + (48 - 29) * (100vw - 340px) / (1440 - 340));
    }
  }
  @media screen and (max-width: 760px) {
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 28.9764px;
      line-height: 150%;
      text-align: center;
    }
  }
`;
export const OfferTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 78px;
    aspect-ratio: 1/1;
  }
  span {
    text-align: left;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 150%;
      margin: 0;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      margin: 0;
    }
  }

  @media screen and (max-width: 1440px) {
    span {
      h1 {
        font-size: calc(16px + (28 - 16) * (100vw - 340px) / (1440 - 340));
      }
      p {
        font-size: calc(10px + (16 - 10) * (100vw - 340px) / (1440 - 340));
      }
    }
  }
  @media screen and (max-width: 760px) {
    img {
      width: 48px;
      height: 42px;
      aspect-ratio: 1/1;
    }
    span {
      h1 {
        font-weight: 700;
        font-size: 16.9029px;
        line-height: 150%;
        text-align: center;
      }
    }
  }
`;
export const Offerbody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
  margin: 1.5rem auto;
`;

export const BodyText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
  }
`;
export const Button = styled.button`
  width: 95%;
  background: #bbbbbb;
  border-radius: 49px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
  transition: 0.5ms ease-in-out;
  margin: 2rem auto;
  height: 66px;
  &:hover {
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  }

  @media screen and (max-width: 760px) {
    border-radius: 30px;
    height: 40px;
    font-weight: 700;
    font-size: 18.1103px;
    line-height: 150%;
    text-align: center;
  }
`;
