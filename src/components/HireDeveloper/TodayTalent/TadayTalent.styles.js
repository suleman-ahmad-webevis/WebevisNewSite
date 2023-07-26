import styled from "styled-components";
import TalentBG from "../../../assets/images/HireDeveloper/Best-Talent-BG.png";
export const BestTalentHolder = styled.section`
  padding-top: 84px;
`;
export const BestTalent = styled.div`
  background-image: url(${TalentBG.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  border-radius: 8px;
  @media screen and (max-width: 991px) {
    margin: 0 -20px;
    border-radius: 0;
  }
`;
export const BestHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 500px 35px 40px;
  position: relative;
  @media screen and (max-width: 991px) {
    display: block;
    max-width: 500px;
    margin: 0 auto;
    padding: 50px 0 0 0;
    text-align: center;
  }
`;
export const ImageHolder = styled.div`
  position: absolute;
  max-width: 423px;
  bottom: 0;
  right: 0;
  @media screen and (max-width: 991px) {
    position: static;
  }
  img {
    display: block;
    width: 100%;
  }
`;
export const Best = styled.div`
  max-width: 735px;
  h2 {
    color: #fff;
    font-size: 45px;
    font-weight: 600;
    margin-bottom: 20px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 30px;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
  button {
    background-color: #fff;
    padding: 13px 20px;
    border-radius: 10px;
    @media screen and (max-width: 991px) {
      margin-bottom: 30px;
    }
    span {
      font-size: 20px;
      font-weight: 600;
      background: var(
        --linear,
        linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
