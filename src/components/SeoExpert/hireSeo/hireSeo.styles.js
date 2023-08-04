import styled from "styled-components";
import BG from "../../../assets/images/SeoExpert/Seo-bg.png";
export const SeoHolder = styled.section`
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 28px 0;
`;
export const Seo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  h2 {
    font-size: 30px;
    line-height: 35px;
    font-weight: 600;
    text-transform: uppercase;
    background: linear-gradient(97.77deg, #00c3fb 0.78%, #00feb1 77.81%),
      linear-gradient(0deg, #ffffff, #ffffff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (30 - 18) * (100vw - 390px) / (1440 - 390));
      line-height: calc(24px + (35 - 24) * (100vw - 390px) / (1440 - 390));
      text-align: center;
    }
  }
  @media screen and (max-width: 690px) {
    flex-direction: column;
    gap: 20px;
  }
`;
