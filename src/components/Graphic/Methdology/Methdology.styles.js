import styled from "styled-components";
export const MethdologyHolder = styled.section`
  padding: 50px 0;
  h2 {
    color: #424954;
    font-size: 45px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    color: #434956;
    font-size: 28px;
    font-weight: 400;
    line-height: 32px;
    max-width: 862px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`;
export const CardHolder = styled.section`
  display: flex;
  justify-content: space-between;

  .Card {
    width: 32%;
    padding: 39px 37px;
    border-radius: 9px;
    color: #434956;
    transition: background 0.3s ease, color 0.5s;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.13);
    &:hover {
      background: linear-gradient(151deg, #1fabd3 0%, #1ccc97 100%);
      color: #fff;
      img {
        filter: invert(100%) sepia(52%) saturate(47%) hue-rotate(300deg)
          brightness(115%) contrast(100%);
      }
      li {
        &::before {
          background-color: #fff;
        }
      }
    }
    .img-holder {
      max-width: 97px;
      min-height: 97px;
      margin-bottom: 25px;
      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }
    h3 {
      font-size: 28px;
      font-weight: 700;
      line-height: 32px;
      margin-bottom: 22px;
    }
    li {
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 15px;
      position: relative;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #434956;
        top: 10px;
        left: -18px;
        border-radius: 100px;
      }
    }
  }
`;
