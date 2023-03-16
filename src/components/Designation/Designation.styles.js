import styled, { css } from "styled-components";
import Default from "../../assets/images/Designation/Section-bg.png";
import Design from "../../assets/images/Designation/Design-bg.png";
import Customer from "../../assets/images/Designation/Customer-bg.png";
import Fintech from "../../assets/images/Designation/Fintech-bg.png";

export const Category = styled.div`
  /* background-image: url(${Default.src}); */

  max-width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 450px;
  transition:  all 0.5s ease-out;
  @media screen and (min-width: 1400px) {
    background-size: cover;
  }

  ${({ img }) =>
    img &&
    img == 1 &&
    css`
      background-image: url(${Default.src});
      /* background-size: cover; */
      /* transition:  all 0.3s ease-out;
      &:hover{
  img{
  transform: scale(0.7);
  } */
  
}
    `}
  ${({ img }) =>
    img &&
    img == 2 &&
    css`
      background-image: url(${Design.src});
    `}

${({ img }) =>
    img &&
    img == 3 &&
    css`
      background-image: url(${Customer.src});
    `}

${({ img }) =>
    img &&
    img == 4 &&
    css`
      background-image: url(${Fintech.src});
    `}
`;
export const End = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  max-width: 700px;
  margin: 0 auto;
  background-color: #434956;
  color: #fff;
  padding: 10px 0;
  border-radius: 0px 0px 60px 60px;
  @media screen and (min-width: 992px){
    max-width: 960px;
  }
  @media screen and (min-width: 1400px) {
    padding: 28px 0;
  }
  h2 {
    font-weight: 500;
    font-size: 35px;
    @media screen and (min-width: 1400px) {
      font-size: 44px;
    }
  }
  span {
    font-size: 20px;
    @media screen and (min-width: 1400px) {
      font-size: 24px;
    }
  }
`;
