import styled from "styled-components";
export const NavStyle = styled.header`
  position: sticky;
  top: 0;
     width: 100%;
  z-index: 9999;
  background-color: #fff;
  padding: 8px 0;
  font-family: "Outfit";
  @media screen and (min-width: 1400px){
    padding: 15px 0;
 
  }
`;
export const NavHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  ul {
    display: flex;
    gap: 20px;
    @media screen and (min-width: 992px){
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
  }
`;
