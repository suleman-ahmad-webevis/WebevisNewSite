import styled from "styled-components";
import background from "../../../assets/images/Services/SemServices/Sembg.png";
export const LookSec = styled.section`
  background-image: url(${background.src});
  background-position: center;
  background-size: cover;
  margin: 60px 0px 50px;
  .container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 87px;
 
    @media screen and (max-width: 1174px) {
      padding: 50px 30px;
    }
    @media screen and (max-width: 997px) {
      flex-wrap:wrap;
    }
  }

`;
export const LookText = styled.section`
  h1 {
    font-style: normal;
    font-weight: 700;
    font-family: Outfit;
    font-size: 48px;
    color: #ffffff;
    margin: 0;
    line-height: 64px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    font-family: Outfit;
    color: #f2f4f5;
  }


  // @media screen and (max-width: 658px) {
  //   text-align: center;
  //   h1 {
  //     font-size: 34px;
  //     margin-top: 16px;
  //     line-height: 45px;
  //   }
  //   p {
  //     font-size: 17px;
  //   }
  //   img {
  //     margin: 0;
  //   }
  // }
  @media screen and (max-width: 1440px) {
    h1 {
      font-size: calc(28px + (48 - 28) * (100vw - 390px) / (1440 - 390));
    }
    p{
      font-size: calc(16px + (18 - 16) * (100vw - 390px) / (1440 - 390));
    }
  }
`;
export const LookFlex = styled.section`
  display: flex;
  flex-direction: row;
  gap:40px;

  // @media screen and (max-width: 658px) {
  //   flex-direction: column;
  // }
`;
export const LookImage = styled.section`
  width: 88px;
  height: 88px;
  background: #ffffff;
  border-radius: 8px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:10px;
`
export const LookInside = styled.section`
  display: flex;
  flex-direction: column;
`;
export const Btn = styled.section`
@media screen and (max-width: 997px) {
  
  margin-top:40px;
}
@media screen and (max-width: 556px) {
  width:90%;
  margin:auto;
  margin-top:20px;

}
`;