import styled from "styled-components";
export const LastHeading = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  h1 {
    font-weight: 700;
    font-size: 45px;
    margin: 0;
    padding: 20px;
    color: #ffffff;
  }
  @media screen and (max-width: 658px) {
    h1 {
      margin: auto;
      font-size: 20px;
    }
  }
`;
export const Button = styled.button`
  color: white;
  background: #434956;
  border-radius: 6px;
  max-width: 180px;
  font-size: 20px;
  padding: 10px 30px;

  @media screen and (max-width: 658px) {
    padding: 6px 8px;
    font-size: 15px;
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
