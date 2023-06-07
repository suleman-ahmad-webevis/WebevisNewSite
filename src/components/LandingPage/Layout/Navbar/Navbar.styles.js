import styled from "styled-components";
export const NavStyle = styled.header`
  position: sticky;
  top: 0;
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
.navigation {
    position: fixed;
    top: 50px;
    right: 0;
    width: 240px;
    border-radius: 20px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    text-decoration: none;
    padding: 40px 30px;
    transform: translateX(310px);
    transition: all 0.3s;
    background: #e6e6e6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    z-index: 9999;

    @media screen and (min-width: 600px) {
        z-index: 1;
        top: 60px;
    }
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 100px;
        box-shadow: none;
        width: auto;
        max-width: none;
        position: static;
        transform: none;
        transition: auto;
        background-color: #fff;
        padding: 0;
        border: 0;
        z-index: 0;
    }
    .active & {
      transform: none;
    }
  }
  .toggle {
    position: absolute;
    right: 20px;
    top: 10px;
    width: 50px;
    height: 50px;
    background: #28B781;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.31);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 999999;
    border-radius: 100px;

    @media screen and (min-width: 600px) {
        top: 10px;
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
}
    .toggle span:nth-child(1) {
    transform: translateY(-10px);
    width: 25px;
    left: 13px;
}
.toggle.active span:nth-child(1) {
    width: 40px;
    transform: translateY(0) rotate(45deg);
    transition-delay: 0.125s;
}
.toggle span:nth-child(2) {
    transform: translateY(10px);
    width: 25px;
    left: 13px;
}

.toggle.active span:nth-child(2) {
    width: 40px;
    transform: translateY(0) rotate(315deg);
    transition-delay: 0.25s;
}

.toggle.active span:nth-child(3) {
    transform: translateX(60px);
}
    span {
        position: absolute;
        width: 25px;
        height: 4px;
        background: #fff;
        border-radius: 10px;
        transition: 0.5s;
    }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
    @media screen and (min-width: 992px) {
      gap: 30px;
    }
  }
  a {
    font-size: 16px;
    font-weight: 600;
    color: #434956;
  }
  button {
    background: linear-gradient(116.68deg, #29aa51 1.5%, #008475 99.8%);
    box-shadow: 0px 3px 10px rgba(255, 204, 3, 0.43);
    border-radius: 12px;
    padding: 12px 14px;
    color: #fff;
    font-family: "Outfit";
    margin-top: 20px;
    @media screen and (min-width: 992px){
      margin-top: 0;
    }
  }
`;
