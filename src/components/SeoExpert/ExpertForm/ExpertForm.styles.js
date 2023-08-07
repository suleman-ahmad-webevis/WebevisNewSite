import styled from "styled-components";
import BG from "../../../assets/images/SeoExpert/Expert-Bg.png";
export const ExpertHolder = styled.section`
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px;
  p {
    color: #a1a1a1;
  }
`;
export const Expert = styled.div`
  .Seo {
    text-align: center;
    margin-bottom: 40px;
    h2 {
      color: #fff;
      font-size: 45px;
      font-weight: 600;
      line-height: 50px;
      margin-bottom: 40px;
    }
    p {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .Grid {
    h3 {
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      line-height: 28px;
    }
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
  }
`;
