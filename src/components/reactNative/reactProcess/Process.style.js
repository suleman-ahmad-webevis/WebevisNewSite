import styled from "styled-components";

export const ProcessSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 70px 0;

  h2 {
    color: #434956;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 70px;
    @media screen and (max-width: 1023px) {
      font-size: 35px;
    }
    @media screen and (max-width: 767px) {
      font-size: 28px;
    }
  }
  .main_process {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: flex-start;
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    } @media screen and (max-width: 575px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }
    .process_card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .text {
        h3 {
          color: #434956;
          text-align: center;
          font-size: 28px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          @media screen and (max-width: 1200px) {
            font-size: 24px;
          }
        
        }
      }
    }
  }
`;
