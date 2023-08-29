import styled from "styled-components";
export const DesignHolder = styled.section`
  padding: 50px 0;
`;
export const Design = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    color: #424954;
    font-size: 45px;
    font-weight: 600;
    line-height: 50px;
    margin-bottom: 20px;
  }
  h3 {
    color: #28b781;
    font-size: 35px;
    font-weight: 400;
    line-height: 38px;
    margin-bottom: 15px;
  }
  p {
    color: #434956;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
  }
  .img-holder {
    width: 511px;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .Design-content {
    max-width: 598px;
  }
`;
