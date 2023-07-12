import styled from "styled-components";
export const LastHeading = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  gap: 10px;

  h1 {
    font-weight: 700;
    font-size: 45px;
    color: #ffffff;
    @media screen and (max-width: 1440px) {
      font-size: calc(20px + (45 - 20) * (100vw - 390px) / (1440 - 390));
    }
    @media screen and (max-width: 390px) {
      width: 200px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
  button {
    width: 188px;
    height: 50px;
    @media screen and (max-width: 1440px) {
      width: calc(
        123px + (188 - 123) * (100vw - 390px) / (1440 - 390)
      ) !important;
      height: calc(
        35px + (50 - 35) * (100vw - 390px) / (1440 - 390)
      ) !important;
    }
  }
`;

export const Amazon = styled.section`
  background: linear-gradient(
    269.75deg,
    #cfef00 -42.69%,
    rgba(40, 183, 129, 0.95) 85.65%
  );
  margin-top: 50px;
`;
