import styled from "styled-components";

export const ProcessSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  gap: 50px;
  .process {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h2 {
      color: #424954;
      text-align: center;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
    }
    h4 {
      color: #434956;
      max-width: 1192px;
      text-align: center;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      text-transform: capitalize;
    }
  }
  .parent {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    .process_one {
      display: flex;
      flex-direction: column;
      gap: 15px;
flex: 1;
      .texting {
        h3 {
          color: #434956;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        p {
          color: #434956;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 27px */
          max-width: 350px;
        }
      }
    }
    .process_image {
      img {
        width: 100%;
        height: auto;
      }
    }
    .process_two {
      display: flex;
      flex-direction: column;
      gap: 15px;
      flex: 1;


      .texting {
        h3 {
          color: #434956;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        p {
          color: #434956;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 27px */
          max-width: 350px;
        }
      }
    }
  }
`;
