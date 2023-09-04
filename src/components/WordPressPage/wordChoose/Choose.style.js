import styled from "styled-components";

export const ChooseSec = styled.div`
  .main_choose {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    .parent {
      display: flex;
      gap: 30px;
      .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 104px;
        height: 104px;
        fill: #fff;
        filter: drop-shadow(0px 1px 13px rgba(0, 0, 0, 0.15));
        border-radius: 100px;
        background-color: #fff;
      }
      .choose_card {
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
        /* display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column; */
        h3 {
          
          color: #434956;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 42px */
          margin-bottom: 20px;
        }
        p {
          color: #434956;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 27px */
        }
      }
    }
  }
`;
