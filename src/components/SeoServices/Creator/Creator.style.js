import styled from "styled-components";

export const CreatorSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const CreatorText = styled.div`
  width: 60%;
  margin: 3rem auto 7rem auto;
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    text-align: center;
    color: #2b2c2f;
  }
`;

export const CreatorPlan = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 7rem;
  position: relative;
`;
export const CreatorBg = styled.div`
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 235px;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;
export const CreatorBg1 = styled.div`
  background: white;
  width: 200px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreatorBg2 = styled.div`
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  width: 180px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreatorBg3 = styled.div`
  background: white;

  width: 170px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &:hover {
    h1 {
      background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      opacity: 1;
    }
  }
  h1 {
    color: gray;
    opacity: 0.2;
    font-size: 80px;
    position: absolute;
    top: ${({ top }) => (top ? top : "-4%")};
    left: ${({ left }) => (left ? left : "21%")};
  }
  img {
  }
  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    text-align: center;
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export const MoveAble = styled.div`
  width: 100%;
  position: absolute;
  top: 35%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    transition: 0.5s ease-in;
  }
`;
