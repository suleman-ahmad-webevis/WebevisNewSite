import styled from "styled-components";
import BG from "../../../../public/assets/images/MobileApp/Company-bg.png";
export const CompanyHolder = styled.section`
  padding: 30px 0;
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 575px) {
    padding: 40px 0;
  }
`;
export const CompanyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  @media screen and (max-width: 575px) {
    display: block;
  }
  .Content {
    max-width: 860px;
    h2 {
      color: #fff;
      font-size: 35px;
      line-height: 40px;
      font-weight: 600;
      margin-bottom: 30px;
      @media screen and (max-width: 1440px) {
        font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
        line-height: calc(32px + (52 - 32) * (100vw - 390px) / (1440 - 390));
        margin-bottom: calc(15px + (30 - 15) * (100vw - 390px) / (1440 - 390));
      }
    }
    p {
      color: #fff;
      font-size: 20px;
      line-height: 28px;
      font-weight: 400;
      @media screen and (max-width: 1440px) {
        font-size: calc(18px + (20 - 18) * (100vw - 390px) / (1440 - 390));
        line-height: calc(28px + (28 - 22) * (100vw - 390px) / (1440 - 390));
      }
      @media screen and (max-width: 575px) {
        margin-bottom: 30px;
      }
    }
  }
`;
