import styled from "styled-components";

export const ButtonPrimary = styled.button`
  width: ${({ width }) => (width ? width : "")};
  background: ${({ bg }) => (bg ? bg : "white")};
  color: ${({ color }) => (color ? color : "#a1a1a1")};
  border-radius: ${({ radius }) => (radius ? radius : "4px")};
  padding: ${({ padding }) => (padding ? padding : "0 1rem")};
  border: none;
  font-family: "General Sans", "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  transition: 0.5ms ease-in-out;
  margin: ${({ margin }) => (margin ? margin : "")};
  height: 50px;
  /* &:hover {
    background: linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%);
    color: white;
  } */
  /* @media screen and (max-width: 586px) {
    width: 80%;
    margin: auto;
    font-size: 16px;
  }
  @media screen and (max-width: 486px) {
    height: 40px;
    font-size: 14px;
  } */
`;
