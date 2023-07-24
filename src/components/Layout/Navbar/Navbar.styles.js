import styled from "styled-components";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
export const DropDownIcon = styled(RiArrowDownSLine)`
  width: 16px;
  height: max-content;
  color: ${({ transform }) => (transform ? "#28B781" : "#898989")};
  transform: ${({ transform }) => (transform ? transform : "")};
  transition: 0.3s all ease-in-out;
`;
export const NavStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  width: 100%;
  z-index: 9999;
  background-color: #fff;
  padding: 8px 0;
  font-family: "Outfit";
  box-shadow: ${({ shadow }) => shadow && "0px 1px 10px #999"};
  @media screen and (min-width: 1400px) {
    padding: 15px 0;
  }
`;
export const MobileDropDownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: ${({ border }) => (border ? border : "none")};
`;

export const NavBrand = styled.div`
  width: 177px;
  @media screen and (max-width: 991px) {
    width: 154px;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
export const NavHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
export const Nav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 100px;
  a {
    font-size: 16px;
    font-weight: 600;
    color: #434956;
  }
  @media screen and (max-width: 1009px) {
    gap: 40px;
  }
  @media screen and (max-width: 855px) {
    gap: 10px;
  }
  @media screen and (max-width: 1018px) {
    display: none;
  }
`;
export const NavUl = styled.ul`
  display: flex;
  gap: 30px;

  @media screen and (min-width: 992px) {
    gap: 30px;
  }
  li {
    &:hover .only {
      display: block;
      /* height: 800px; */

      /* .one {
        display: none;
      }
      .two {
        display: none;
      }
      .three {
        display: none;
      } */
    }
  }
`;
export const NavHover = styled.section`
  display: none;
  position: absolute;
  top: ${({ top }) => (top ? top : "0")};
  left: ${({ left }) => (left ? left : "0")};
  right: ${({ right }) => (right ? right : "")};
  width: ${({ width }) => (width ? `${width}px` : "")};
  margin: 0 auto;
  padding-top: 25px;
  border-radius: 0px 0px 20px 20px;
  transition: 0.5s all ease-in-out;
  @media screen and (max-width: 1440px) {
    width: ${({ width, min }) => (
      width,
      min
        ? `calc(${min}px + (${width} - ${min}) * (100vw - 390px) / (1440 - 390))`
        : ""
    )};
  }
`;
export const Hoverctive = styled.div`
  border-radius: 0px 0px 20px 20px;
  background: #fff;
  box-shadow: ${({ shadow }) =>
    shadow ? "none" : "0px 7px 4px 0px rgba(0, 0, 0, 0.25)"};
  padding: ${({ shadow }) =>
    shadow ? "10px 0px 30px 0px" : "10px 30px 30px 30px"};
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  justify-content: space-around;
  gap: 1rem;
`;
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    a {
      color: #28b781;
    }
    span {
      opacity: 1;
    }
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8.667px;
  background: #fff;
  box-shadow: 0px 0px 3.7142858505249023px 0px rgba(0, 0, 0, 0.13);
  width: 35px;
  height: 35px;
  cursor: pointer;
  img {
    width: 23px;
    height: 23px;
  }
`;
export const Navlink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.5s all ease-in-out;
  a {
    color: #434956;
    font-size: 16px;
    font-family: "Outfit";
    font-weight: 400;
    @media screen and (max-width: 1018px) {
      font-size: 14px;
    }
  }
  span {
    opacity: 0;
    margin-top: 5px;
  }
`;
export const NavHeadingHover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  transition: 0.5s all ease-in-out;
  border-right: ${({ border }) =>
    border ? "none" : "1px solid rgba(234, 233, 233, 1)"};
  padding-right: 1rem;
  margin-top: ${({ top }) => (top ? top : "")};

  h5 {
    color: #434956;
    font-size: 20px;
    font-family: Outfit;
    font-weight: 700;
    margin-bottom: 1rem;
    @media screen and (max-width: 1440px) {
      font-size: calc(18px + (20 - 18) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const DesignHover = styled.section`
  display: none;
  position: absolute;
  background-color: white;
  top: 28px;
  left: 229.9px;
  width: 120%;
  border-radius: 10px;

  ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 20px;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      top: 40px;
      left: -1px;
      background-color: green;
      width: 0%;
      height: 2px;
      border-radius: 50px;
    }
  }
  li:hover {
    ::after {
      width: 100%;
    }
  }
  ul li a {
    color: black;
    text-align: left;
    font-size: 14px;
    position: relative;
  }
  ul li a:hover {
    color: green;
  }
`;
export const CustomerHover = styled.section`
  display: none;
  position: absolute;
  background-color: white;
  top: 30px;
  left: 230px;
  width: 120%;
  border-radius: 10px;
  ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 20px;
    position: relative;
    ::after {
      content: "";
      position: absolute;
      top: 40px;
      left: -1px;
      background-color: green;
      width: 0%;
      height: 2px;
      border-radius: 50px;
    }
  }
  li:hover {
    ::after {
      width: 100%;
    }
  }
  ul li a {
    color: black;
    text-align: left;
    font-size: 14px;
    position: relative;
  }
  ul li a:hover {
    color: green;
  }
`;
export const MobileNav = styled.div`
  width: 39px;
  height: 39px;
  /* background: #28b781; */
  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.31); */
  border-radius: 19.5px;
  display: none;
  @media screen and (max-width: 1018px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0px -1px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 18px 0;
`;
export const MobileNavItem = styled.div`
  @media screen and (min-width: 1019px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  background: white;
  position: absolute;
  height: 90vh;
  top: 100%;
  right: 0;
  width: ${({ width }) => (width ? width : "0%")};
  /* height: 500px; */
  overflow-y: scroll;
  /* padding: 0px; */
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: black;
`;
export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: ${({ padding }) => (padding ? padding : "0px")};
`;
export const MobileItems = styled(Link)`
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  color: #434956;
`;
export const MobileDropdown = styled.div`
  padding: ${({ padding }) => (padding ? padding : "0px")};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 5px;
  a {
    font-family: "Outfit", sans-serif;
    font-size: 16px;
    list-style: none;
    color: #434956;
    font-weight: 500;
  }
`;
export const MobileDropdownItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  li {
    font-family: "Outfit", sans-serif;
    font-size: 18px;
    list-style: none;
    color: #434956;
  }
`;