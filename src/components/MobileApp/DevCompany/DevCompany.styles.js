import styled from "styled-components";

export const CompanyHolder = styled.section`
  padding: 50px 0 217px 0;
`;
export const CompanyContent = styled.div`
  text-align: center;
  h2 {
    color: #424954;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 155px;

    span {
      color: #28b781;
    }
  }
  h3 {
    color: #434956;
    font-size: 30px;
    line-height: 35px;
    font-weight: 700;
    margin-top: 20px;
  }
  .Col-holder {
    max-width: 1068px;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    .bg {
      position: absolute;
      top: -105px;
      left: 90px;
    }
    .Col {
      width: 222px;
      padding: 27px 17px;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.17);
    }
    .img-holder {
      width: 76px;
      height: 76px;
      margin: 0 auto;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
`;
