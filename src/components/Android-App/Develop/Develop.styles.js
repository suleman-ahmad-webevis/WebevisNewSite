import styled from "styled-components";
import BG from "../../../../public/assets/images/Android-App/Develop-BG.png";
export const DevelopHolder = styled.section`
  margin: 50px 0;
  padding: 20px 0;
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const DevelopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  .Content {
    max-width: 683px;
  }
  h2 {
    font-size: 45px;
    line-height: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  .img-holder {
    max-width: 471px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
