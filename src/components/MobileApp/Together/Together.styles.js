import styled from "styled-components";
import BG from "../../../../public/assets/images/MobileApp/Together-bg.png";
export const TogetherHolder = styled.section`
  padding-top: 30px;
`;
export const TogetherContent = styled.div`
  max-width: 730px;
  margin: 0 auto;
  background-image: url(${BG.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 68px 65px;
  h3 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    background: var(
      --new,
      linear-gradient(93deg, #28b781 21.84%, #cfef00 178.39%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
  }
  h2 {
    color: #434956;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.25);
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 30px;
  }
`;
