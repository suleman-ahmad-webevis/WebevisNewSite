import styled from "styled-components";
import Bg from "../../../assets/images/footer/foot-bg.png";
export const FooterHolder = styled.div`
  padding: 50px 0 30px 0;
  background-image: url(${Bg.src});
  background-size: cover;
  color: #fff;

  font-weight: 500;
  p {
    font-size: 16px;
  }
`;
export const Links = styled.div`
  max-width: 160px;
  padding-bottom: 40px;
  ul {
    display: flex;
    align-items: center;
    gap: 10px;
    
    li {
      background-color: #fff;
      width: 30px;
      height: 30px;
      border-radius: 7px;
      display: flex;
      justify-content: center;
      align-items: center;


      &:hover {
        background: linear-gradient(116.68deg, #29aa51 1.5%, #008475 99.8%);
        svg {
          fill: white;
        }
      }
    }
  }
`;
export const Foot = styled.div`
  max-width: 210px;
 
  li {
    padding-bottom: 10px;
    transition: .5s;
    &:hover{
      transform: translateX(10px);
      a{
      color: #28B781;
      }
    }
  }
  a {
    color: #fff;
  }
  h3 {
    padding-bottom: 15px;
  }
  h4 {
    padding-bottom: 10px;
  }
  img {
    width: 13px;
    padding-right: 5px;
  }
`;
export const Mail = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 30px;
  background: linear-gradient(
    90.82deg,
    #28b781 -1.31%,
    rgba(207, 239, 0, 0.82) 176.12%
  );
  box-shadow: 0px 1px 12px rgba(255, 204, 3, 0.22);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    padding: 15px 20px;
    border-radius: 9px 0px 0px 9px;
    outline: none;
    width: 250px;
  }
  button {
    padding: 15px 30px;
    background: #28b781;
    border-radius: 0px 9px 9px 0px;
    color: #fff;
  }
`;
export const Policy = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-top: 30px;
  p {
    margin: 0;
  }
  span {
    font-size: 16px;
    color: #30ab5b;
  }
`;
