import styled from "styled-components";
export const Market = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const MarketCenter = styled.section`
  h1 {
    width: 50%;
    margin: auto;
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #424954;
  }
  p {
    width: 88%;
    margin: auto;
    text-align: center;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(18px + (28 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const MarketParent = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  gap: 15px;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;
export const MarketFlex = styled.section`
  width: 42%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 548px) {
    width: 100%;
  }
`;
export const MarketFlex1 = styled.section`
  width: 60%;
  margin: auto;
  margin-top: 13rem;

  @media screen and (max-width: 768px) {
    width: 50%;
    margin-top: 70px;
    img {
      width: 100%;
      object-fit: contain;
      height: max-content;
    }
  }
`;
export const MarketFlex2 = styled.section`
  width: 41%;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 548px) {
    width: 100%;
  }
`;
export const HeadingDiv = styled.section`
  background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
  width: 50px;
  padding: 7px 3px;
  text-align: center;
  border-radius: 13px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  color: #ffffff;
  margin-top: 40px;
`;
export const FlexOne = styled.section`
  h1 {
    margin: auto;
    margin-top: 40px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    color: #434956;
  }
  p {
    margin: auto;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #434956;
  }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(14px + (28 - 14) * (100vw - 390px) / (1440 - 390));
    }
    p {
      font-size: calc(12px + (18 - 12) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const FlexImage = styled.section`
  img {
    object-fit: contain;
  }
`;
export const Button = styled.button`
  width: 65%;
  margin: auto;
  font-family: "OutFit";
  font-style: normal;
  font-weight: 700;
  padding: 10px 3px;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  background: linear-gradient(97.77deg, #1fabd3 0.78%, #1ccc97 77.81%);
  border-radius: 13px;
  margin-top: 120px;
  margin-left: 120px;
  @media screen and (max-width: 548px) {
    width: 109%;
    margin-left: 0px;
    font-size: 10px;
    margin-top: 40px;
  }
`;
