import styled from "styled-components";

export const TechSec = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  h2 {
    color: #424954;
    font-size: 45px;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 67.5px */
    text-transform: capitalize;
    margin-bottom: 30px;
    @media screen and (max-width:1023px){
      font-size: 35px;
    }
    @media screen and (max-width:767px){
      font-size: 28px;
    }
  }
  p {
    color: #434956;
    text-align: center;
    max-width: 1185px;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 42px */
    text-transform: capitalize;
    margin: auto;
    margin-bottom: 100px;

    @media screen and (max-width:1023px){
      font-size: 24px;
    }
    @media screen and (max-width:574px){
      font-size: 18px;
    }
  }
.tech{
    margin: auto;
    width: 90%;
    display: flex;
    gap: 100px;
}
`;
