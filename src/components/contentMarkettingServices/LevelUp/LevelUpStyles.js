import styled from "styled-components";
import BG from "../../../assets/images/HireDeveloper/Developers-BG.png";

export const LevelUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(${BG.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 31px;
  padding: 60px 40px;
  margin: 5rem 0;
  @media screen and (max-width: 860px) {
    flex-direction: column;
    padding: 50px 40px;
  }
  position: relative;
  .Static {
    display: none;
    img {
      max-width: 100%;
      height: auto;
    }
    @media screen and (max-width: 860px) {
      display: block;
      position: relative;
      top: 100px;
    }
  }
  .absolute {
    position: absolute;
    right: 40px;
    img {
      max-width: 100%;
      height: auto;
    }
    @media screen and (max-width: 860px) {
      display: none;
    }
  }
`;
export const LevelText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
  @media screen and (max-width: 860px) {
    align-items: center;
    gap: 40px;
    max-width: 100%;
  }
  h1 {
    font-weight: 600;
    font-size: 45px;
    line-height: 150%;
    color: #ffffff;
    margin: 0;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 860px) {
      text-align: center;
    }
  }

  button {
    border-radius: 48px;
    margin-top: 30px;

    @media screen and (max-width: 1440px) {
      border-radius: calc(
        9.4961px + (48 - 9.4961) * (100vw - 340px) / (1440 - 340)
      );
      margin-top: calc(10px + (30 - 10) * (100vw - 340px) / (1440 - 340));
    }
  }
`;

