import styled from "styled-components";
import expert from "../../../../public/assets/images/IosDevelopment/expert.png";
export const ExpertSec = styled.div`
  background-image: url(${expert.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 44px 51px;
  .expert_text {
    display: flex;
    gap: 20px;
    .image {
      border-radius: 8px;
      background: #fff;
      width: 88px;
      height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text {
        display: flex;
        flex-direction: column;
        gap: 10px;
      h2 {
        color: #fff;
        font-size: 45px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 67.5px */
      }
      p {
        max-width: 570px;
        color: #fff;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 36px */
      }
    }
  }
`;
