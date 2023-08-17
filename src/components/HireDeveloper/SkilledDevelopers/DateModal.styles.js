import styled from "styled-components";
export const DateHolder = styled.div`
  background-color: #fff;
  border-radius: 20px;
  display: flex;

  h2 {
    color: #434956;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .Content {
    border-right: 1px solid #d9d9d9;
    width: 40%;
  }
  .image-holder {
    padding: 50px;
    border-bottom: 1px solid #d9d9d9;
  }
  .company-content {
    padding: 40px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    text-align: start;
    .span {
      color: #a1a1a1;
      margin-bottom: 10px;
    }

    ul {
      margin-bottom: 20px;
      li {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        color: #898989;
        &:nth-last-child(1) {
          align-items: start;
          margin-bottom: 0;
        }
      }
    }
    p {
      color: #434956;
      margin-bottom: 70px;
    }
  }
  .Cookie {
    display: flex;
    align-items: center;
    span {
      color: #28b781;
      font-size: 16px;
      line-height: 18px;
      border-right: 1px solid #898989;
      padding-right: 10px;
      &:nth-last-child(1) {
        border-right: 0;
        padding-left: 10px;
      }
    }
  }
  .Calendar {
    padding: 60px 20px;
  }
`;
