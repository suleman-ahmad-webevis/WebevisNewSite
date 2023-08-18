import styled from "styled-components";
import back from "../../EmailServices/assests/outBack.png";
import Image from "next/image";
export const OutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 50px;

 
`;
export const OutDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  width: 100%;
  @media screen and (max-width: 945px) {
    flex-direction: column;
    margin: auto;
  }
`;
export const DivOne = styled.div`
  width: 45%;
  @media screen and (max-width: 945px) {
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
  }
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #28b781;
    @media screen and (max-width: 564px) {
      font-size: 12px;
    }
  }
  h3 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    margin: 0;
    color: #424954;
    @media screen and (max-width: 1250px) {
      font-size: 31px;
    }
    @media screen and (max-width: 564px) {
      font-size: 28px;
    }
  }
  h4 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1250px) {
      font-size: 14px;
    }
    @media screen and (max-width: 564px) {
      font-size: 18px;
    }
  }
`;
export const DivTwo = styled.div`
  width: 50%;
  position: relative;
  @media screen and (max-width: 945px) {
    width: 74%;
    margin: auto;
  }
  @media screen and (max-width: 678px) {
    width: 100%;
    margin: auto;
  }
  padding: 40px 30px;
  border-radius: 35px;
  background-image: url(${back.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 546px) {
    padding: 22px 18px;
  }
  .key {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  strong {
    border-radius: 10px;
    width: 90px;
    background: white;
    height: 5px;
    position: relative;
    text-align: center;
    top: 25px;
    @media screen and (max-width: 546px) {
      width: 57px;
      height: 4px;
      position: relative;
      text-align: center;
      top: 13px;
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    margin-bottom: 40px;
    font-size: 32px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 546px) {
      font-size: 18px;
      margin-bottom: 16px;
    }
  }
  h5 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 33px;
    color: #ffffff;
    @media screen and (max-width: 1250px) {
      font-size: 27px;
    }
    margin-bottom: 40px;
    @media screen and (max-width: 564px) {
      font-size: 18px;
      margin-bottom: 16px;
    }
  }
`;
export const InsideDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InsideFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 10px;
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1250px) {
      font-size: 17px;
    }
    @media screen and (max-width: 564px) {
      font-size: 11px;
      font-weight: 600;
    }
  }
  small {
    color: #fff;
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media screen and (max-width: 564px) {
    gap: 5px;
    small {
      font-size: 14px;
    }
    img {
      width: 16px;
      height: 10px;
      object-fit: contain;
    }
  }
`;
export const OneInside = styled.section`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-bottom: 10px;
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #434956;
  }
  small {
    color: #fff;
    font-family: Outfit;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const OneFlex = styled.div``;
export const OutSec = styled.section`
  width: 100%;
  margin: 8rem auto 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    object-fit: contain;
    height: max-content;
  }
`;
export const FloatingText = styled.div`
  position: absolute;
  top: 40%;
  left: 36%;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    width: 60%;
    @media screen and (max-width: 1440px) {
      font-size: calc(24px + (45 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const Floating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${({ top }) => (top ? top : "")};
  left: ${({ left }) => (left ? left : "")};
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #434956;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    width: 75%;
    @media screen and (max-width: 1440px) {
      font-size: calc(12px + (28 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 1000px) {
    top: ${({ topf }) => (topf ? topf : "")};
    left: ${({ leftf }) => (leftf ? leftf : "")};
  }
`;
export const FloatingImg = styled(Image)`
  @media screen and (max-width: 1440px) {
    width: ${({ max, min }) => (
      max,
      min
        ? `calc(${min}px + (${max} - ${min}) * (100vw - 390px) / (1440 - 390)) !important`
        : ""
    )};
  }
`;
export const Button = styled.section`
  width: 30%;
  margin-top: 20px;
  height: 20px;
  padding: 15px 30px;
  border-radius: 100px;
  font-size: 18px;
  color: white;
  text-align: center;
  background-image: url(${back.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1260px) {
    width: 48%;
  }
`;
