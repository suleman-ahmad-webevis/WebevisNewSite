import styled from "styled-components";

export const StyledTalent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  border-radius: 22px;
  background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
  padding: 40px 30px;
  display: flex;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1050px) {
    br {
      display: none;
    }
  }
  @media screen and (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
`;
export const TalentText = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  h2 {
    color: #fff;
    font-family: "Outfit";
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (35 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  button {
    label {
      font-family: "outfit";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
      background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      transition: 0.5s all ease-in-out;
    }
    &:hover {
      label {
        background: #fff;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    }
  }
  @media screen and (max-width: 1050px) {
    width: 60%;
  }
  @media screen and (max-width: 930px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;
export const TalentImage = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: none;
  }
  @media screen and (max-width: 930px) {
    width: 100%;
    margin: 0 auto;
    img {
      display: block;
    }
  }
`;

export const TalentWrapper = styled.div`
  max-width: 1440px;
  margin: 300px auto 2rem auto;
  position: relative;
  @media screen and (max-width: 1440px) {
    margin: calc(100px + (300 - 100) * (100vw - 390px) / (1440 - 390)) auto 2rem
      auto;
  }
`;
export const FloatingImage = styled.div`
  position: absolute;
  bottom: -10%;
  right: 0;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media screen and (max-width: 930px) {
    display: none;
  }
`;