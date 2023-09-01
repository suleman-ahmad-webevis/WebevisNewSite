import styled from "styled-components";
import BG from "../../../../public/assets/images/seoservices/teambg.png";
export const SeoHolder = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
    color: #fff;
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
