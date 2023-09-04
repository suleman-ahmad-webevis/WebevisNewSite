import styled from "styled-components";
export const ScopeHolder = styled.section`
  padding-bottom: 50px;
`;
export const ScopeContent = styled.div`
  display: flex;
  justify-content: space-between;
  .heading {
    max-width: 603px;
    h2 {
      color: #424954;
      font-size: 45px;
      line-height: 50px;
      font-weight: 600;
      margin-bottom: 40px;
    }
  }
  .Content {
    max-width: 650px;
  }
  p {
    color: #434956;
    font-size: 28px;
    line-height: 35px;
    font-weight: 400;
    margin-bottom: 35px;
  }
  ul {
    color: #434956;
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    padding-left: 25px;
    li {
      margin-bottom: 25px;
      position: relative;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 100%;
        background: #28b781;
        top: 11px;
        left: -24px;
      }
    }
  }
`;
