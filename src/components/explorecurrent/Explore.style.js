import styled from "styled-components";
import black1 from "./cardBg.png";
export const OfferSec = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 2rem auto;
  @media screen and (max-width: 1140px) {
    width: 100%;
  }
`;
export const OfferText = styled.div`
  width: 50%;
  margin: 0 auto 6rem auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 910px) {
    /* margin-bottom: 70px; */
  }
`;
export const OfferMain = styled.div`
  width: 95%;
  margin: 2rem auto 0 auto;
  /* padding: 0 20px; */
  position: relative;
  display: flex;

  @media screen and (max-width: 1024px) {
    margin-top: 7rem;
    flex-direction: column;
    gap: 8rem;
  }

  @media screen and (max-width: 538px) {
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
  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 7rem auto 0 auto;
  }
  @media screen and (max-width: 1140px) {
    width: 50%;
    margin: 0 auto;
  }
  /* @media screen and (max-width: 910px) {
    width: 57%;
    margin: auto;
    margin-top: 7rem;
  } */
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 624px) {
    width: 80%;
  }
  @media screen and (max-width: 624px) {
    width: 90%;
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
    transition: 0.5s;

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
  /* &:hover {
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
  } */
`;
export const Border = styled.div`
  position: absolute;
  z-index: 1;
  top: -70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    /* top: -60px; */
    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
      /* width: 111px;
      height: 111px; */
    }
  }
`;
export const OfferHead = styled.div`
  width: 90%;
  margin: 6rem auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    text-align: center;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(22px + (48 - 22) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const OfferTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  span {
    text-align: left;
    h2 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 150%;
      margin: 0;
    }
    p {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      margin: 0;
    }
  }

  @media screen and (max-width: 1440px) {
    span {
      h2 {
        font-size: calc(16px + (28 - 16) * (100vw - 390px) / (1440 - 390));
      }
      p {
        font-size: calc(10px + (16 - 10) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  @media screen and (max-width: 760px) {
    /* img {
      width: 48px;
      height: 42px;
      aspect-ratio: 1/1;
    } */
    /* span {
      h1 {
        font-weight: 700;
        font-size: 16.9029px;
        line-height: 150%;
        text-align: center;
      }
    } */
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
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    @media screen and (max-width: 1440px) {
      p {
        font-size: calc(14px + (20 - 14) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
`;
export const Button = styled.button`
  width: 90%;
  background: #bbbbbb;
  border-radius: 49px;
  border: none;
  font-family: "Outfit";
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

  @media screen and (max-width: 1440px) {
    border-radius: 30px;
    height: calc(40px + (60 - 40) * (100vw - 390px) / (1440 - 390));
    font-weight: 700;
    font-size: calc(18px + (30 - 18) * (100vw - 390px) / (1440 - 390));
    text-align: center;
  }
`;
