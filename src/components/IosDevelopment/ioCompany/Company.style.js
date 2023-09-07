import styled from "styled-components";

export const CompanySec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 70px;
  .texting {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      max-width: 916px;
      color: #424954;
      text-align: center;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%; /* 67.5px */
      text-transform: capitalize;
    }
    h4 {
      max-width: 1028px;
      color: #434956;
      text-align: center;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 42px */
      text-transform: capitalize;
    }
  }
  .main_company {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  @media screen and (max-width:1205px){
    grid-template-columns: repeat(2, 1fr);

  }
    .card {
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
      padding: 37px 0px;
      .card_body {
        display: flex;
        gap: 12px;
        .image {
          display: flex;
          img {
            display: block;
            width: 35px;
            height: 35px;
          }
        }
        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          h2 {
            color: #434956;
            text-align: center;
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 42px */
            text-transform: capitalize;
          }
          p {
            color: #434956;
            width: 315px;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 27px */
          }
        }
      }
    }
  }
`;
