import styled from "styled-components";
import BG from "../../../../public/assets/images/MobileApp/Company-bg.png";
export const CompanyHolder = styled.section`
  padding: 30px 0;
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const CompanyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .Content {
    max-width: 860px;
    h2 {
      color: #fff;
      font-size: 35px;
      line-height: 40px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    p {
      color: #fff;
      font-size: 20px;
      line-height: 28px;
      font-weight: 400;
    }
  }
`;
