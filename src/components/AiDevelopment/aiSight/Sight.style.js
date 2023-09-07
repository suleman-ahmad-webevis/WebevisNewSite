import styled from "styled-components";

export const SightSec = styled.div`
  background: #28b781;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 20px;
    @media screen and (max-width:991px) {
        flex-direction: column;
        gap: 30px;
    }
    @media screen and (max-width:574px) {
        padding: 30px 9px;
    }
  }
  h3 {
    color: #fff;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 52.5px */
    text-transform: capitalize;
    max-width: 994px;
    @media screen and (max-width:991px) {
        text-align: center;
       
    }
    @media screen and (max-width:574px) {
        font-size: 28px;

       
    }
  }
`;
