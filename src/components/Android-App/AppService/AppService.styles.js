import styled from "styled-components";
export const AppHolder = styled.section`
  padding: 100px 0 50px 0;
`;
export const AppContent = styled.div`
  h2 {
    color: #424954;
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
  }
  p {
    color: #434956;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  }
  h3 {
    color: #434956;
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .Col-holder {
    /* width: 1227px; */
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 20px;
    .Col {
      max-width: 450px;
      padding: 20px 20px 40px;
      border-radius: 27px;
      border: 1px solid var(--Linear, #1fabd3);
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
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
          /* width: 45px;
          height: 45px; */
        }
      }
    }
  }
`;
