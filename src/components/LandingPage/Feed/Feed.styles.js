import { Flex } from "src/components/Flex.styles";
import styled from "styled-components";
import Qutos from "../../../assets/images/Feedback/Quotes.svg";
export const Client = styled.div`
  background: #eaf7ee;
  color: #424954;
  margin-bottom: 70px;
  display: none;
  @media screen and (min-width: 992px){
    display: block;
  }
  .slick-dots {
    button {
      &::before {
        font-size: 15px;
        color: #d9d9d9;
      }
    }
    .slick-active {
      button {
        &::before {
          background: linear-gradient(
            93.39deg,
            #28b781 21.84%,
            #cfef00 178.39%
          );
          border-radius: 15px;
          width: 15px;
          height: 15px;
          color: inherit;
        }
      }
    }
  }

  .Section {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
    @media screen and (min-width: 992px){
      padding: 45px 0;
    }
    p {
      font-size: 18px;
      max-width: 450px;
      margin-bottom: 15px;
      position: relative;
      @media screen and (min-width: 992px) {
        font-size: 22px;
          max-width: 580px;
        }
      &::before {
        content: "";
        position: absolute;
        background: url(${Qutos.src});
        left: 0;
        top: -75px;
        width: 82px;
        height: 60px;
      }
      @media screen and (min-width: 1400px) {
        font-size: 24px;
        margin-bottom: 20px;
      }
    }
    h4 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 15px;
    }

 
    .Image {
      img {
        max-width: 400px;
        height: 350px;
        border-radius: 50px;
        
        @media screen and (min-width: 992px) {
          max-width: 550px;
        }
        @media screen and (min-width: 1400px) {
          width: initial;
          height: initial;
        }
      }
    }
  }
`;
export const H2 = styled.div`
  h2 {
    font-size: 40px;
    font-weight: 600;
    color: #424954;
    text-align: center;
    margin-bottom: 40px;
    display: none;
  @media screen and (min-width: 992px){
    display: block;
  }
  }
`;
export const StyledFlexWrap = styled(Flex)`
    h3 {
      margin-top: 20px;
      font-size: 24px;
      font-weight: 700;
      transition: all 0.4s;
      /* width: 100%; */
    }
    &:hover{
        color: #28b781;
        .material-symbols-outlined{
        position: relative;
          animation: mymove 2s;
        }
      }      
        @keyframes mymove{
        from{
          left: 0;
        }
        to{
          left: 20px;
        }
    }
`