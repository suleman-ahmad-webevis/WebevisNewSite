import styled from "styled-components";

export const AssurSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2b2c2f;
  width: 100%;
  gap: 50px;
  .main_assurance {
  
    h2 {
      color: #fff;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
      margin-bottom: 60px;
    }
    .assurance1 {
      display: flex;
      gap: 12.5px;
      .img {
        display: flex;
      }
      .text {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        h5 {
          color: #fff;
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%; /* 42px */
          text-transform: uppercase;
        }
        p {
          color: #fff;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 27px */
          max-width: 386px;
        }
      }
    }
  }
`;
