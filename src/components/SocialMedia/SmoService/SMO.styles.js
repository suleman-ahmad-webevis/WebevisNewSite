import styled from "styled-components";

export const SmoSection = styled.div`
  width: 100%;
  margin: 3rem auto 0 auto;
  position: relative;
`;
export const AbsoluteSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  background-color: #28b781;
  position: absolute;
  z-index: -1;
  top: 10%;
`;
export const SMOtext = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  height: 430px;

  h3 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #ffffff;
    border-bottom: 2px solid white;
    padding-bottom: 10px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1440 - 320));
    }
  }
  h1 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(20px + (32 - 20) * (100vw - 320px) / (1440 - 320));
    }
  }

  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(14px + (18 - 14) * (100vw - 320px) / (1440 - 320));
    }
  }
`;
export const SMOImg = styled.div`
  width: 60%;
  img {
    max-width: 100%;
    height: auto;
    display: none;
  }
`;
export const SMOImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
  img {
    max-width: 100%;
    height: auto;
  }
`;
