import styled from "styled-components";
import background from "../../../assets/images/Services/WebDevelopmentServices/background.png";

export const InquirSec = styled.section`
  background-image: url(${background.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 60px 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 34px 27px 34px 64px;
    @media screen and (max-width:767px){
      flex-direction: column;
      gap: 30px;
    padding: 34px 0;

      }
    
  }
  .inqiur_Text {
    h3 {
      color: #fff;
      font-size: 45px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      @media screen and (max-width:1024px){
        font-size: 35px;
      }
      @media screen and (max-width:767px){
      text-align: center;
      }
      @media screen and (max-width:574px){
        font-size: 28px;

      }
    }
  }
`;
