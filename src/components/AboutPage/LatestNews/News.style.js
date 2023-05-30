import styled from "styled-components";
import Image from "next/image";

export const NewSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 44px;
  margin-top: 60px;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const NewSecOne = styled.div`
  padding: 20px 19px;
  background: #ffffff;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.22);
  border-radius: 18px;
  h1 {
    max-width: 361px;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: #424954;
  }
`;
export const Tag = styled.a`
  font-weight: 700;
  font-size: 20px;
  color: #424954;

  &::after {
    content: " ";
    width: 100px;
    display: block;
    position: absolute;
    width: 22px;
    height: 4px;
    background: #28b781;
    border-radius: 33px;
  }
`;
export const Img = styled(Image)`
  width: 100%;
  max-width: 366px;
  border-radius: 10px;
  height: 236px;
`;
export const NewHeading = styled.h1`
  font-weight: 600;
  font-size: 45px;
  text-align: center;
  margin-top: 50px;
  color: #424954;
  @media screen and (max-width: 658px) {
    font-size: 34px;
  }
`;

export const Listing = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  li {
    color: #a1a1a1;
    list-style: unset !important;
  }
`;
