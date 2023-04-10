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
    @media screen and (max-width: 1300px) {
      font-size: 40px;
    }
    @media screen and (max-width: 900px) {
      font-size: 30px;
    }
    @media screen and (max-width: 400px) {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 700px) {
    width: 90%;
    /* margin: 2rem auto; */
  }
`;

export const CreatorPlan = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 7rem;
  position: relative;
  /* @media screen and (max-width: 800px) {
    transform: rotate(90deg);
    top: 200px;
  } */
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const CreatorBg = styled.div`
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 235px;
  /* width: 17.5%; */
  aspect-ratio: 1/1;
  border-radius: 50%;
  @media screen and (max-width: 1150px) {
    width: 210px;
  }
  @media screen and (max-width: 900px) {
    width: 190px;
  }
  @media screen and (max-width: 801px) {
    width: 170px;
  }
`;
export const CreatorBg1 = styled.div`
  background: white;
  width: 200px;
  /* width: 30%; */
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1150px) {
    width: 180px;
  }
  @media screen and (max-width: 900px) {
    width: 160px;
  }
  @media screen and (max-width: 801px) {
    width: 140px;
  }
`;

export const CreatorBg2 = styled.div`
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  width: 180px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1150px) {
    width: 170px;
  }
  @media screen and (max-width: 900px) {
    width: 140px;
  }
  @media screen and (max-width: 801px) {
    width: 120px;
  }
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
  @media screen and (max-width: 1150px) {
    width: 160px;
  }
  @media screen and (max-width: 900px) {
    width: 130px;
  }
  @media screen and (max-width: 801px) {
    width: 110px;
  }
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
    @media screen and (max-width: 1250px) {
      font-size: 60px;
    }
    @media screen and (max-width: 1001px) {
      font-size: 50px;
    }
    @media screen and (max-width: 851px) {
      font-size: 40px;
    }
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
    @media screen and (max-width: 1101px) {
      font-size: 24px;
      padding: 0 10px;
    }
    @media screen and (max-width: 1001px) {
      font-size: 16px;
    }
    @media screen and (max-width: 801px) {
      padding: 0;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1050px) {
    br {
      display: none;
    }
  }
`;

export const MoveAble = styled.div`
  width: 100%;
  position: absolute;
  top: -20%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1151px) {
    top: -25%;
  }
  @media screen and (max-width: 951px) {
    top: -30%;
  }
  /* @media screen and (max-width: 800px) {
    transform: rotate(90deg);
    top: 75%;
  } */
  img {
    transition: 0.5s ease-in;
    /* display: inline-block;
    vertical-align:top ;
    width: 100%; */
    /* height: auto; */
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const PlaneCreatorRes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  /* margin-bottom: 7rem; */
  position: relative;
  .imgres {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: -1;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
