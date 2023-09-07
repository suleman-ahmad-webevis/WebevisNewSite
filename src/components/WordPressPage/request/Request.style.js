import styled from "styled-components";
import request from "../../../../public/assets/images/wordPressPage/request.png";
export const RequestSec = styled.div`
  background-image: url(${request.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 50px 79px;
    @media screen and (max-width:1350px){
      padding: 50px 30px;

    }
    @media screen and (max-width:1023px){
flex-direction: column;
gap: 30px;
    }
  }
  h3 {
    color: #fff;
    font-size: 45px;
    max-width: 823px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    text-transform: capitalize;
    @media screen and (max-width:1200px){
    font-size: 35px;
    }
    @media screen and (max-width:1023px){
      text-align: center;
    }
    @media screen and (max-width:574px){
    font-size: 28px;
    }
  }
`;
