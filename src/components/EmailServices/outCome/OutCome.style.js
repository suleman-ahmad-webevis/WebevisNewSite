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
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #434956;
  }
  small {
    color: #fff;

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const OneFlex = styled.div``;
export const OutSec = styled.section`
  width: 1000px;
  margin: 8rem auto 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1199px) {
    width: 900px;
  }
  @media screen and (max-width: 991px) {
    width: 600px;
  }
  @media screen and (max-width: 767px) {
    width: 430px;
  }
  @media screen and (max-width: 575px) {
    width: 280px;
  margin: 2rem auto 20px auto;
  }
  .circleImg {
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }
`;
export const FloatingText = styled.div`
  position: absolute;
  top: 40%;
  left: 32%;
  @media screen and (max-width: 1199px) {
    left: 34%;
  }
  @media screen and (max-width: 991px) {
    left: 31%;
  }
  @media screen and (max-width: 767px) {
    left: 32%;
    top: 43%;
  }
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 150%;
    text-align: center;
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 1199px) {
      font-size: 38px;
    }
    @media screen and (max-width: 991px) {
      font-size: 28px;
    }
    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
    @media screen and (max-width: 575px) {
      font-size: 14px;
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
  right: ${({ right }) => (right ? right : "")};
  @media screen and (max-width: 1199px) {
    top: ${({ tops }) => (tops ? tops : "")};
    left: ${({ lefts }) => (lefts ? lefts : "")};
    right: ${({ rights }) => (rights ? rights : "")};
  }
  @media screen and (max-width: 991px) {
    top: ${({ topt }) => (topt ? topt : "")};
    left: ${({ leftt }) => (leftt ? leftt : "")};
    right: ${({ rightt }) => (rightt ? rightt : "")};
  }
  @media screen and (max-width: 767px) {
    top: ${({ topf }) => (topf ? topf : "")};
    left: ${({ leftf }) => (leftf ? leftf : "")};
    right: ${({ rightf }) => (rightf ? rightf : "")};
  }
  @media screen and (max-width: 575px) {
    top: ${({ topg }) => (topg ? topg : "")};
    left: ${({ leftg }) => (leftg ? leftg : "")};
    right: ${({ rightg }) => (rightg ? rightg : "")};
  }
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 150%;
    text-align: center;
    color: #434956;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 1199px) {
      font-size: 22px;
    }
    @media screen and (max-width: 991px) {
      font-size: 16px;
      width: 140px;
      br {
        display: none;
      }
    }
    @media screen and (max-width: 767px) {
      font-size: 14px;
      width: 129px;
    }
    @media screen and (max-width: 575px) {
      font-size: 10px;
      width: 100px;
    }

    /* @media screen and (max-width: 1440px) {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 1199px) {
      font-size: 20px;
    }
    @media screen and (max-width: 991px) {
      width: 90%;
      font-size: 16px;
    }
    @media screen and (max-width: 767px) {
      font-size: 13px;
    }
    @media screen and (max-width: 575px) {
      font-size: 10px;
    } */
  }
  .floating {
    @media screen and (max-width: 991px) {
      max-width: 60px;
    }
    @media screen and (max-width: 767px) {
      max-width: 40px;
    }
    @media screen and (max-width: 575px) {
      max-width: 23px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;
export const FloatingImg = styled(Image)``;
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
