import styled from "styled-components";
import TalentBG from "../../../assets/images/HireDeveloper/Best-Talent-BG.png";
export const BestTalent = styled.section`
  padding-top: 84px;
`;
export const BestHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${TalentBG.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 0 40px;
  min-height: 241px;
  border-radius: 8px;
  position: relative;
`;
export const ImageHolder = styled.div`
  position: absolute;
  max-width: 423px;
  top: -158px;
  right: 0;
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
  }
  p {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  button {
    background-color: #fff;
    padding: 15px 17px;
    border-radius: 10px;
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
