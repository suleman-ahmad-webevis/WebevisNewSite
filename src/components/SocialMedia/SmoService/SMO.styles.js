import styled from "styled-components";

export const SmoSection = styled.div`
  position: relative;
  margin: 7rem auto 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`;
export const AbsoluteSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  background-color: #28b781;
  /* position: absolute; */
  z-index: -1;
  /* top: 10%; */
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const SMOtext = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 0;
  gap: 2rem;
  height: 430px;
  @media screen and (max-width: 768px) {
    align-items: center;
  }

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
      font-size: calc(16px + (24 - 16) * (100vw - 390px) / (1440 - 390));
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
      font-size: calc(28px + (32 - 28) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 768px) {
      text-align: center;
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
      font-size: calc(14px + (18 - 14) * (100vw - 390px) / (1440 - 390));
    }
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;
export const SMOImg = styled.div`
  width: 60%;
  img {
    max-width: 100%;
    height: auto;
    display: none;
    @media screen and (max-width: 900px) {
      display: block;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SMOImage = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  z-index: 10;
  position: absolute;
  img {
    max-width: 100%;
    height: auto;
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;
export const SmoButton = styled.button`
  width: ${({ width }) => (width ? width : "")};
  background: ${({ bg }) => (bg ? bg : "white")};
  color: ${({ color }) => (color ? color : "#FFFFFF")};
  border-radius: ${({ radius }) => (radius ? radius : "10px")};
  padding: ${({ padding }) => (padding ? padding : "0 2rem")};
  border: none;
  font-family: "General Sans", "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  transition: 0.5ms ease-in-out;
  margin: ${({ margin }) => (margin ? margin : "")};
  height: 50px;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
`;