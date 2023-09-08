import styled from "styled-components";
export const OurAppHolder = styled.section`
  padding: 50px 0;
`;
export const OurAppContent = styled.div`
  display: flex;
  justify-content: space-between;
  .img-holder {
    max-width: 602px;
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
  .Content {
    max-width: 670px;
  }
  h2 {
    color: #424954;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  P {
    color: #434956;
    font-size: 28px;
    line-height: 32px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  ul {
    color: #434956;
    font-size: 24px;
    line-height: 28px;
    font-weight: 600;
    padding-left: 30px;
    li {
      position: relative;
      margin-bottom: 20px;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        position: absolute;
        top: 10px;
        left: -28px;
        width: 14px;
        height: 14px;
        border-radius: 100%;
        background: linear-gradient(98deg, #1fabd3 0.78%, #1ccc97 77.81%);
      }
    }
  }
`;
