import styled from "styled-components";

export const ChooseSec = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px;
  h2 {
    width: 74%;
    margin: auto;
    color: #424954;
    font-size: 45px;
    font-style: normal;
    margin-bottom: 50px;
    font-weight: 600;
    text-align: center;
    line-height: 150%;
    text-transform: capitalize;
  }
  .main_choose {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    ul {
      display: flex;
      gap: 5px;
      flex-direction: column;
      li {
        list-style: none;

        span {
          color: #434956;
          font-size: 28px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          text-transform: lowercase;
        }
      }
    }
  }
`;
