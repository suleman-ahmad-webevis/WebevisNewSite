import styled from "styled-components";
import Link from "next/link";
export const NavStyle = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  width: 100%;
  z-index: 9999;
  background-color: #fff;
  padding: 8px 0;
  font-family: "Outfit";
  @media screen and (min-width: 1400px) {
    padding: 15px 0;
  }
`;
export const NavHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  @media screen and (max-width: 825px) {
    display: none;
  }

  button {
    background: linear-gradient(116.68deg, #29aa51 1.5%, #008475 99.8%);
    box-shadow: 0px 3px 10px rgba(255, 204, 3, 0.43);
    border-radius: 12px;
    padding: 12px 14px;
    color: #fff;
    font-family: "Outfit";
  }
`;
export const NavUl = styled.section`
  display: flex;
  gap: 20px;
  @media screen and (min-width: 992px) {
    gap: 30px;
  }
  li {
    &:hover section {
      display: block;
      .one {
        display: none;
      }
      .two {
        display: none;
      }
      .three {
        display: none;
      }
    }
  }
`;
export const NavHover = styled.section`
  display: none;
  position: absolute;
  background-color: white;
  top: 30px;
  left: 120px;
  width: 30%;
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
      transition: 0.5s;
    }
  }
  li:hover {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ::after {
      width: 100%;
    }
    :nth-child(1):hover {
      .one {
        display: block;
      }
    }
    :nth-child(2):hover {
      .two {
        display: block;
        position: absolute;
        top: 13px;
      }
    }
    :nth-child(3):hover {
      .three {
        display: block;
        position: absolute;
        top: 13px;
      }
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
export const InsideHover = styled.section`
  display: none;
  position: absolute;
  background-color: white;
  top: 30px;
  left: 228.9px;
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
  background: #28b781;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.31);
  border-radius: 19.5px;
  display: none;
  @media screen and (max-width: 825px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const MobileNavItem = styled.div`
  @media screen and (min-width: 825px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  background: white;
  position: absolute;
  top: ${({ top }) => (top ? top : "0%")};
  left: 0;
  width: 100%;
  height: 280px;
  overflow-y: scroll;
  padding: 20px 0;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
`;
export const MobileItems = styled(Link)`
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  position: relative;
  color: #434956;
  :after {
    position: absolute;
    content: "";
    height: 2px;
    bottom: -4px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 0%;
    background: green;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  &:hover:after {
    width: 100%;
  }
  &:active:after {
    width: 100%;
  }
`;
export const MobileDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  li {
    font-family: "Outfit", sans-serif;
    font-size: 18px;
    list-style: none;
    color: #434956;
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