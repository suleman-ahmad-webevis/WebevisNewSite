import styled from "styled-components";
export const ClientSec = styled.section`
  background: #eaf7ee;
  padding: 50px 10px;
`;
export const ClientImg = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 51px;
  justify-items: center;
  align-items: center;
  img {
    width: 147px;
    object-fit: contain;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(103px, 1fr));
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(153px, 1fr));
  }
`;
export const ClientHeading = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 45px;
  color: #424954;
  margin-top: 60px;
  @media screen and (max-width: 658px) {
    font-size: 35px;
    margin-top: auto;
  }
`;
export const LastHeading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    269.75deg,
    #cfef00 -42.69%,
    rgba(40, 183, 129, 0.95) 85.65%
  );
  h1 {
    font-weight: 700;
    font-size: 45px;
    line-height: 57px;
    color: #ffffff;
  }
`;
export const Button = styled.button`
  color: white;
  background: #434956;
  border-radius: 6px;
  width: 213px;
  height: 45px;
  margin-bottom: 20px;
  font-size: 20px;
`;
