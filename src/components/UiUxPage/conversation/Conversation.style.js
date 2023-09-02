import styled from "styled-components";

export const ConSec = styled.div`
  .main_con {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .con {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      .first_con {
        display: flex;
        gap: 15x;
        .text {
          display: flex;
          flex-direction: column;
        }
      }
    }
    .con_image {
      flex-basis: 50%;
    }
  }
`;
