import styled from "styled-components";
export const AppHolder = styled.section`
  padding: 100px 0 50px 0;
  @media screen and (max-width: 1440px) {
    padding: calc(50px + (100 - 50) * (100vw - 390px) / (1440 - 390)) 0
      calc(25px + (50 - 25) * (100vw - 390px) / (1440 - 390)) 0;
  }
`;
export const AppContent = styled.div`
  h2 {
    color: #424954;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (45 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(32px + (50 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  p {
    color: #434956;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    @media screen and (max-width: 1440px) {
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
      line-height: calc(20px + (22 - 20) * (100vw - 390px) / (1440 - 390));
    }
  }
  h3 {
    color: #434956;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    margin-bottom: 15px;
    @media screen and (max-width: 1440px) {
      font-size: calc(28px + (24 - 28) * (100vw - 390px) / (1440 - 390));
      line-height: calc(32px + (28 - 32) * (100vw - 390px) / (1440 - 390));
    }
  }
  .Col-holder {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 20px;
    @media screen and (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 575px) {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0;
      row-gap: 15px;
    }
    .Col {
      max-width: 450px;
      padding: 20px 20px 40px;
      border-radius: 27px;
      border: 1px solid var(--Linear, #1fabd3);
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
      margin: 0 auto;
      @media screen and (max-width: 991px) {
        padding: 20px calc(15px + (20 - 15) * (100vw - 390px) / (1440 - 390))
          calc(25px + (40 - 25) * (100vw - 390px) / (1440 - 390));
      }
      .img-holder {
        width: 70px;
        height: 70px;
        flex-shrink: 0;
        background-color: #f4fbf9;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        img {
          display: block;
          /* width: 35px;
          height: 45px; */
        }
      }
    }
  }
`;
