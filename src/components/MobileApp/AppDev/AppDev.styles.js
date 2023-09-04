import styled from "styled-components";
export const DevHolder = styled.section`
  padding: 50px 0 100px 0;
`;
export const Dev = styled.div`
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    h2 {
      color: #424954;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 52px;
    }
    p {
      max-width: 650px;
      color: #434956;
      font-size: 28px;
      line-height: 35px;
      font-weight: 400;
    }
  }
  .table {
    border-radius: 15px;
    border: 1px solid #d1d3d4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .Col {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-bottom: 1px solid #d1d3d4;
      padding: 15px 20px;
      border-right: 1px solid #d1d3d4;
      &:nth-last-child(1) {
        border-right: 0;
        border-bottom: 0;
      }
      &:nth-last-child(2) {
        border-bottom: 0;
      }
      &:nth-last-child(3) {
        border-right: 0;
      }
      &:nth-last-child(5) {
        border-right: 0;
      }
      h3 {
        color: #434956;
        font-size: 28px;
        line-height: 34px;
        font-weight: 700;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
      .title {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
  }
`;
