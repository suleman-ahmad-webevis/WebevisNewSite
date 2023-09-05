import styled from "styled-components";

export const CompanyHolder = styled.section`
  padding: 50px 0 217px 0;
  @media screen and (max-width: 991px) {
    padding: 25px 0 50px 0;
  }
`;
export const CompanyContent = styled.div`
  text-align: center;
  h2 {
    color: #424954;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 155px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(36px + (52 - 36) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 991px) {
      margin-bottom: 40px;
    }
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
    @media screen and (max-width: 1440px) {
      font-size: calc(20px + (30 - 20) * (100vw - 390px) / (1440 - 390));
      line-height: calc(24px + (35 - 24) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Col-holder {
    max-width: 1068px;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      align-items: center;
      row-gap: 40px;
    }
    .bg {
      position: absolute;
      top: -105px;
      left: 90px;
      @media screen and (max-width: 991px) {
        /* transform: rotate(90deg);
        top: 70px;
        left: 220px;
        max-width: 370px;
        height: 350px; */
        display: none;
      }
    }
    .mobile-bg {
      position: absolute;
      top: 16%;
      @media screen and (min-width: 992px) {
        display: none;
      }
    }
    .Col {
      display: flex;
      flex-direction: column;
      width: 222px;
      padding: 27px 17px;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.17);
      @media screen and (max-width: 991px) {
        width: 179px;
      }
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
