import styled from "styled-components";
import back from "../../EmailServices/assests/outBack.png";
export const OutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  margin: auto;
  margin-top: 30px;
`;
export const OutDiv = styled.section`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const DivOne = styled.section`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    margin: 0;
    color: #424954;
    @media screen and (max-width: 1440px) {
      h1 {
        font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #28b781;
    margin-bottom: -10px;
    @media screen and (max-width: 1440px) {
      h1 {
        font-size: calc(12px + (20 - 12) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
    @media screen and (max-width: 1440px) {
      h1 {
        font-size: calc(18px + (18 - 28) * (100vw - 390px) / (1440 - 390));
      }
    }
  }
`;
export const DivTwo = styled.section`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  padding: 14px 20px;
  border-radius: 20px;
  background-image: url(${back.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #ffffff;
    margin: 0 0 33px 0;
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;

    margin: 0 0 33px 0;
    font-size: 32px;
    line-height: 150%;
    color: #ffffff;
  }
`;
export const InsideDiv = styled.section`
  display: flex;
  flex-direction: column;
`;
export const InsideFlex = styled.section`
  display: flex;
  align-items: center;
  span {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    color: #434956;
  }
  small {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 23px;
    color: #ffffff;
  }
  img {
    margin-top: -20px;
    margin-right: 10px;
    width: 18px;
    object-fit: contain;
  }
`;
export const OutSec = styled.section`
  width: 100%;
  margin-top: 100px;
 
  img{
    width:100%;
    object-fit: contain;
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
