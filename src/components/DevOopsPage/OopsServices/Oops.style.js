import styled from "styled-components";
export const OopSec = styled.div`
  margin: 100px 0;
  h2 {
    color: #424954;
    text-align: center;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    @media screen and (max-width: 767px) {
            font-size: 35px;

    }
    @media screen and (max-width: 574px) {
            font-size: 28px;

    }
  }

  .main_parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media screen and (max-width: 1106px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 574px) {
      grid-template-columns: repeat(2, 1fr);
      gap:30px;

    }

    .oop {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 50px;
      
      h3 {
        color: #434956;
        text-align: center;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%; /* 42px */
        @media screen and (max-width: 574px) {
            font-size: 24px;

    }
      }
    }
  }
`;
