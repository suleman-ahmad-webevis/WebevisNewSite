import styled from "styled-components";

export const SmoSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const AbsoluteSec = styled.div`
  background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
  width: 50%;
  padding: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0px;
  }
`;
export const SMOtext = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
  @media screen and (max-width: 768px) {
    align-items: center;
    gap: 1rem;
    button {
      margin-top: 20px;
    }
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
    max-width: 400px;
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
      max-width: 100%;
    }
  }

  p {
    max-width: 481px;

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
  width: 50%;
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SMOImage = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
  img {
    max-width: 100%;
    height: auto;
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