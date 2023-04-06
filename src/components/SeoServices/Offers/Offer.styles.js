import styled from "styled-components";
import Bg from "../../../assets//images/seoservices/cardBg.png";

export const OfferSec = styled.div`
  display: flex;
  flex-direction: column;
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
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
  }
`;
export const OfferMain = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
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
  .img-2 {
    display: none;
  }
  hr {
    border: 0.8px solid #a1a1a1;
    width: 90%;
    margin: auto;
  }
  &:hover {
    background: url(${Bg.src});
    color: #d9d9d9;
    transform: scale(1.04);
    z-index: 1;
    .img-1 {
      display: none;
    }
    .img-2 {
      display: block;
    }

    button {
      background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    }
  }
`;
export const OfferHead = styled.div`
  width: 90%;
  margin: 3rem auto 1rem auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    text-align: center;
  }
`;
export const OfferTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 78px;
    /* aspect-ratio: 1/1; */
  }
  span {
    text-align: left;
    h2 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 150%;
    }
    p {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
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
    font-family: "Outfit";
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
`;
