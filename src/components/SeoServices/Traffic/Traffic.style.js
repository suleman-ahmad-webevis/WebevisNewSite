import styled from "styled-components";

export const TrafficSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
  background: #424954;
  /* gap: 2rem; */
`;
export const Booster = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  img {
    /* display: inline-block;
    vertical-align: bottom; */
    /* width: 100%; */
    /* height: auto; */
  }
`;
export const BoostItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
export const BoostText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1400px) {
      font-size: 20px;
    }
  }
`;
export const BoostCircul = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ color }) => (color ? color : "#03F69B")};
  border-radius: 50%;
`;
export const TrafficText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  h2 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1400px) {
      font-size: 40px;
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1400px) {
      font-size: 24px;
    }
  }
`;
export const TrafficOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const OptionItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;
export const OptionIcon = styled.div`
  padding: 8px;
  width: 62px;
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  border-radius: 11.625px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
`;
export const OptionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-family: "GT Haptik", "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 150%;
    color: #ffffff;
    @media screen and (max-width: 1400px) {
      font-size: 22px;
    }
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #ffffff;
  }
`;
