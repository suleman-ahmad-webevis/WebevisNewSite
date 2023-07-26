import styled from "styled-components";
import Link from "next/link";

export const Button = styled(Link)`
  text-decoration: none;
  color: ${({ color }) => (color ? color : "#FFFFFF")};
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
  box-shadow: 1px 1px 5px rgba(41, 170, 81, 0.72);
  border-radius: 45px;
  width: max-content;
  padding: 10px 20px;
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;
