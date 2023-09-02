import styled from "styled-components";
import consult from "../../../../public/assets/images/ECommerencePage/consult.png";

export const ConsultSec = styled.div`
  background-image: url(${consult.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  padding: 25px 50px;
  @media screen and (max-width: 1200px) {
    br {
      display: none;
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 20px;
  }
  h3 {
    color: #fff;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 45px */
    text-transform: capitalize;
    @media screen and (max-width: 1200px) {
      font-size: 30px;
    }
    @media screen and (max-width: 991px) {
      text-align: center;
    }
  }
`;
